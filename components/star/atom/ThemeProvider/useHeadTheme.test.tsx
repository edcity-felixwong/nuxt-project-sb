import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { useHeadTheme, variablize, toCSS } from "./useHeadTheme";

expect.extend({
  toMatchStringsIgnoreSpaces(received: string, expected: string): { pass: boolean, message: () => string } {
    const stripSpaces = (str: string): string => str.replace(/\s/g, '');
    const pass = stripSpaces(received) === stripSpaces(expected)
    const message = pass
      ? () =>
        `Expected "${received}" not to match "${expected}" (ignoring spaces)`
      : () =>
        `Expected "${received}" to match "${expected}" (ignoring spaces)`;

    return { pass, message };
  },
})



describe("Hook to append style at <head/>", async () => {

  it("trivial case", async () => {
    const theme = {
      font: {
        size: {
          sm: {
            xs: 10,
            sm: 14,
            md: 16,
          },
          md: {
            xs: 12,
            sm: 16,
            md: 20,
          },
        },
        weight: {
          md: {
            sm: 400,
            md: 500,
            lg: 600,
          },
        },
      },
    };
    expect(variablize(theme)).toMatchStringsIgnoreSpaces(`--sui-font-size-sm-xs: 10;
    --sui-font-size-sm-sm: 14;
    --sui-font-size-sm-md: 16;
    --sui-font-size-md-xs: 12;
    --sui-font-size-md-sm: 16;
    --sui-font-size-md-md: 20;
    --sui-font-weight-md-sm: 400;
    --sui-font-weight-md-md: 500;
    --sui-font-weight-md-lg: 600;`)
  });

  it("should split `primary50` into `primary-50`", async () => {
    const theme = {
      color: {
        primary50: "#123123",
      },
    };
    expect(variablize(theme)).toMatchStringsIgnoreSpaces("--sui-color-primary-50: #123123;");
  });

  it("should split `backgroundColor` into `background-color`", async () => {
    const theme = {
      color: {
        backgroundColor: "#123123",
      },
    };
    expect(variablize(theme)).toMatchStringsIgnoreSpaces("--sui-color-background-color: #123123;");
  });

  it("should give `:root` rules if not provide specific className", async () => {
    const theme = {
      color: {
        primary: "#123123",
      },
    };
    expect(toCSS(theme, { className: ":root" })).toMatchStringsIgnoreSpaces(
      ":root{--sui-color-primary:#123123;}"
    );
  });

  it("should give `.my-class` rules if provided specific className", async () => {
    const theme = {
      color: {
        primary: "#123123",
      },
    };
    expect(toCSS(theme, { className: ".my-class" })).toMatchStringsIgnoreSpaces(
      ".my-class{--sui-color-primary:#123123;}"
    );
  });

  // it("mount ", async () => {
  //   const comp = defineComponent({
  //     template: "<div>my</div>",
  //   });
  //   const wrapper = mount(comp);
  //   expect(wrapper.vm.$root).toBe("t");
  // });
});
