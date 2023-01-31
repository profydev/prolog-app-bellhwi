import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Input,
  InputState,
  InputIcon,
  InputLabel,
  InputHint,
  InputError,
} from "./input";

export default {
  title: "UI/Input",
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  icon,
  state,
  label,
  hint,
  error,
}) => (
  <div style={{ padding: 50 }}>
    <Input
      icon={icon}
      state={state}
      label={label}
      hint={hint}
      error={error}
    ></Input>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  state: InputState.empty,
  label: InputLabel.none,
  icon: InputIcon.none,
  hint: InputHint.none,
  error: InputError.none,
};
Default.parameters = {
  viewMode: "docs",
};
