import { HTMLArkProps } from "@ark-ui/react";
import {
  ButtonHTMLAttributes,
  ChangeEvent,
  ElementRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
} from "react";
import { css } from "styled-system/css";
import { useControllableState } from "~/hooks/useControllableState";
import SvgX from "~/icons/lib/X";
import { createContext } from "~/utils/createContext";
import { FieldBox } from "./FieldBox";
import { FormField } from "./FormField";

type InputElement = ElementRef<"input">;

const [Context, useContext] = createContext<{
  value?: string;
  onValueChange: (value: string) => void;
  inputId: string;
  inputNode: InputElement | null;
  setInputNode: (value: InputElement) => void;
}>("InputBox");

interface InputBoxProps {
  onValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  children: ReactNode;
}

export function InputBox({
  value: valueProp,
  defaultValue,
  onValueChange,
  children,
}: InputBoxProps) {
  const [value, setValue] = useControllableState({
    defaultProp: defaultValue ?? "",
    prop: valueProp,
    onChange: onValueChange,
  });

  const [inputNode, setInputNode] = useState<null | InputElement>(null);

  const inputId = useId();

  return (
    <Context
      value={{
        onValueChange: setValue,
        inputNode,
        value,
        inputId,
        setInputNode,
      }}
    >
      {children}
    </Context>
  );
}

InputBox.Clear = Clear;
InputBox.Content = FieldBox;
InputBox.Input = Input;
InputBox.Label = Label;

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

function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { setInputNode, inputId, value, onValueChange } = useContext("Input");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
    props.onChange?.(e);
  };
  return (
    <input
      {...props}
      id={inputId}
      ref={(ref) => ref && setInputNode(ref)}
      value={value}
      onChange={handleChange}
      className={css({
        height: "20",
        width: "100%",
        outline: "none",
        _placeholder: {
          color: "Text/60",
        },
      })}
    />
  );
}

function Label(props: HTMLArkProps<"label">) {
  const { inputId } = useContext("Label");
  return <FormField.Label htmlFor={inputId} {...props} />;
}
