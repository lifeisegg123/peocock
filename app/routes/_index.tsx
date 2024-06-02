import { type MetaFunction } from "@remix-run/node";
import { DatePicker } from "~/components/DatePicker";
import { FormField } from "~/components/FormField";
import { InputBox } from "~/components/Input";
import { Select } from "~/components/Select";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>

      <DatePicker>
        <DatePicker.Control>
          <DatePicker.Label>테스트 date picker</DatePicker.Label>
          <InputBox>
            <InputBox.Content asChild>
              <DatePicker.Trigger>
                <InputBox.Input readOnly />
              </DatePicker.Trigger>
            </InputBox.Content>
          </InputBox>
          <FormField.ErrorMessage />
        </DatePicker.Control>
        <DatePicker.Content>
          <DatePicker.DayView>
            <DatePicker.Navigator />
            <DatePicker.Table>
              <DatePicker.DayViewHead></DatePicker.DayViewHead>
              <DatePicker.DayViewBody
                renderCell={(day) => (
                  <DatePicker.DayViewCell day={day}>??</DatePicker.DayViewCell>
                )}
              />
            </DatePicker.Table>
          </DatePicker.DayView>
        </DatePicker.Content>
      </DatePicker>

      <Select items={["1", "2", "3"]}>
        <Select.Control>
          <Select.Label>테스트 셀렉트</Select.Label>
          <Select.FieldBox placeholder="test123" />
        </Select.Control>
        <Select.Content>
          <Select.ItemGroup />
        </Select.Content>
      </Select>

      <InputBox>
        <InputBox.Label>테스트 인풋 필드</InputBox.Label>
        <InputBox.Content>
          <InputBox.Input placeholder="테스트 인풋 필드" />
          <InputBox.Clear />
        </InputBox.Content>
      </InputBox>

      {/* <Multiple /> */}
    </div>
  );
}
