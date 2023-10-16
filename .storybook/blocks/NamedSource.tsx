import { Source } from "@storybook/addon-docs/blocks";
import "./named-source.css";
import React from "react";
type Props = {
  children?: React.ReactNode;
  name?: React.ReactNode;
  dark?: boolean;
  language?: any;
  code?: any;
} & typeof PropsDefault;
const PropsDefault = {
  showLanguage: true,
};
interface ChildrenProp {
  children: React.ReactNode;
}
export const SourceHeader = ({
  children,
  variant,
}: {
  children?: React.ReactNode;
  variant?: "info" | "warning";
}) => {
  const bgColor = !!variant
    ? {
        info: "bg-[#2E3438]",
        warning: "bg-[#ffebcb]",
      }[variant]
    : "bg-[hsl(220,25%,98%)]";
  return (
    <div
      className={`named-source--header h-10 w-full py-2.5 px-5 border-b text-sm text-[#2E3438] sb-unstyled ${bgColor}`}
    >
      {children}
    </div>
  );
};
export const SourceWrapper = ({ children }: ChildrenProp) => {
  return (
    <div className="named-source--wrapper rounded-[16px] overflow-hidden shadow border mt-[25px] mb-10">
      {children}
    </div>
  );
};
const LanguageTag = ({ children }: ChildrenProp) => {
  return (
    <div className="named-source--language-tag absolute top-1 right-2.5 text-[hsl(240,20%,70%)] text-right z-[1] select-none">
      {children}
    </div>
  );
};
const SourceBodyWrapper = ({ children }: ChildrenProp) => {
  return <div className="named-source--body relative">{children}</div>;
};

export const NamedSource = ({
  children,
  name,
  showLanguage = PropsDefault.showLanguage,
  ...rest
}: Props) => {
  if (!name) return <Source {...rest} />;
  return (
    <SourceWrapper>
      <SourceHeader>{name}</SourceHeader>
      <SourceBodyWrapper>
        {!!showLanguage && <LanguageTag>{rest.language}</LanguageTag>}
        <Source {...rest} />
      </SourceBodyWrapper>
    </SourceWrapper>
  );
};
