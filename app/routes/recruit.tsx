import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useLoaderData, useNavigate } from "@remix-run/react";
import { ReactNode } from "react";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";
import { createRecruitment, CreateRecruitmentRequest, getStatic } from "~/api";
import { createApiClient } from "~/api/client";
import { Button } from "~/components/Button";
import { CountController } from "~/components/CountController";
import { DatePicker } from "~/components/DatePicker";
import { FieldBox } from "~/components/FieldBox";
import { FormField } from "~/components/FormField";
import { InputBox } from "~/components/Input";
import { Select } from "~/components/Select";
import { PositionField } from "~/feature/recruit/PositionField";
import { Editor } from "~/feature/wysiwyg/Editor";

const RECRUIT_TYPES: Array<{
  label: string;
  value: CreateRecruitmentRequest["type"];
}> = [
  { label: "스터디", value: "STURY" },
  { label: "프로젝트", value: "PROJECT" },
  { label: "네트워킹", value: "NETWORKING" },
];

const RECRUIT_PURPOSE: Array<{
  label: string;
  value: CreateRecruitmentRequest["purpose"];
}> = [
  { label: "수입,창업", value: "INCOME_STARTUP" },
  { label: "포트폴리오", value: "PORTFOLIO" },
  { label: "기타", value: "ETC" },
];

const INTERVAL: Array<{
  label: string;
  value: CreateRecruitmentRequest["interval"]["type"];
}> = [
  { label: "주", value: "WEEKLY" },
  { label: "월", value: "MONTHLY" },
  { label: "추후 협의", value: "TO_BE_DISCUSSED" },
];

const PROCESS_TYPE: Array<{
  label: string;
  value: CreateRecruitmentRequest["processType"];
}> = [
  { label: "온라인", value: "ONLINE" },
  { label: "오프라인", value: "OFFLINE" },
  { label: "온/오프라인", value: "BOTH" },
];

const METHOD_TYPE: Array<{
  label: string;
  value: CreateRecruitmentRequest["method"]["type"];
}> = [
  { label: "오픈채팅", value: "OPEN_CHAT" },
  { label: "구글폼", value: "GOOGLE_FORM" },
  { label: "메일", value: "EMAIL" },
];

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const body = Object.fromEntries(
    formData.entries()
  ) as unknown as CreateRecruitmentRequest; // FIXME: validation
  const { data, error, response } = await createRecruitment({
    client: createApiClient(),
    body,
  });
  console.log(body, data, error, response.status);
  return null;
};

export const loader = async ({}: LoaderFunctionArgs) => {
  const { data, error, request } = await getStatic({
    client: createApiClient(),
  });
  return json(data);
};

