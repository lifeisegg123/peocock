import { useState } from "react";
import { css } from "styled-system/css";
import { hstack } from "styled-system/patterns";
import { CountController } from "~/components/CountController";
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
            <CountController affix="명" minValue={1} />
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
              <CountController affix="명" minValue={1} />
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
