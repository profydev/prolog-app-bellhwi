import styled from "styled-components";
import { Routes } from "@config/routes";
import { color, textFont, displayFont } from "@styles/theme";
import { Testimonial } from "@features/ui";

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
`;

const Heading = styled.h1`
  ${displayFont("xl", "semibold")};
  color: ${color("gray", 900)};
  margin: 96px 0px 0px;
  letter-spacing: -0.02em;
`;

const Text = styled.p`
  color: ${color("gray", 500)};
  ${textFont("xl", "regular")};
`;

const TextSmall = styled.p`
  text-align: center;
  color: ${color("gray", 500)};
  ${textFont("md", "medium")};
`;

const SocialSection = styled.div`
  padding: 96px 0px;
  background-color: ${color("gray", 50)};
`;

const CompanyLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TestimonialSection = styled.div`
  text-align: center;
  padding: 96px 0px;
  background-color: white;
`;

const Testimonials = styled.div`
  display: flex;
  padding: 0px 93.5px;
`;

const ContactButton = styled.button`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
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
  return (
    <div>
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
        <a href={Routes.projects}>Dashboard</a>
      </Header>
      <Hero>
        <Heading>Your Issues In Sight. At All Times.</Heading>
        <Text>
          Powerful error tracking and monitoring for software applications.
          Trusted by over 4,000 startups.
        </Text>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"images/landing-macbook.svg"} />
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
        <Heading>Don’t Only Trust Our Words</Heading>
        <Text>Our customers around the globe share their opinions.</Text>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <Testimonial {...testimonial} key={index}></Testimonial>
          ))}
        </Testimonials>
      </TestimonialSection>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
