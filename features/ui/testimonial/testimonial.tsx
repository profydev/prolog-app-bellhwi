import styled from "styled-components";
import { color, displayFont, textFont, breakpoint } from "@styles/theme";

type TestimonialProps = {
  primary?: boolean;
  title: string;
  text: string;
  userName: string;
  userCompany: string;
  userRole: string;
  userImage: any;
};

const Container = styled.div<{ primary: any }>`
  width: 100%;
  padding: 64px 24px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.primary ? color("primary", 50) : color("gray", 50)};

  @media (min-width: ${breakpoint("desktop")}) {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 24px;
    &:not(:first-child) {
      margin-left: 64px;
    }
  }
`;

const Heading = styled.p`
  color: ${color("primary", 700)};
  ${textFont("sm", "semibold")};
  text-align: center;
  margin: 0px;
`;

const Content = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 900) : color("gray", 900)};
  ${displayFont("xs", "medium")};
  text-align: center;
  padding: 0px 24px;
  @media (min-width: ${breakpoint("desktop")}) {
    margin: 12px 0px 0px;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const Author = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 900) : color("gray", 900)};
  ${textFont("xs", "medium")};
  ${textFont("md", "medium")};
  margin: 16px 0px 4px;
`;

const Company = styled.p<{ primary: any }>`
  color: ${(props) =>
    props.primary ? color("primary", 500) : color("gray", 500)};
  ${textFont("xs", "medium")};
  ${textFont("sm", "regular")};
  margin: 0px;
`;

export function Testimonial({
  primary,
  title,
  text,
  userName,
  userRole,
  userCompany,
  userImage,
}: TestimonialProps) {
  console.log(userImage.src.replace("jpg", "png"));
  return (
    <Container primary={primary}>
      <Heading>{title}</Heading>
      <Content primary={primary}>{text}</Content>
      <Profile>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={userImage.src.replace("jpg", "png")} />
        <Author primary={primary}>{userName}</Author>
        <Company primary={primary}>
          {userRole}, {userCompany}
        </Company>
      </Profile>
    </Container>
  );
}
