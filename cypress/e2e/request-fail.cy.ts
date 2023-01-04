describe("Project Data Load Failed", () => {
  beforeEach(() => {
    // Force network error
    cy.intercept("https://prolog-api.profy.dev/project", {
      forceNetworkError: true,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
    cy.wait("@getProjects");
    cy.wait(4000);
  });

  it("renders error screen", () => {
    // check error screen is rendered
    cy.get("#error-screen");
  });

  it("reload data when pressing try again", () => {
    // check try again button is reloading data
    cy.get("#try-again").click();
    cy.get("#loading-circle");
  });
});
