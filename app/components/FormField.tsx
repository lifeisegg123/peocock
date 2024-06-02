import { HTMLArkProps, ark } from "@ark-ui/react";
import { css, cx } from "styled-system/css";

export type LabelProps = HTMLArkProps<"label"> & { required?: boolean };

function Label({ children, required, ...props }: LabelProps) {
  return (
    <ark.label
      {...props}
      className={cx(
        css({
          textStyle: "Caption/13/M",
          color: "Text/20",
          display: "block",
          mb: "6",
        }),
        props.className
      )}
    >
      {children}
      {required ? <span className={css({ color: "Primary" })}>*</span> : null}
    </ark.label>
  );
}

function ErrorMessage({ children, ...props }: HTMLArkProps<"span">) {
  return (
    <ark.span
      {...props}
      className={cx(
        css({
          textStyle: "Caption/12/R",
          color: "Error",
        }),
        props.className
      )}
    >
      {children}
    </ark.span>
  );
}

export const FormField = {
  Label,
  ErrorMessage,
};
