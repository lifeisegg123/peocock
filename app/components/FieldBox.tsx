import { ark } from "@ark-ui/react";
import { ComponentProps } from "react";
import { cx } from "styled-system/css";
import { hstack } from "styled-system/patterns";

export function FieldBox(props: ComponentProps<typeof ark.div>) {
  return (
    <ark.div
      {...props}
      className={cx(
        hstack({
          borderRadius: "6",
          border: "solid 1px",
          borderColor: "BG/LineColor",
          bgColor: "BG/CardBG",
          color: "Text/20",
          pr: "12",
          pl: "16",
          width: "320",
          height: "48",
          justify: "space-between",
          textStyle: "Body/14/M",
          "[data-placeholder-shown] > &": {
            color: "Text/60",
          },
          _placeholderShown: {
            color: "Text/60",
          },
          _focus: {
            outline: "none",
            borderColor: "Primary!",
          },
          _focusWithin: {
            outline: "none",
            borderColor: "Primary!",
          },
          _focusVisible: {
            outline: "none",
            borderColor: "Primary!",
          },
        }),
        props.className
      )}
    />
  );
}
