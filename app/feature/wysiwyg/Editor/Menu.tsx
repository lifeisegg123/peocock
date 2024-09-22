import { withEditor } from "./withEditor";
import { cva } from "styled-system/css";
import { flex } from "styled-system/patterns";
import SvgBulletList from "~/icons/lib/BulletList";
import SvgOrderList from "~/icons/lib/OrderList";
import { ReactNode } from "react";
import SvgCodeBlock from "~/icons/lib/CodeBlock";

export const Menu = withEditor(({ editor }) => {
  return (
    <div className={menuStyle}>
      <input
        className={itemStyle()}
        type="color"
        onChange={(event) => {
          editor.chain().focus().setColor(event.target.value).run();
        }}
        value={editor.getAttributes("textStyle").color}
        data-testid="setColor"
      />
      <Item
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive("bold")}
      >
        <b>B</b>
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleItalic().run()}
        isActive={editor.isActive("italic")}
      >
        <i>I</i>
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
      >
        <s>S</s>
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleStrike().run()}
        isActive={editor.isActive("strike")}
      >
        <u>U</u>
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive("heading", { level: 1 })}
      >
        H1
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive("heading", { level: 2 })}
      >
        H2
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive("bulletList")}
      >
        <SvgBulletList />
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        isActive={editor.isActive("orderedList")}
      >
        <SvgOrderList />
      </Item>
      <Item
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        isActive={editor.isActive("codeBlock")}
      >
        <SvgCodeBlock />
      </Item>
    </div>
  );
});

type ItemProps = {
  children: ReactNode;
  onClick: VoidFunction;
  isActive: boolean;
};

function Item({ onClick, isActive, children }: ItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={itemStyle({ active: isActive })}
    >
      {children}
    </button>
  );
}

const menuStyle = flex({
  backgroundColor: "BG/LineColor",
  px: 8,
  py: 4,
  borderRadius: 8,
});

const itemStyle = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    color: "Text/20",
  },
  variants: {
    active: {
      true: {
        bgColor: "BG/CardBG",
      },
    },
  },
});
