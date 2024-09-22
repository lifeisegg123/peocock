import { css, cx } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import {
  ControllableState,
  useControllableState,
} from "~/hooks/useControllableState";
import SvgMinus from "~/icons/lib/Minus";
import SvgPlus from "~/icons/lib/Plus";
import { ark, HTMLArkProps } from "@ark-ui/react";
import { useRef, useState } from "react";

type CountControllerProps = {
  affix: string;
  minValue: number;
  name?: string;
} & HTMLArkProps<"div"> &
  ControllableState<number>;

export function CountController({
  defaultValue,
  onChangeValue,
  value: valueFromProps,
  affix,
  minValue,
  name,
  ...props
}: CountControllerProps) {
  const [value, setValue] = useControllableState({
    prop: valueFromProps,
    defaultProp: defaultValue ?? minValue,
    onChange: onChangeValue,
  });

  const [tempValue, setTempValue] = useState("");

  const handleButtonClick = (direction: -1 | 1) => () => {
    setValue((prev) => {
      const newValue = (prev ?? minValue) + direction;
      setTempValue(String(newValue));
      return newValue;
    });
  };

  const showPlaceholder = tempValue === "";

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <ark.div
      {...props}
      className={cx(
        hstack({
          gap: 0,
          backgroundColor: "BG/CardBG",
          borderRadius: "4",
          borderColor: "BG/LineColor",
          borderWidth: "1",
          borderStyle: "solid",
          height: "48",
          "& > *": {
            width: "48",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        }),
        props.className
      )}
    >
      <button
        type="button"
        disabled={value === 1}
        className={css({ _disabled: { opacity: 0.5 } })}
        onClick={handleButtonClick(-1)}
      >
        <SvgMinus />
      </button>
      <span
        onClick={() => inputRef.current?.focus()}
        className={css({
          borderColor: "BG/LineColor",
          borderRightWidth: "1",
          borderLeftWidth: "1",
          borderStyle: "solid",
        })}
      >
        <input
          name={name}
          ref={inputRef}
          onBlur={() => {
            const numberedValue = Number(tempValue);
            if (numberedValue > minValue) {
              setValue(numberedValue);
            } else {
              setValue(minValue);
            }
          }}
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            const numberedValue = Number(value);

            if (Number.isNaN(numberedValue) && value !== "") return;
            setTempValue(value);
          }}
          value={tempValue}
          className={css({
            width: "20",
            textAlign: "center",
            color: "White",
            textStyle: "Body/14/M",
            "&::placeholder": {
              color: "Text/60",
            },
          })}
          placeholder="1"
          inputMode="numeric"
        />
        <span
          className={css({
            textAlign: "center",
            color: showPlaceholder ? "Text/60" : "White",
            textStyle: "Body/14/M",
          })}
        >
          {" "}
          {affix}
        </span>
      </span>
      <button type="button" onClick={handleButtonClick(1)}>
        <SvgPlus />
      </button>
    </ark.div>
  );
}
