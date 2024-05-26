import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { css } from "styled-system/css";
import { GNB } from "./components/GNB";
import styles from "./index.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
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
        })}
      >
        <GNB />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
