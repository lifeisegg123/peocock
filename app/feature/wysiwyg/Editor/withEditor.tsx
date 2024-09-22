import { Editor, useCurrentEditor } from "@tiptap/react";
import { ComponentType } from "react";

type EditorProps = {
  editor: Editor;
};

export function withEditor<P extends object>(
  WrappedComponent: ComponentType<P & EditorProps>
) {
  return function WithLoadingComponent(props: Omit<P, "editor">) {
    const { editor } = useCurrentEditor();
    if (!editor) return null;

    return <WrappedComponent {...(props as P)} editor={editor} />;
  };
}
