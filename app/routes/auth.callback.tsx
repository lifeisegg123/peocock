import { LoaderFunction, redirect } from "@remix-run/node";
import { signIn } from "~/api";
import { createApiClient } from "~/api/client";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (!code) {
    throw new Error("TODO: 나중에 좀 고쳐라");
  }
  const {
    response: { headers },
  } = await signIn({
    client: createApiClient(),
    body: { code, provider: "KAKAO" },
  });
  const setCookie = headers.get("set-cookie");
  const responseHeaders = new Headers();
  responseHeaders.set("set-cookie", setCookie ?? "");

  return redirect("/", { headers: responseHeaders });
};

export default function AuthCallback() {
  return <div></div>;
}
