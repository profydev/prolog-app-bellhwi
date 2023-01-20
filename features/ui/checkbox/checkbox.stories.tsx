import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Checkbox,
  CheckboxSize,
  CheckboxState,
  CheckboxLabel,
  CheckState,
} from "./checkbox";
import { color } from "@styles/theme";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({
  size,
  state,
  label,
  checkState,
}) => (
  <div style={{ padding: 50 }}>
    <Checkbox size={size} state={state} checkState={checkState}>
      {label == "none" ? null : (
        <span style={{ marginLeft: "12px" }}>Label</span>
      )}
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  state: CheckboxState.default,
  checkState: CheckState.unchecked,
  label: CheckboxLabel.none,
};
Default.parameters = {
  viewMode: "docs",
};
