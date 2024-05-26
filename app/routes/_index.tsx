import { type MetaFunction } from "@remix-run/node";
import { DatePicker } from "~/components/DatePicker";
import { FormField } from "~/components/FormField";
import { Input } from "~/components/Input";
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
          <FormField errorMessage="에러">
            <FormField.Label>테스트 date picker</FormField.Label>
            <FormField.Field asChild>
              <DatePicker.Trigger asChild>
                <Input readOnly />
              </DatePicker.Trigger>
            </FormField.Field>
            <FormField.ErrorMessage />
          </FormField>
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
              ></DatePicker.DayViewBody>
            </DatePicker.Table>
          </DatePicker.DayView>
        </DatePicker.Content>
      </DatePicker>

      <Select items={["1", "2", "3"]}>
        <FormField errorMessage="에러">
          <FormField.Label>테스트 셀렉트</FormField.Label>
          <FormField.Field asChild>
            <Select.FieldBox placeholder="test123" />
          </FormField.Field>
          <FormField.ErrorMessage />
          <Select.Content>
            <Select.ItemGroup />
          </Select.Content>
        </FormField>
      </Select>

      <FormField errorMessage="에러">
        <FormField.Label>테스트 인풋 필드</FormField.Label>
        <FormField.Field asChild>
          <Input rightSlot={<Input.Clear />} placeholder="테스트 인풋 필드" />
        </FormField.Field>
        <FormField.ErrorMessage />
      </FormField>

      <FormField errorMessage="에러" required>
        <FormField.Label>테스트 required 필드</FormField.Label>
        <FormField.Field asChild>
          <Input
            rightSlot={<Input.Clear />}
            placeholder="테스트 required 필드"
          />
        </FormField.Field>
        <FormField.ErrorMessage />
      </FormField>
    </div>
  );
}
