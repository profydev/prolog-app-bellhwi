import styled from "styled-components";
import { color, textFont } from "@styles/theme";

type TestimonialProps = {
  primary?: boolean;
  heading: string;
  content: string;
  author: string;
  company: string;
  avatar: string;
};

const Container = styled.div<{ primary: any }>`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 24px;
  background-color: ${(props) =>
    props.primary ? color("primary", 50) : color("gray", 50)};

  &:not(:first-child) {
    margin-left: 64px;
  }
`;

const Heading = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 700) : color("gray", 700)};
  ${textFont("sm", "semibold")};
  text-align: center;
`;

const Content = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 900) : color("gray", 900)};
  ${textFont("xs", "medium")};
  text-align: center;
`;

const Author = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 900) : color("gray", 900)};
  ${textFont("xs", "medium")};
  ${textFont("md", "medium")};
`;

const Company = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 500) : color("gray", 500)};
  ${textFont("xs", "medium")};
  ${textFont("sm", "regular")};
`;

export function Testimonial({
  primary,
  heading,
  content,
  author,
  company,
  avatar,
}: TestimonialProps) {
  return (
    <Container primary={primary}>
      <Heading primary={primary}>{heading}</Heading>
      <Content primary={primary}>{content}</Content>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={avatar} />
      <Author primary={primary}>{author}</Author>
      <Company primary={primary}>{company}</Company>
    </Container>
  );
}
