import { ReactNode } from "react";
import { hstack } from "styled-system/patterns";

export interface HeaderProps {
  leftNode?: ReactNode;
  rightNode?: ReactNode;
}

export function Header({ leftNode, rightNode }: HeaderProps) {
  return (
    <header
      className={hstack({
        height: "68",
        width: "100%",
        justify: "space-between",
        py: "10",
        px: "80",
      })}
    >
      {leftNode}
      {rightNode}
    </header>
  );
}
