import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Select,
  SelectState,
  SelectIcon,
  SelectLabel,
  SelectHint,
  SelectError,
} from "./select";

export default {
  title: "UI/Select",
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({
  icon,
  state,
  label,
  hint,
  error,
  errorMsg,
  placeholder,
  labelName,
  options,
  hintMsg,
  defaultOption,
  onClick,
}) => (
  <div style={{ padding: 50 }}>
    <div style={{ width: "320px" }}>
      <Select
        icon={icon}
        state={state}
        label={label}
        hint={hint}
        error={error}
        errorMsg={errorMsg}
        placeholder={placeholder}
        labelName={labelName}
        options={options}
        hintMsg={hintMsg}
        defaultOption={defaultOption}
        onClick={onClick}
      ></Select>
    </div>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  state: SelectState.empty,
  label: SelectLabel.none,
  icon: SelectIcon.none,
  hint: SelectHint.none,
  error: SelectError.none,
};
Default.parameters = {
  viewMode: "docs",
};
