import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, BadgeSize, BadgeColor } from "./badge";
import styled from "styled-components";
import { color, displayFont, textFont } from "@styles/theme";

type PositionType = {
  top: string;
  left: string;
};

type SubContainerType = {
  top: string;
  height: string;
};

const Container = styled.div`
  position: relative;
  width: 1114px;
  height: 1293px;
`;
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 1024px;
  height: 152px;
  left: 57px;
  top: 110px;
`;

const SubContainer = styled.div<SubContainerType>`
  position: absolute;
  width: 960px;
  left: 57px;
  top: ${(props) => props.top};
  height: ${(props) => props.height};
`;

const Title = styled.h1`
  ${displayFont("xl", "semibold")};
  color: ${color("gray", 900)};
  margin: 0;
`;

const Subtitle = styled.p`
  ${textFont("xl", "regular")};
  font-size: 20px;
  line-height: 30px;
  color: ${color("gray", 500)};
  margin: 20px 0 0 0;
  letter-spacing: 0.02em;
`;

const Heading = styled.h1`
  ${displayFont("xs", "medium")};
  color: ${color("gray", 900)};
  margin: 0;
  letter-spacing: 0.02em;
`;

const Description = styled.p`
  ${textFont("lg", "regular")};
  color: ${color("gray", 500)};
  margin: 12px 0 0 0;
  letter-spacing: 0.02em;
`;

const Label = styled.span<PositionType>`
  position: absolute;
  text-align: center;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  ${textFont("md", "regular")};
  color: ${color("gray", 500)};
  width: 70px;
  height: 21px;
  letter-spacing: 0.02em;
`;

const BadgeContainer = styled.div<PositionType>`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;
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
  size: BadgeSize.md,
  color: BadgeColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