export default function Recruit() {
  const navigate = useNavigate();

  return (
    <Form
      method="post"
      className={vstack({
        alignItems: "stretch",
        justify: "stretch",
        height: "100%",
        px: 80,
        py: 60,
      })}
    >
      <div
        className={hstack({
          alignItems: "stretch",
          height: "100%",
          gap: 28,
        })}
      >
        <span className={vstack({ alignItems: "stretch", width: "100%" })}>
          <Title>프로젝트 기본</Title>
          <div
            className={vstack({
              alignItems: "stretch",
              gap: 40,
            })}
          >
            <Select name="type" required items={RECRUIT_TYPES}>
              <Select.Control>
                <Select.Label>모집 구분</Select.Label>
                <Select.FieldBox placeholder="스터디 / 프로젝트 / 네트워킹" />
              </Select.Control>
              <Select.Content>
                <Select.ItemGroup />
              </Select.Content>
            </Select>
            <PositionField />
            <Select name="purpose" required items={RECRUIT_PURPOSE}>
              <Select.Control>
                <Select.Label>모집 목적</Select.Label>
                <Select.FieldBox placeholder="수입,창업 / 포트폴리오 / 기타" />
              </Select.Control>
              <Select.Content>
                <Select.ItemGroup />
              </Select.Content>
            </Select>
            <div className={hstack({ alignItems: "flex-end" })}>
              <Select
                name="method_type"
                required
                className={css({ width: "40%" })}
                items={METHOD_TYPE}
              >
                <Select.Control>
                  <Select.Label>모집 수단</Select.Label>
                  <Select.FieldBox placeholder="오픈채팅 / 구글폼 / 메일" />
                </Select.Control>
                <Select.Content>
                  <Select.ItemGroup />
                </Select.Content>
              </Select>
              <InputBox>
                <InputBox.Content className={css({ width: "60%" })}>
                  <InputBox.Input
                    name="method_contact"
                    placeholder="링크를 입력해주세요"
                  />
                </InputBox.Content>
              </InputBox>
            </div>
            <div className={hstack({})}>
              <Select
                name="processType"
                required
                className={css({ width: "40%" })}
                items={PROCESS_TYPE}
              >
                <Select.Control>
                  <Select.Label>진행 방식</Select.Label>
                  <Select.FieldBox placeholder="온라인 / 오프라인 / 온/오프라인" />
                </Select.Control>
                <Select.Content>
                  <Select.ItemGroup />
                </Select.Content>
              </Select>

              <DatePicker name="endedAt" className={css({ width: "60%" })}>
                <DatePicker.Control>
                  <DatePicker.Label>모집 마감일</DatePicker.Label>
                  <DatePicker.Trigger asChild>
                    <FieldBox>
                      <DatePicker.Input placeholder="선택안함" readOnly />
                    </FieldBox>
                  </DatePicker.Trigger>
                  <FormField.ErrorMessage />
                </DatePicker.Control>
                <DatePicker.Content>
                  <DatePicker.DayView>
                    <DatePicker.Navigator />
                    <DatePicker.Table>
                      <DatePicker.DayViewHead></DatePicker.DayViewHead>
                      <DatePicker.DayViewBody
                        renderCell={(day) => (
                          <DatePicker.DayViewCell day={day}>
                            ??
                          </DatePicker.DayViewCell>
                        )}
                      />
                    </DatePicker.Table>
                  </DatePicker.DayView>
                </DatePicker.Content>
              </DatePicker>
            </div>
            <div className={hstack({ alignItems: "flex-end" })}>
              <DatePicker name="duration" className={css({ width: "60%" })}>
                <DatePicker.Control>
                  <DatePicker.Label>프로젝트 기간</DatePicker.Label>
                  <DatePicker.Trigger asChild>
                    <FieldBox>
                      <DatePicker.Input placeholder="협의후 진행" readOnly />
                    </FieldBox>
                  </DatePicker.Trigger>
                  <FormField.ErrorMessage />
                </DatePicker.Control>
                <DatePicker.Content>
                  <DatePicker.DayView>
                    <DatePicker.Navigator />
                    <DatePicker.Table>
                      <DatePicker.DayViewHead></DatePicker.DayViewHead>
                      <DatePicker.DayViewBody
                        renderCell={(day) => (
                          <DatePicker.DayViewCell day={day} />
                        )}
                      />
                    </DatePicker.Table>
                  </DatePicker.DayView>
                </DatePicker.Content>
              </DatePicker>

              <Select
                name="interval_type"
                required
                className={css({ width: "40%" })}
                items={INTERVAL}
              >
                <Select.Control>
                  <Select.Label>진행주기</Select.Label>
                  <Select.FieldBox placeholder="주 / 월 / 추후 협의" />
                </Select.Control>
                <Select.Content>
                  <Select.ItemGroup />
                </Select.Content>
              </Select>

              <CountController
                name="interval_frequency"
                affix="회"
                minValue={1}
              />
            </div>
          </div>
        </span>
        <span className={vstack({ alignItems: "stretch", width: "100%" })}>
          <Title>프로젝트 소개</Title>
          <InputBox>
            <InputBox.Content className={css({ mb: 12, height: 60 })}>
              <InputBox.Input
                name="title"
                className={css({
                  textStyle: "Headline/20/M",
                })}
                placeholder="제목을 입력해주세요."
              />
            </InputBox.Content>
          </InputBox>
          <Editor>
            <Editor.HiddenInput name="content" />
          </Editor>
        </span>
      </div>
      <div
        className={hstack({
          justifyContent: "flex-end",
          mt: 20,
          gap: 8,
        })}
      >
        <Button size="36" variant="secondary" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button type="submit" size="36">
          작성 완료
        </Button>
      </div>
    </Form>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <h2
      className={css({ textStyle: "Headline/24/M", color: "Text/20", mb: 40 })}
    >
      {children}
    </h2>
  );
}
