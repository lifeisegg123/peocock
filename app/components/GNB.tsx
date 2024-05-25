import { Link, NavLink } from "@remix-run/react";
import { ReactNode } from "react";
import { css } from "styled-system/css";
import { vstack } from "styled-system/patterns";

export function GNB() {
  return (
    <aside
      className={vstack({
        backgroundColor: "BG/CardBG",
        width: "240px",
        px: "16",
        pt: "100",
        pb: "40",
        justify: "space-between",
        flexShrink: 0,
        alignItems: "stretch",
      })}
    >
      <nav
        className={vstack({
          gap: "4",
          alignItems: "stretch",
        })}
      >
        <NavigationItem to="/" leftNode={<div>icon</div>}>
          홈
        </NavigationItem>
        <NavigationItem to="/team-build" leftNode={<div>icon</div>}>
          팀구성
        </NavigationItem>
        <NavigationItem to="/retrospective" leftNode={<div>icon</div>}>
          회고
        </NavigationItem>
        <NavigationItem to="/projects" leftNode={<div>icon</div>}>
          프로젝트
        </NavigationItem>
      </nav>
      <div
        className={vstack({
          alignItems: "stretch",
          ml: "20",
          gap: "12",
        })}
      >
        <ExternalLink to="https://naver.com">서비스 소개</ExternalLink>
        <ExternalLink to="https://naver.com">개인정보 처리방침</ExternalLink>
        <ExternalLink to="https://naver.com">이용약관</ExternalLink>
      </div>
    </aside>
  );
}

type NavigationItemProps = {
  to: `/${string}`;
  children: ReactNode;
  leftNode: ReactNode;
};

function NavigationItem({ children, to, leftNode }: NavigationItemProps) {
  return (
    <NavLink
      to={to}
      className={css({
        display: "flex",
        color: "Text/40",
        p: "20",
        textStyle: "Body/16/M",
        gap: "16",
        borderRadius: "4",
        "&.active": {
          color: "Text/10",
          backgroundColor: "BG/HighLight",
          textStyle: "Body/16/B",
        },
      })}
    >
      {leftNode}
      {children}
    </NavLink>
  );
}

type ExternalLinkProps = {
  children: ReactNode;
  to: string;
};

function ExternalLink({ children, to }: ExternalLinkProps) {
  return (
    <Link
      to={to}
      className={css({
        color: "Text/40",
        textStyle: "Caption/13/M",
      })}
    >
      {children}
    </Link>
  );
}
