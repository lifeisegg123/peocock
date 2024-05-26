import { HTMLArkProps, ark } from "@ark-ui/react";
import { ReactNode, useId, useState } from "react";
import { css, cva, cx } from "styled-system/css";
import { vstack } from "styled-system/patterns";
import { createContext } from "~/utils/createContext";

const [Context, useContext] = createContext<{
  fieldId: string;
  errorId: string;
  required?: boolean;
  errorMessage?: string;
}>("FormField");

export function FormField({
  children,
  required,
  errorMessage,
  ...props
}: {
  children: ReactNode;
  required?: boolean;
  errorMessage?: string;
} & HTMLArkProps<"div">) {
  const fieldId = useId();
  const errorId = useId();

  return (
    <Context value={{ fieldId, required, errorId, errorMessage }}>
      <ark.div
        {...props}
        className={cx(vstack({ gap: "6", alignItems: "stretch" }))}
      >
        {children}
      </ark.div>
    </Context>
  );
}

FormField.Field = Field;
FormField.Label = Label;
FormField.ErrorMessage = ErrorMessage;

function Field(props: Omit<HTMLArkProps<"div">, "id">) {
  const [isFocused, setIsFocused] = useState(false);
  const { fieldId, required, errorId, errorMessage } = useContext("Field");
  return (
    <ark.div
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...{ ...props, required }}
      id={fieldId}
      aria-describedby={errorMessage ? errorId : undefined}
      aria-invalid={Boolean(errorMessage)}
      className={cx(errorStyle({ error: Boolean(errorMessage) && !isFocused }))}
    />
  );
}

const errorStyle = cva({
  variants: {
    error: {
      true: {
        outline: "none !important",
        border: "solid 1px",
        borderColor: "Error",
      },
    },
  },
});

function Label({ children, ...props }: Omit<HTMLArkProps<"label">, "htmlFor">) {
  const { fieldId, required } = useContext("Label");
  return (
    <ark.label
      {...props}
      htmlFor={fieldId}
      className={cx(
        css({ textStyle: "Caption/13/M", color: "Text/20" }),
        props.className
      )}
    >
      {children}
      {required ? <span className={css({ color: "Primary" })}>*</span> : null}
    </ark.label>
  );
}

function ErrorMessage({ children, ...props }: HTMLArkProps<"span">) {
  const { errorId, errorMessage } = useContext("ErrorMessage");
  return (
    <ark.span
      {...props}
      id={errorId}
      className={cx(
        css({
          textStyle: "Caption/12/R",
          color: "Error",
        })
      )}
    >
      {errorMessage}
      {children}
    </ark.span>
  );
}
