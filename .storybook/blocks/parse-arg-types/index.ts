import type { ArgTypes } from "@storybook/vue3";

interface SimplePropType {
  description?: string;
  defaultValue?: string | Required<SimpleArgType>["table"]["defaultValue"];
}
interface SimpleEnumPropType<T extends SimpleArgType["options"]>
  extends SimplePropType {
  controlType?: SimpleArgType["control"];
  options: T;
}

type ControlEnum =
  | "check"
  | "inline-check"
  | "radio"
  | "inline-radio"
  | "select"
  | "multi-select";
type ControlNumber = "number" | "range";
type ControlObject = "object" | "file";
type ControlString = "text" | "date" | "color";
type ControlType =
  | "object"
  | "boolean"
  | ControlEnum
  | ControlNumber
  | ControlObject
  | ControlString;
type Control = {
  type?: ControlType;
  accept?: string;
  labels?: { [option: string]: string };
  max?: number;
  min?: number;
  presetColors?: string[];
  step?: number;
};
interface SimpleArgType {
  control?: ControlType | Control;
  mapping?: { [key: string]: { [option: string]: any } };
  options?: string[];
  table?: {
    category?: string;
    defaultValue?: { summary: string; detail?: string };
    subcategory?: string;
    type?: { summary?: string; detail?: string };
  };
}

export type Arg = ArgTypes[string] & SimpleArgType;
type Verbose<T> = { [K in keyof T]: T[K] } & {};

type r1231 = Verbose<Arg>;

export const withDefault = (
  val: SimplePropType["defaultValue"]
): Pick<SimpleArgType, "table"> => {
  if (typeof val === "string") {
    return { table: { defaultValue: { summary: val } } };
  } else {
    return {
      table: { defaultValue: { summary: val.summary, detail: val?.detail } },
    };
  }
};
export const withDescription = (
  val: string
): Pick<SimplePropType, "description"> => ({
  description: val,
});
// const packDefault = ()

export const simpleBooleanArg = ({
  // description = "",
  defaultValue = "false",
} = {}): Arg => ({
  type: "boolean",
  // description,
  ...withDefault(defaultValue),
});

export const simpleEnumArg = <T extends string[]>({
  controlType = "select",
  options,
  defaultValue,
  description,
}: SimpleEnumPropType<T>): Arg => ({
  control: controlType,
  options,
  ...(defaultValue ? withDefault(defaultValue) : {}),
  ...(description ? withDescription(description) : {}),
});
