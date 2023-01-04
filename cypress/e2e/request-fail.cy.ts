describe("Project Data Load Failed", () => {
  beforeEach(() => {
    // Force network error
    cy.intercept("https://prolog-api.profy.dev/project", {
      forceNetworkError: true,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    cy.wait("@getProjects");
  });

  it("renders error screen", () => {
    // check error screen is rendered
    cy.get("#error-screen");
  });

  it("reload data when pressing try again", () => {
    // check try again button is reloading data
    cy.get("#error-screen p:nth-child(2)").contains("Try again").click();
    cy.get("img").should("have.attr", "src", "/icons/loading-circle.svg");
  });
});
