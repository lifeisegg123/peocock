import { ButtonHTMLAttributes } from "react";
import { RecipeVariantProps, cva, cx } from "styled-system/css";
import { HTMLArkProps, ark } from "@ark-ui/react";

export type ButtonProps = HTMLArkProps<"button"> &
  RecipeVariantProps<typeof buttonStyle>;

export function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <ark.button
      {...props}
      className={cx(buttonStyle({ variant, size }), props.className)}
    />
  );
}

const buttonStyle = cva({
  base: {
    borderRadius: "4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textStyle: "Body/16/M",
  },
  defaultVariants: {
    size: "52",
    variant: "primary",
  },
  variants: {
    variant: {
      primary: {
        color: "White",
        backgroundColor: "Primary",
        "&:hover": {
          backgroundColor: "#591FFF",
        },
        "&:active": {
          backgroundColor: "#361498",
        },
        "&:disabled": {
          backgroundColor: "#140A33",
          color: "Black/70",
        },
      },
      secondary: {
        color: "White",
        backgroundColor: "#303039",
        "&:hover": {
          backgroundColor: "#343440",
        },
        "&:active": {
          backgroundColor: "#212129",
        },
      },
    },
    size: {
      "52": {
        height: "52",
        width: "100%",
      },
      "48": {
        height: "48",
        px: "24",
      },
      "36": {
        height: "36",
        px: "12",
        textStyle: "Body/14/M",
      },
    },
  },
});
