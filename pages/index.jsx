import styled from "styled-components";
import { Routes } from "@config/routes";
import { color, textFont, displayFont } from "@styles/theme";
import { Testimonial, StyledButton } from "@features/ui";
import { useState } from "react";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
];

const companyLogosURL = [
  "company-logos/layers.svg",
  "company-logos/sisyphus.svg",
  "company-logos/circooles.svg",
  "company-logos/catalog.svg",
  "company-logos/quotient.svg",
];

const testimonials = [
  {
    primary: true,
    heading: "Frontend Development",
    content:
      "Prolog has saved us many times. We get an alert, investigate the error, and fix it. That simple.",
    avatar: "avatars/mollie.svg",
    author: "Mollie Hall",
    company: "Web Developer, Sisyphus",
  },
  {
    heading: "Microservice Architectures",
    content:
      "Our services fail from time to time. That’s normal. But with Prolog we’re able to track the issue down in no time. ",
    avatar: "avatars/alec.svg",
    author: "Alec Whitten",
    company: "Software Architect, Layers",
  },
  {
    primary: true,
    heading: "Backend Servers",
    content:
      "Prolog’s UI is beautiful and intuitive. It’s simple to find bugs and our devs are always on top of pressing issues.",
    avatar: "avatars/kelly.svg",
    author: "Kelly Williams",
    company: "Engineering Manager, Catalog",
  },
];

const ModalContainer = styled.div`
  background: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
`;

const Modal = styled.div`
  padding: 24px;
  background: white;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  border-radius: 12px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeading = styled.h4`
  ${textFont("lg", "medium")};
  color: ${color("gray", 900)};
  margin: 28px 0px 0px;
`;

const ModalContent = styled.p`
  ${textFont("sm", "regular")};
  color: ${color("gray", 500)};
  margin: 8px 0px 32px;
  text-align: center;
  width: 352px;
`;

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 7rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
  margin-right: 4rem;
`;

const MenuList = styled.li`
  &:not(:first-child) {
    padding-left: 2rem;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color("gray", 50)};
  padding-bottom: 96px;
`;

const Heading = styled.h1`
  ${displayFont("xl", "semibold")};
  color: ${color("gray", 900)};
  letter-spacing: -0.02em;
  padding-left: 8px;
`;

const Text = styled.p`
  text-align: center;
  color: ${color("gray", 500)};
  ${textFont("xl", "regular")};
  padding-left: 12px;
`;

const TextSmall = styled.p`
  text-align: center;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
  margin: 0px;
`;

const SocialSection = styled.div`
  padding: 96px 0px;
  background-color: ${color("gray", 50)};
`;

const CompanyLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1216px;
  margin: 32px auto 0px;
  padding-left: 12px;
`;

const TestimonialSection = styled.div`
  text-align: center;
  background-color: white;
`;

const Testimonials = styled.div`
  display: flex;
  padding: 0px 93.5px;
  margin: 64px 0px 96px;
  height: 416px;
`;

const ContactButton = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 1.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  const [modalOn, setModalOn] = useState(false);

  return (
    <div>
      {modalOn ? (
        <ModalContainer>
          <Modal>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icons/contact-mail.svg" alt="mail icon" />
              <ModalHeading>Contact us Via Email</ModalHeading>
              <ModalContent>
                Any questions? Send us an email at prolog@profy.dev. We usually
                answer within 24 hours.
              </ModalContent>
            </div>
            <div style={{ display: "flex" }}>
              <StyledButton
                size="lg"
                color="gray"
                onClick={() => {
                  setModalOn(false);
                }}
              >
                Cancel
              </StyledButton>
              <div style={{ marginLeft: "12px" }}>
                <StyledButton>
                  <a
                    href="mailto:support@prolog-app.com?subject=Support Request:"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Open Email App
                  </a>
                </StyledButton>
              </div>
            </div>
          </Modal>
        </ModalContainer>
      ) : null}

      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <MenuContainer>
          {menuItems.map((menuItem, index) => (
            <MenuList key={index}>
              <MenuLink href={menuItem.href}>{menuItem.text}</MenuLink>
            </MenuList>
          ))}
        </MenuContainer>
        <StyledButton>
          <a
            href={Routes.projects}
            style={{ color: "white", textDecoration: "none" }}
          >
            Open Dashboard
          </a>
        </StyledButton>
      </Header>
      <Hero>
        <Heading style={{ margin: "96px 0px 0px" }}>
          Your Issues In Sight. At All Times.
        </Heading>
        <Text style={{ width: "648px", margin: "24px 0px 64px" }}>
          Powerful error tracking and monitoring for software applications.
          Trusted by over 4,000 startups.
        </Text>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"images/landing-macbook.svg"}
          style={{ marginLeft: "12px" }}
        />
      </Hero>
      <SocialSection>
        <TextSmall>Join 4,000+ companies using Prolog</TextSmall>
        <CompanyLogos>
          {companyLogosURL.map((companyLogo, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img key={index} src={companyLogo} />
          ))}
        </CompanyLogos>
      </SocialSection>
      <TestimonialSection>
        <Heading style={{ margin: "96px 0px 0px" }}>
          Don’t Only Trust Our Words
        </Heading>
        <Text style={{ marginBottom: "0px" }}>
          Our customers around the globe share their opinions.
        </Text>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <Testimonial {...testimonial} key={index}></Testimonial>
          ))}
        </Testimonials>
      </TestimonialSection>
      <ContactButton onClick={() => setModalOn(true)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
