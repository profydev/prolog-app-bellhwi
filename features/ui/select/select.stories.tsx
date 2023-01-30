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
}) => (
  <div style={{ padding: 50 }}>
    <Select
      icon={icon}
      state={state}
      label={label}
      hint={hint}
      error={error}
    ></Select>
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
