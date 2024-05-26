import {
  ButtonHTMLAttributes,
  ChangeEvent,
  ElementRef,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
} from "react";
import { css, cx } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { useControllableState } from "~/hooks/useControllableState";
import SvgX from "~/icons/lib/X";
import { createContext } from "~/utils/createContext";

type InputElement = ElementRef<"input">;

const [Context, useContext] = createContext<{
  value?: string;
  onValueChange: (value: string) => void;
  isFocused: boolean;
  inputId: string;
  inputNode: InputElement | null;
}>("Input");

interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "defaultValue"
  > {
  onValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  rightSlot?: ReactNode;
}

export function Input({
  value: valueProp,
  defaultValue,
  onChange,
  onValueChange,
  rightSlot,
  className,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [value, setValue] = useControllableState({
    defaultProp: defaultValue ?? "",
    prop: valueProp,
    onChange: onValueChange,
  });

  const [inputNode, setInputNode] = useState<null | InputElement>(null);

  const inputId = useId();

  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    onFocus?.(e);
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    setIsFocused(false);
  };

  return (
    <Context
      value={{
        onValueChange: setValue,
        inputNode,
        value,
        isFocused,
        inputId,
      }}
    >
      <div
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={hstack({
          width: "320",
          height: "48",
          bgColor: "BG/CardBG",
          borderRadius: "6",
          "&:focus-within": {
            outline: "solid 1px",
            outlineColor: "Primary",
          },
          py: "14",
          pr: "12",
          pl: "16",
        })}
      >
        <input
          {...props}
          id={inputId}
          ref={(ref) => setInputNode(ref)}
          value={value}
          onChange={handleChange}
          className={cx(
            css({
              height: "20",
              width: "100%",
              textStyle: "Body/14/M",
              outline: "none",
              color: "Text/20",
              "&::placeholder": {
                color: "Text/60",
              },
            }),
            className
          )}
        />
        {rightSlot}
      </div>
    </Context>
  );
}

Input.Clear = Clear;

function Clear(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { onValueChange, inputNode, value } = useContext("Clear");
  if (!value) return null;
  return (
    <button
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onValueChange("");
        inputNode?.focus();
        props.onClick?.(e);
      }}
    >
      <SvgX />
    </button>
  );
}
