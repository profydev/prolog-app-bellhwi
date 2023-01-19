import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, BadgeSize, BadgeColor } from "./badge";

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ size, color, icon }) => (
  <div id="container" style={{ padding: 50 }}>
    <Badge color={color} size={size}>
      {icon == "leading" ? (
        <>
          <img src={"icons/arrow-up.svg"} style={{ marginRight: "4px" }} />{" "}
          Label
        </>
      ) : icon == "trailing" ? (
        <>
          Label <img src={"icons/x.svg"} style={{ marginLeft: "4px" }} />
        </>
      ) : icon == "only" ? (
        <img src={"icons/plus.svg"} />
      ) : (
        "Label"
      )}
    </Badge>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.sm,
  color: BadgeColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
