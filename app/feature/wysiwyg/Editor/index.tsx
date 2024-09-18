import DragHandle from "@tiptap-pro/extension-drag-handle-react";
import Color from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import Code from "@tiptap/extension-code";
import {
  BubbleMenu,
  EditorContent,
  EditorContext,
  FloatingMenu,
  useCurrentEditor,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { colors } from "~/styles/colors";
import { Menu } from "./Menu";

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Color,
      TextStyle,
      Code,
      Placeholder.configure({
        placeholder: "기술 스택을 설명해도 좋아요~!",
      }),
    ],
    editorProps: {
      attributes: {
        class: css({
          height: "100%",
          p: 24,
          color: "Text/20",
          background: "BG/CardBG",
          borderRadius: 8,
          "& *": {
            m: 8,
          },
          "& h1": {
            fontSize: "xx-large",
          },
          "& h2": {
            fontSize: "x-large",
          },
          "& ul, & ol": {
            listStyle: "revert",
            listStyleType: "revert",
          },
          "& code": {
            backgroundColor: "Text/60",
            fontFamily: "revert",
            px: 4,
            py: 2,
            borderRadius: 4,
          },
          "& pre": {
            px: 8,
            py: 4,
            borderRadius: 8,
            backgroundColor: "Black/80",
            "& > code": {
              background: "none",
            },
          },
        }),
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const initialColor = colors["Text/20"].value;
    editor.commands.setColor(initialColor);
    editor.chain().focus().setColor(initialColor).run();
  }, [editor]);

  if (!editor) return null;
  return (
    <EditorContext.Provider value={{ editor }}>
      <FloatingMenu editor={editor}>
        <Menu />
      </FloatingMenu>
      <BubbleMenu editor={editor}>
        <Menu />
      </BubbleMenu>
      <Drag />
      <EditorContent editor={editor} className={css({ height: "100%" })} />
    </EditorContext.Provider>
  );
}

function Drag() {
  const { editor } = useCurrentEditor();
  if (!editor) return null;
  return (
    <DragHandle
      className={flex({
        width: 16,
        height: 16,
        alignItems: "center",
        cursor: "grab",
      })}
      editor={editor}
    >
      <svg
        className={css({
          width: 16,
          height: 16,
          color: "Text/30",
        })}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 9h16.5m-16.5 6.75h16.5"
        />
      </svg>
    </DragHandle>
  );
}
