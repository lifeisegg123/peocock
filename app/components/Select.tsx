import {
  Select as ArkSelect,
  Portal,
  SelectContentProps,
  SelectRootProps,
  SelectValueTextProps,
  useSelectContext,
} from "@ark-ui/react";
import { CollectionItem } from "node_modules/@ark-ui/react/dist/types";
import { css } from "styled-system/css";
import { vstack } from "styled-system/patterns";
import SvgChevronDown from "~/icons/lib/ChevronDown";
import SvgChevronUp from "~/icons/lib/ChevronUp";
import { FieldBox as FieldBoxImpl } from "./FieldBox";
import { FormField, LabelProps } from "./FormField";

export const Select = Object.assign(Root, {
  Content,
  FieldBox,
  ItemGroup,
  Control: ArkSelect.Control,
  Trigger: ArkSelect.Trigger,
  Label,
});

function Root<T extends CollectionItem>(props: SelectRootProps<T>) {
  return <ArkSelect.Root {...props} />;
}

function Label(props: LabelProps) {
  return (
    <ArkSelect.Label asChild>
      <FormField.Label {...props} />
    </ArkSelect.Label>
  );
}

function FieldBox({ placeholder, ...props }: SelectValueTextProps) {
  const { open } = useSelectContext();
  return (
    <ArkSelect.Trigger {...props} asChild>
      <FieldBoxImpl>
        <ArkSelect.ValueText
          className={css({ textStyle: "Body/14/M" })}
          placeholder={placeholder}
        />
        <ArkSelect.Indicator>
          {open ? <SvgChevronUp /> : <SvgChevronDown />}
        </ArkSelect.Indicator>
      </FieldBoxImpl>
    </ArkSelect.Trigger>
  );
}

function Content(props: SelectContentProps) {
  return (
    <>
      <Portal>
        <ArkSelect.Positioner>
          <ArkSelect.Content
            {...props}
            className={vstack({
              width: "100%",
              bgColor: "BG/LineColor",
              borderRadius: "4",
              p: "8",
            })}
          />
        </ArkSelect.Positioner>
      </Portal>
      <ArkSelect.HiddenSelect />
    </>
  );
}

function ItemGroup() {
  const { collection } = useSelectContext();

  return (
    <ArkSelect.ItemGroup
      className={css({
        width: "100%",
        textStyle: "Body/14/M",
        color: "Text/60",
        "& > div": {
          p: 12,
        },
        "& > [data-highlighted]": {
          color: "Text/10",
          bgColor: "BG/CardBG",
          borderRadius: "4",
        },
      })}
    >
      {[...collection].map((item) => {
        return (
          <ArkSelect.Item key={item?.value ?? item} item={item}>
            <ArkSelect.ItemText>{item?.label ?? item}</ArkSelect.ItemText>
          </ArkSelect.Item>
        );
      })}
    </ArkSelect.ItemGroup>
  );
}
