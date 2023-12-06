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
const myTv2 = tv({
  slots: {
    base: "base-2",
  },
  variants: {
    something: {
      small: {
        slot1: "tv2",
      },
    },
  },
});
const baseSlot1 = myTv.slots;

test("should give the style if no props provided", async () => {
  const onlyVariant = {
    something: "small",
  };
  const newTv = PT.read(myTv);
  expect(newTv()).toEqual(baseSlot1);
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
  expect(newTv()).toEqual(baseSlot1);
});

test("should return base style from empty props", async () => {
  const newTv = PT.read(myTv, {});
  expect(newTv()).toEqual(baseSlot1);
});

test("should return base style from empty props (with usePassThrough)", async () => {
  const slotStyles = PT.usePassThrough(myTv, {}).value;
  expect(slotStyles).toEqual(baseSlot1);
});
test("should return base style from undefined props (with usePassThrough)", async () => {
  const slotStyles = PT.usePassThrough(myTv, undefined).value;
  expect(slotStyles).toEqual(baseSlot1);
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
test("should be fine using different pass through property name, like cx, classNames", async () => {
  const cx1Props = {
    cx: {
      p1: "cx1-p1",
      p2: "cx1-p2",
      base: "cx1-base",
      slot1: "cx1-slot1",
      slot2: "cx1-slot2",
    },
  };
  const newTv = PT.read(myTv, cx1Props, "cx");
  expect(newTv()).toEqual({
    p1: "cx1-p1",
    p2: "cx1-p2",
    base: "base-1 cx1-base",
    slot1: "slot1 cx1-slot1",
    slot2: "slot2 cx1-slot2",
  });
});

test("should handle tv struct", async () => {
  const struct = {
    test1: myTv,
    test2: myTv2,
  };
  const props = {
    somethingElse: "abc",
    test1: {
      slot1: "prop-slot1",
    },
    test2: {
      base: "prop-base",
    },
  };
  expect(PT.usePassThroughS(struct, props).value).toEqual({
    test1: {
      base: "base-1",
      slot1: "slot1 prop-slot1",
      slot2: "slot2",
    },
    test2: {
      base: "base-2 prop-base",
    },
  });
});

test("handle tv struct with empty props (with usePassThroughS)", async () => {
  const struct = {
    test1: myTv,
    test2: myTv2,
  };
  const props = {};
  expect(PT.usePassThroughS(struct, props).value).toEqual({
    test1: {
      base: "base-1",
      slot1: "slot1",
      slot2: "slot2",
    },
    test2: {
      base: "base-2",
    },
  });
});

test("handle tv struct with undefined props (with usePassThroughS)", async () => {
  const struct = {
    test1: myTv,
    test2: myTv2,
  };
  const props = undefined;
  expect(PT.usePassThroughS(struct, props).value).toEqual({
    test1: {
      base: "base-1",
      slot1: "slot1",
      slot2: "slot2",
    },
    test2: {
      base: "base-2",
    },
  });
});

test("test computedWithReactive with no watcher options", async () => {
  const props = reactive({
    prop1: "prop1",
  });
  expect(
    PT.computedWithReactive(
      () => props,
      () => "result"
    ).value
  ).toBe("result");
});
