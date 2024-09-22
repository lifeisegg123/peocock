import {
  Combobox,
  ComboboxContentProps,
  Portal,
  TagsInput,
  TagsInputRootProps,
  useComboboxContext,
} from "@ark-ui/react";
import { css } from "styled-system/css";
import { hstack, vstack } from "styled-system/patterns";
import SvgX from "~/icons/lib/X";
import { FieldBox } from "./FieldBox";
import { FormField, LabelProps } from "./FormField";
import { Tag } from "./Tag";

// TODO: maybe some refactor into multiple components. maybe not
function TagInputBox(props: TagsInputRootProps) {
  const { value, setValue, collection, setOpen, setInputValue, getInputProps } =
    useComboboxContext();

  return (
    <TagsInput.Root
      {...props}
      ids={{ input: getInputProps().id }}
      validate={({ inputValue }) => collection.has(inputValue)}
      value={value}
      onValueChange={(v) => setValue(v.value)}
      onInputValueChange={(v) => {
        setInputValue(v.inputValue);
        setOpen(true);
      }}
      asChild
    >
      <FieldBox>
        <TagsInput.Context>
          {(tagInput) => (
            <>
              <TagsInput.Control className={hstack({})}>
                {tagInput.value.map((value, index) => (
                  <TagsInput.Item key={index} index={index} value={value}>
                    <TagsInput.ItemPreview asChild>
                      <Tag
                        rightNode={
                          <TagsInput.ItemDeleteTrigger>
                            <SvgX
                              className={css({
                                width: 14,
                                height: 14,
                                color: "Text/40",
                              })}
                            />
                          </TagsInput.ItemDeleteTrigger>
                        }
                      >
                        <TagsInput.ItemText>
                          {collection.find(value).label}
                        </TagsInput.ItemText>
                      </Tag>
                    </TagsInput.ItemPreview>
                  </TagsInput.Item>
                ))}
                <TagsInput.Input
                  className={css({
                    outline: "none",
                  })}
                  asChild
                >
                  <Combobox.Input
                    placeholder={tagInput.value.length ? "" : undefined}
                    onKeyDown={(e) => {
                      if (e.key.toLowerCase() === "enter") {
                        tagInput.addValue(e.currentTarget.value);
                      }
                    }}
                  ></Combobox.Input>
                </TagsInput.Input>
              </TagsInput.Control>
            </>
          )}
        </TagsInput.Context>
        <TagsInput.HiddenInput />
      </FieldBox>
    </TagsInput.Root>
  );
}

const _Combobox = Object.assign(Combobox.Root, {
  Label,
  TagInputBox,
  Control: Combobox.Control,
  Trigger: Combobox.Trigger,
  Content,
  ItemGroup,
});

function Label(props: LabelProps) {
  return (
    <Combobox.Label asChild>
      <FormField.Label {...props} />
    </Combobox.Label>
  );
}

function Content(props: ComboboxContentProps) {
  return (
    <>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content
            {...props}
            className={vstack({
              width: "100%",
              bgColor: "BG/LineColor",
              borderRadius: "4",
              p: "8",
            })}
          />
        </Combobox.Positioner>
      </Portal>
    </>
  );
}

function ItemGroup() {
  const { collection, inputValue } = useComboboxContext();
  const arr = [...collection];
  const filtered = arr.filter((v) =>
    v.label.toLowerCase().includes(inputValue.toLowerCase())
  );
  return (
    <Combobox.ItemGroup
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
      {(filtered.length ? filtered : arr).map((item) => (
        <Combobox.Item key={item.value} item={item}>
          <Combobox.ItemText>{item.label}</Combobox.ItemText>
        </Combobox.Item>
      ))}
    </Combobox.ItemGroup>
  );
}

export { _Combobox as Combobox };
