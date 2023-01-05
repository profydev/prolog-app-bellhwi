import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge, BadgeSize, BadgeColor } from "./badge";
import styled from "styled-components";
import { color, displayFont, textFont } from "@styles/theme";

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

const Heading = styled.h1`
  ${displayFont("xl", "semibold")};
  color: ${color("gray", 900)};
  letter-spacing: -0.02em;
  margin: 0;
`;

const Description = styled.p`
  ${textFont("xl", "semibold")};
  font-size: 20px;
  line-height: 30px;
  color: ${color("gray", 500)};
  margin: 20px 0 0 0;
`;

const SizeContainer = styled.div`
  position: absolute;
  width: 960px;
  height: 179px;
  left: 57px;
  top: 323px;
`;

export default {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ size, color }) => (
  <Container>
    <HeadingContainer>
      <Heading>Badge</Heading>
      <Description>
        The Badge is used as a (mostly) non-interactive component. It has
        multiple sizes and colors and supports icons.
      </Description>
    </HeadingContainer>
    <Badge color={color} size={size}>
      Label
    </Badge>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.sm,
  color: BadgeColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
