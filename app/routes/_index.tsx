import { type MetaFunction } from "@remix-run/node";
import { Basic } from "~/components/DatePicker";

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
      <Basic />
    </div>
  );
}
