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

const Template: ComponentStory<typeof Badge> = ({ size, color }) => (
  <Container>
    <HeadingContainer>
      <Title>Badge</Title>
      <Subtitle>
        The Badge is used as a (mostly) non-interactive component. It has
        multiple sizes and colors and supports icons.
      </Subtitle>
    </HeadingContainer>
    <SubContainer height="179px" top="323px">
      <Heading>Sizes</Heading>
      <Description>
        A Badge can be displayed in three different sizes.
      </Description>
    </SubContainer>
    <SubContainer height="206px" top="626px">
      <Heading>Color</Heading>
      <Description>
        A Badge can be shown in the main colors used in the design system.
      </Description>
    </SubContainer>
    <SubContainer height="206px" top="937px">
      <Heading>Icon</Heading>
      <Description>
        A Badge can have a leading or trailing icon. It can also be shown as an
        icon without a text label.
      </Description>
    </SubContainer>

    {/* Sizes */}
    <Label top="434px" left="214px">
      small
    </Label>
    <Label top="434px" left="325px">
      medium
    </Label>
    <Label top="434px" left="436px">
      large
    </Label>
    <BadgeContainer top="477px" left="225px">
      <Badge color={color} size={BadgeSize.sm}>
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="476px" left="331px">
      <Badge color={color} size={size}>
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="474px" left="440px">
      <Badge color={color} size={BadgeSize.lg}>
        Label
      </Badge>
    </BadgeContainer>

    {/* Color */}
    <Label top="765px" left="212px">
      primary
    </Label>
    <Label top="765px" left="303px">
      gray
    </Label>
    <Label top="765px" left="394px">
      error
    </Label>
    <Label top="765px" left="485px">
      warning
    </Label>
    <Label top="765px" left="576px">
      success
    </Label>
    <BadgeContainer top="808px" left="215px">
      <Badge color={color} size={size}>
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="808px" left="311px">
      <Badge color={BadgeColor.gray} size={size}>
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="808px" left="400px">
      <Badge color={BadgeColor.error} size={size}>
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="808px" left="491px">
      <Badge color={BadgeColor.warning} size={size}>
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="808px" left="582px">
      <Badge color={BadgeColor.success} size={size}>
        Label
      </Badge>
    </BadgeContainer>

    {/* Icon */}
    <Label top="1076px" left="216px">
      leading
    </Label>
    <Label top="1076px" left="345px" style={{ width: "52px" }}>
      trailing
    </Label>
    <Label top="1076px" left="447px">
      only
    </Label>
    <BadgeContainer top="1119px" left="215px">
      <Badge color={color} size={size}>
        <img src={"icons/arrow-up.svg"} style={{ marginRight: "4px" }} />
        Label
      </Badge>
    </BadgeContainer>
    <BadgeContainer top="1119px" left="336px">
      <Badge color={color} size={size}>
        Label
        <img src={"icons/x.svg"} style={{ marginLeft: "4px" }} />
      </Badge>
    </BadgeContainer>
    <BadgeContainer
      top="1119px"
      left="470px"
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "16px",
        backgroundColor: "#F9F5FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Badge color={color} size={size}>
        <img src={"icons/plus.svg"} />
      </Badge>
    </BadgeContainer>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  size: BadgeSize.md,
  color: BadgeColor.primary,
};
Default.parameters = {
  viewMode: "docs",
};
