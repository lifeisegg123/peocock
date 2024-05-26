import { type MetaFunction } from "@remix-run/node";
import { DatePicker } from "~/components/DatePicker";

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
    </div>
  );
}
