import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";
import { CreateRecruitmentRequest } from "~/api";
import { DatePicker } from "~/components/DatePicker";
import { FieldBox } from "~/components/FieldBox";
import { FormField } from "~/components/FormField";
import { InputBox } from "~/components/Input";
import { Select } from "~/components/Select";
import { Combobox } from "~/components/TagComboBox";
import { PositionField } from "~/feature/recruit/PositionField";

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

export default function Recruit() {
  return (
    <form className={hstack({ alignItems: "stretch" })}>
      <span className={vstack({ alignItems: "stretch", width: "100%" })}>
        <h1>프로젝트 기본</h1>
        <Select items={RECRUIT_TYPES}>
          <Select.Control>
            <Select.Label required>모집 구분</Select.Label>
            <Select.FieldBox placeholder="스터디 / 프로젝트 / 네트워킹" />
          </Select.Control>
          <Select.Content>
            <Select.ItemGroup />
          </Select.Content>
        </Select>
        <PositionField />
        <Select items={RECRUIT_PURPOSE}>
          <Select.Control>
            <Select.Label required>모집 목적</Select.Label>
            <Select.FieldBox placeholder="수입,창업 / 포트폴리오 / 기타" />
          </Select.Control>
          <Select.Content>
            <Select.ItemGroup />
          </Select.Content>
        </Select>
        <div className={hstack({ alignItems: "flex-end" })}>
          <Select className={css({ width: "40%" })} items={RECRUIT_PURPOSE}>
            <Select.Control>
              <Select.Label required>모집 수단</Select.Label>
              <Select.FieldBox placeholder="오픈채팅 / 구글폼 / 메일" />
            </Select.Control>
            <Select.Content>
              <Select.ItemGroup />
            </Select.Content>
          </Select>
          <InputBox>
            <InputBox.Content className={css({ width: "60%" })}>
              <InputBox.Input placeholder="링크를 입력해주세요" />
            </InputBox.Content>
          </InputBox>
        </div>
        <div className={hstack({})}>
          <Select className={css({ width: "40%" })} items={RECRUIT_PURPOSE}>
            <Select.Control>
              <Select.Label required>진행 방식</Select.Label>
              <Select.FieldBox placeholder="온라인 / 오프라인 / 온/오프라인" />
            </Select.Control>
            <Select.Content>
              <Select.ItemGroup />
            </Select.Content>
          </Select>

          <DatePicker className={css({ width: "60%" })}>
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
      </span>
    </form>
  );
}
