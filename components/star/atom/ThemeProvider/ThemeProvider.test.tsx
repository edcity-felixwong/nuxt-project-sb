import { mount } from "@vue/test-utils";
import { test, expect } from "vitest";
import themeProvider from "./ThemeProvider";

test("should render input tag", () => {
  const testTagName = "p";
  const wrapper = mount(themeProvider, {
    props: {
      tag: testTagName,
    },
  });
  expect((wrapper.vm.$el.tagName as string).toLowerCase()).toBe(testTagName);
});

test("should render div tag as default", () => {
  const wrapper = mount(themeProvider, {});
  expect((wrapper.vm.$el.tagName as string).toLowerCase()).toBe("div");
});

test("should apply theme vars correctly", () => {
  const wrapper = mount({
    render() {
      const themeVars = {
        myTheme: {
          color: {
            50: "#123123",
          },
        },
      };
      return (
        <themeProvider themeVars={themeVars} theme="myTheme"></themeProvider>
      );
    },
  });
  expect(wrapper.element.getAttribute("style")).toEqual(
    "--sui-color-50: #123123;"
  );
});

test("should apply custom prefix to theme vars correctly", () => {
  const wrapper = mount({
    render() {
      const themeVars = {
        myTheme: {
          color: {
            50: "#123123",
          },
        },
      };
      const testPrefix = "--test";
      return (
        <themeProvider
          themeVars={themeVars}
          theme="myTheme"
          prefix={testPrefix}
        ></themeProvider>
      );
    },
  });

  expect(wrapper.element.getAttribute("style")).toEqual(
    "--test-color-50: #123123;"
  );
});
