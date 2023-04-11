import styled from "styled-components";
import { Routes } from "@config/routes";
import { color, textFont, displayFont, breakpoint } from "@styles/theme";
import { Testimonial, StyledButton } from "@features/ui";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const menuItems = [
  { text: "Home", href: Routes.home },
  { text: "Products", href: Routes.products },
  { text: "Documentation", href: Routes.documentation },
  { text: "Pricing", href: Routes.pricing },
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
  position: relative;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${breakpoint("desktop")}) {
    width: 100%;
    height: 80px;
    padding: 0 7rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
  }
`;

const MenuContainer = styled.ul`
  display: none;
  list-style: none;
  margin-right: 4rem;

  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
  }
`;

const MenuList = styled.li`
  @media (min-width: ${breakpoint("desktop")}) {
    &:not(:first-child) {
      padding-left: 2rem;
    }
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  ${textFont("md", "medium")};
  color: ${color("gray", 900)};

  @media (min-width: ${breakpoint("desktop")}) {
    color: ${color("gray", 500)};
  }
`;

const ButtonContainer = styled.div`
  display: none;

  @media (min-width: ${breakpoint("desktop")}) {
    display: block;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${color("gray", 50)};
  padding: 64px 16px;
  & img {
    width: 343px;
  }

  @media (min-width: ${breakpoint("desktop")}) {
    padding: 0px 0px 96px 0px;

    & img {
      width: 768px;
    }
  }
`;

const Heading = styled.h1`
  ${displayFont("md", "semibold")};
  text-align: center;
  margin: 0px;

  @media (min-width: ${breakpoint("desktop")}) {
    ${displayFont("xl", "semibold")};
    color: ${color("gray", 900)};
    letter-spacing: -0.02em;
    padding-left: 8px;
    margin: 96px 0px 0px;
  }
`;

const Text = styled.p`
  color: ${color("gray", 500)};
  text-align: center;
  ${textFont("lg", "regular")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};

  @media (min-width: ${breakpoint("desktop")}) {
    ${textFont("xl", "regular")};
    padding-left: 12px;
  }
`;

const TextSmall = styled.p`
  text-align: center;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
  margin: 0px;
`;

const SocialSection = styled.div`
  padding: 64px 16px;

  @media (min-width: ${breakpoint("desktop")}) {
    background-color: ${color("gray", 50)};
    padding: 96px 0px;
  }
`;

const CompanyLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 32px;

  & img {
    width: 155.5px;
    height: 34px;
    margin-left: auto;
    @media (min-width: ${breakpoint("desktop")}) {
      width: 100%;
    }
  }
  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1216px;
    margin: 32px auto 0px;
    padding-left: 12px;
  }
`;

const TestimonialSection = styled.div`
  @media (min-width: ${breakpoint("desktop")}) {
    background-color: white;
  }
  text-align: center;
  background-color: ${color("gray", 50)};
  padding: 64px 0px 0px;
`;

const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    padding: 0px 93.5px;
    margin: 64px 0px 96px;
    height: 416px;
  }
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

const MobileMenuButton = styled.div`
  cursor: pointer;

  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${color("gray", 200)};
  position: absolute;
  top: 65%;
  right: 5%;
  border-radius: 4px;

  @media (min-width: ${breakpoint("desktop")}) {
    display: none;
  }
`;

const MobileMenuLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;

const IssuesPage = () => {
  const [modalOn, setModalOn] = useState(false);
  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  const { isLoading, error, data } = useQuery(["myData"], () =>
    fetch("https://prolog-api.profy.dev/content-page/home").then((res) =>
      res.json()
    )
  );

  console.log(data);

  // Check if data exists before rendering it
  if (!data) {
    return null;
  }

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
        <ButtonContainer>
          <StyledButton>
            <a
              href={Routes.projects}
              style={{ color: "white", textDecoration: "none" }}
            >
              Open Dashboard
            </a>
          </StyledButton>
        </ButtonContainer>
        <MobileMenuButton
          onClick={() => {
            mobileMenuOn ? setMobileMenuOn(false) : setMobileMenuOn(true);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={"icons/nav-menu.svg"} />
        </MobileMenuButton>

        {mobileMenuOn ? (
          <MobileMenuContainer>
            <MobileMenuLinks>
              {menuItems.map((menuItem, index) => (
                <MenuList key={index} style={{ padding: "8px 0px" }}>
                  <MenuLink href={menuItem.href}>{menuItem.text}</MenuLink>
                </MenuList>
              ))}
              <MenuLink style={{ padding: "8px 0px" }} href={Routes.projects}>
                Dashboard
              </MenuLink>
            </MobileMenuLinks>
          </MobileMenuContainer>
        ) : null}
      </Header>
      <Hero>
        <Heading>{data.sections[0].title}</Heading>
        <Text margin="16px 0px 64px">{data.sections[0].subtitle}</Text>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={data.sections[0].image.src} />
      </Hero>
      <SocialSection>
        <TextSmall>{data.sections[1].title}</TextSmall>
        <CompanyLogos>
          {data.sections[1].companies.map((companyLogo, index) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={index}
              src={companyLogo.logo}
              style={{ margin: "0 auto" }}
            />
          ))}
        </CompanyLogos>
      </SocialSection>
      <TestimonialSection>
        <Heading style={{ margin: "96px 0px 0px" }}>
          {data.sections[2].title}
        </Heading>
        <Text style={{ margin: "24px 0px 64px 0px", padding: "0px 16px" }}>
          {data.sections[2].subtitle}
        </Text>
        <Testimonials>
          {data.sections[2].testimonials.map((testimonial, index) =>
            index % 2 != 0 ? (
              <Testimonial {...testimonial} key={index}></Testimonial>
            ) : (
              <Testimonial {...testimonial} primary key={index}></Testimonial>
            )
          )}
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
