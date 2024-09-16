import { useState } from "react";
import { css } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { Combobox } from "~/components/TagComboBox";
import SvgMinus from "~/icons/lib/Minus";
import SvgPlus from "~/icons/lib/Plus";

export interface PositionFieldProps {}

export function PositionField({}: PositionFieldProps) {
  const [fieldsCount, setFieldsCount] = useState(0);

  return (
    <>
      <Combobox
        selectionBehavior="clear"
        className={css({ width: "100%" })}
        items={POSITIONS}
      >
        <Combobox.Control>
          <div className={hstack({ justifyContent: "space-between" })}>
            <Combobox.Label required>포지션</Combobox.Label>
            <button
              onClick={() => setFieldsCount((prev) => prev + 1)}
              type="button"
              className={css({
                textStyle: "Caption/13/M",
                color: "Text/30",
              })}
            >
              + 추가
            </button>
          </div>
          <div className={hstack()}>
            <Combobox.Trigger asChild>
              <Combobox.TagInputBox></Combobox.TagInputBox>
            </Combobox.Trigger>
            <Controller />
          </div>
        </Combobox.Control>
        <Combobox.Content>
          <Combobox.ItemGroup />
        </Combobox.Content>
      </Combobox>
      {Array.from({ length: fieldsCount }).map((_, i) => (
        <Combobox
          key={i}
          selectionBehavior="clear"
          className={css({ width: "100%" })}
          items={POSITIONS}
        >
          <Combobox.Control>
            <div className={hstack()}>
              <Combobox.Trigger asChild>
                <Combobox.TagInputBox></Combobox.TagInputBox>
              </Combobox.Trigger>
              <Controller />
            </div>
          </Combobox.Control>
          <Combobox.Content>
            <Combobox.ItemGroup />
          </Combobox.Content>
        </Combobox>
      ))}
    </>
  );
}

const POSITIONS = [
  { label: "개발자", value: "dev" },
  { label: "디자이너", value: "designer" },
  { label: "기획자", value: "PM" },
];

function Controller() {
  const [value, setValue] = useState(1);

  const handleButtonClick = (direction: -1 | 1) => () => {
    setValue((prev) => prev + direction);
  };

  return (
    <div
      className={hstack({
        backgroundColor: "BG/CardBG",
        borderColor: "BG/LineColor",
        borderWidth: "1",
        borderStyle: "solid",
        borderRadius: "4",
        height: "48",
        "& > *": {
          width: "48",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      })}
    >
      <button
        type="button"
        disabled={value === 1}
        className={css({ _disabled: { opacity: 0.5 } })}
        onClick={handleButtonClick(-1)}
      >
        <SvgMinus />
      </button>
      <span>
        <input
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            const numberedValue = Number(value);
            if (Number.isNaN(numberedValue)) return;
            if (numberedValue > 1) {
              setValue(numberedValue);
            }
          }}
          value={value === 1 ? "" : `${value}`}
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
            color: value === 1 ? "Text/60" : "White",
            textStyle: "Body/14/M",
          })}
        >
          {" "}
          명
        </span>
      </span>
      <button type="button" onClick={handleButtonClick(1)}>
        <SvgPlus />
      </button>
    </div>
  );
}
