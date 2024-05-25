import { LoaderFunctionArgs, json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabaseClient } from "~/lib/supabase.client";
import { createSupabaseServerClient } from "~/lib/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { headers, supabase } = createSupabaseServerClient(request);
  const { data } = await supabase.auth.getUser();
  return json(data, { headers });
};
export default function Index() {
  const kakaoLogin = () => {
    supabaseClient.auth.signInWithOAuth({
      provider: "kakao",
    });
  };
  const user = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Welcome to Remix</h1>
      {user ? (
        <pre>{JSON.stringify(user)}</pre>
      ) : (
        <button onClick={kakaoLogin}>kakao login</button>
      )}
    </div>
  );
}
