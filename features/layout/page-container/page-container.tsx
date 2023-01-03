import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { SidebarNavigation } from "../sidebar-navigation";
import { color, displayFont, textFont, space, breakpoint } from "@styles/theme";
import packageJSON from "../../../package.json";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

const VERSION = `Version: ${JSON.stringify(packageJSON.version)
  .split('"')
  .join("")}`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const ContentContainer = styled.div`
  min-height: calc(
    100vh - 2 * ${space(8)} - ${({ theme }) => theme.size.headerHeight}
  );
  margin-top: ${({ theme }) => theme.size.headerHeight};
  padding: ${space(8, 3)};
  background: white;

  @media (min-width: ${breakpoint("desktop")}) {
    min-height: calc(100vh - ${space(3)} - 2 * ${space(8)});
    margin-top: ${space(3)};
    padding: ${space(8)};
    border-top-left-radius: ${space(10)};
  }
`;

const Title = styled.h1`
  margin: ${space(0, 0, 1)};
  color: ${color("gray", 900)};
  ${displayFont("sm", "medium")}
`;

const Info = styled.div`
  margin-bottom: ${space(8)};
  color: ${color("gray", 500)};
  ${textFont("md", "regular")}
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f9fafb;
  width: 100%;
  padding: 24px 0px;
  box-sizing: border-box;

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    height: 60px;
    padding: 18px 32px;
  }
`;

const FooterText = styled.p`
  color: #98a2b3;
  margin: 0px;
  line-height: 24px;

  @media (min-width: ${breakpoint("desktop")}) {
    width: 160px;
    order: 1;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;
  line-height: 24px;

  @media (min-width: ${breakpoint("desktop")}) {
    order: 2;
  }
`;

const FooterLink = styled.li`
  padding-right: 24px;
  font-weight: 500;
  color: #667085;
`;

const Logo = styled.img`
  width: 23px;
  height: 33px;
  margin: 24px 0px;

  @media (min-width: ${breakpoint("desktop")}) {
    margin: 24px 0px 24px 147px;
    order: 3;
  }
`;

export function PageContainer({ children, title, info }: PageContainerProps) {
  // combine title in a single string to prevent below warning
  // "Warning: A title element received an array with more than 1 element as children."
  const documentTitle = `ProLog - ${title}`;
  return (
    <Container>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <Main>
        <ContentContainer>
          <Title>{title}</Title>
          <Info>{info}</Info>
          {children}
        </ContentContainer>
        <Footer>
          <FooterLinks>
            <FooterLink>Docs</FooterLink>
            <FooterLink>API</FooterLink>
            <FooterLink>Help</FooterLink>
            <FooterLink style={{ paddingRight: "0px" }}>Community</FooterLink>
          </FooterLinks>
          <Logo src={"/icons/logo-small.svg"}></Logo>
          <FooterText>{VERSION}</FooterText>
        </Footer>
      </Main>
    </Container>
  );
}
