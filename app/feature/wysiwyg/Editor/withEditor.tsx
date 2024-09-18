import { Editor, useCurrentEditor } from "@tiptap/react";
import { ComponentType } from "react";

export type WithEditorProps = {
  editor: Editor;
};

export function withEditor<P extends WithEditorProps>(
  WrappedComponent: ComponentType<P>
) {
  return function WithLoadingComponent(props: Omit<P, "editor">) {
    const { editor } = useCurrentEditor();
    if (!editor) return null;

    return <WrappedComponent {...(props as P)} editor={editor} />;
  };
}
