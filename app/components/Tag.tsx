import { HTMLArkProps, ark } from "@ark-ui/react";
import { ReactNode } from "react";
import { RecipeVariantProps, cva, cx } from "styled-system/css";

export function Tag({
  size,
  color,
  border,
  rightNode,
  children,
  ...props
}: HTMLArkProps<"div"> & TagStyleProps & { rightNode?: ReactNode }) {
  return (
    <ark.div
      {...props}
      className={cx(
        tagStyle({ color, border, size, hasRightNode: Boolean(rightNode) }),
        props.className
      )}
    >
      {children}
      {rightNode}
    </ark.div>
  );
}

type TagStyleProps = RecipeVariantProps<typeof tagStyle>;

const tagStyle = cva({
  defaultVariants: {
    size: "large",
    color: "default",
  },
  base: {
    borderRadius: "2",
    display: "flex",
    alignItems: "stretch",
    textStyle: "Caption/12/M",
  },
  variants: {
    size: {
      small: {
        height: "18",
        px: "6",
        py: "2",
      },
      large: {
        height: "24",
        px: "8",
        py: "4",
      },
    },
    color: {
      default: {
        color: "#D2E1FF",
        backgroundColor: "#31323A",
        borderColor: "#474750",
      },
      dev: {},
      design: {},
      pm: {},
      skill: {
        border: "none",
      },
      project: {
        color: "#EDDFDA",
        backgroundColor: "#323A39",
        borderColor: "#4C5554",
      },
      study: {
        color: "#CAFFF9",
        backgroundColor: "#3A3432",
        borderColor: "#564E4B",
      },
    },
    border: {
      true: {
        border: "solid 1px",
      },
    },
    hasRightNode: {
      true: {
        gap: "2",
        pr: 4,
      },
    },
  },
  compoundVariants: [
    {
      color: "pm",
      size: "large",
      css: {
        backgroundColor: "#14EBEB",
        color: "#003E3E",
      },
    },
    {
      color: "pm",
      size: "small",
      css: {
        backgroundColor: "#0F3A3A",
        borderColor: "#175858",
        color: "#14EBEB",
      },
    },
    {
      color: "design",
      size: "large",
      css: {
        backgroundColor: "#9679FF",
        color: "#090029",
      },
    },
    {
      color: "design",
      size: "small",
      css: {
        backgroundColor: "#29243E",
        borderColor: "#564B7F",
        color: "#BFADFF",
      },
    },
    {
      color: "dev",
      size: "large",
      css: {
        backgroundColor: "#E9FF3E",
        color: "#3A4200",
      },
    },
    {
      color: "dev",
      size: "small",
      css: {
        backgroundColor: "#2C2F17",
        borderColor: "#565D1E",
        color: "#E9FF3E",
      },
    },
  ],
});
