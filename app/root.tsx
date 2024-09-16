import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";

import { css } from "styled-system/css";
import { GNB } from "./components/GNB";
import styles from "./index.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export async function loader() {
  return json({
    ENV: {
      KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
    },
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Peacock</title>
        <Meta />
        <Links />
      </head>
      <body
        className={css({
          display: "flex",
          alignItems: "stretch",
          overflowX: "hidden",
          backgroundColor: "BG/Background",
        })}
      >
        <GNB />
        <main className={css({ width: "100%" })}>{children}</main>
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
