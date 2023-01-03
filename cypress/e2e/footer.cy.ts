import packageJSON from "../../package.json";

const VERSION = `Version: ${JSON.stringify(packageJSON.version)
  .split('"')
  .join("")}`;

describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("version, links, logo are shown", () => {
    // check the version is shown based on package.json
    cy.get("footer").contains(VERSION);

    // check links are shown
    cy.get("footer").find("li").should("have.length", 4);

    // check logo is shown
    cy.get("footer img").should("have.length", 1);
  });
});
