import { type MetaFunction } from "@remix-run/node";
import { DatePicker } from "~/components/DatePicker";
import { Basic, Select } from "~/components/Select";

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
          <DatePicker.Trigger>123455</DatePicker.Trigger>
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
        <Select.FieldBox placeholder="test123" />
        <Select.Content>
          <Select.ItemGroup />
        </Select.Content>
      </Select>
      <Basic />
    </div>
  );
}
