import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  StyledButton,
  ButtonSize,
  ButtonColor,
  ButtonState,
  ButtonIcon,
} from "./button";

export default {
  title: "UI/Button",
  component: StyledButton,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof StyledButton>;

const Template: ComponentStory<typeof StyledButton> = ({
  size,
  color,
  state,
  icon,
}) => (
  <div style={{ padding: 50 }}>
    <StyledButton
      color={color}
      size={size}
      state={state}
      icon={icon}
    ></StyledButton>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.md,
  color: ButtonColor.primary,
  state: ButtonState.default,
  icon: ButtonIcon.none,
};
Default.parameters = {
  viewMode: "docs",
};
