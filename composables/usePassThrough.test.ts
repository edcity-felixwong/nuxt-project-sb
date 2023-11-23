import { expect, test } from "vitest";
import * as PT from "./usePassThrough";
import { tv } from "@/utils/tv";
import { computed, reactive, defineComponent, h } from "vue";
import { mount } from "@vue/test-utils";
import Header from "~/components/star/atom/Header";

const myTv = tv({
  slots: {
    base: "base-1",
    slot1: "slot1",
    slot2: "slot2",
  },
  variants: {
    something: {
      small: {
        slot1: "something-small",
      },
    },
  },
});
test("should give the style if no props provided", async () => {
  const onlyVariant = {
    something: "small",
  };
  const newTv = PT.read(myTv);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1",
    slot2: "slot2",
  });
});

test("should read variants from props", async () => {
  const onlyVariant = {
    something: "small",
  };
  const newTv = PT.read(myTv, onlyVariant);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1 something-small",
    slot2: "slot2",
  });
});

test("should read slots from props ", async () => {
  const propsWithOnlySlot = {
    pt: {
      slot1: "pass-thorugh-slot-1",
    },
  };
  const newTv = PT.read(myTv, propsWithOnlySlot);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1 pass-thorugh-slot-1",
    slot2: "slot2",
  });
});

test("should read both variants and slots from props ", async () => {
  const props = {
    something: "small",
    pt: {
      slot1: "pass-thorugh-slot-1",
    },
  };
  const newTv = PT.read(myTv, props);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1 pass-thorugh-slot-1 something-small",
    slot2: "slot2",
  });
});

test("should ignore other props ", async () => {
  const props = {
    other: "other",
  };
  const newTv = PT.read(myTv, props);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1",
    slot2: "slot2",
  });
});

test("should return base style from empty props", async () => {
  const newTv = PT.read(myTv, {});
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1",
    slot2: "slot2",
  });
});

test("test reactive", async () => {
  const comp = defineComponent(
    (props) => {
      const pt = PT.usePassThrough(myTv, props);
      return () => h("div", { test: JSON.stringify(pt, null, 2) }, props.role);
    }
    // { role: "teacher" }
  );
  const wrapper = mount(comp, {
    props: {
      role: "teacher",
      pt: {
        base: "qweqwe",
      },
    },
  });
  expect(JSON.parse(wrapper.attributes().test)._value).toEqual({
    base: "base-1 qweqwe",
    slot1: "slot1",
    slot2: "slot2",
  });
  wrapper.setProps({
    pt: {
      base: "second-prop",
    },
  });
  expect(JSON.parse(wrapper.attributes().test)._value).toEqual({
    base: "base-1 second-prop",
    slot1: "slot1",
    slot2: "slot2",
  });
});
