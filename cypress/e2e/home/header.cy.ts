// cypress/integration/header.spec.js

describe("Header Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Start at the home page
  });

  it("displays the correct title", () => {
    cy.get("header").contains("AlloCine Demo");
  });

  it("contains navigation buttons", () => {
    cy.get("header").within(() => {
      cy.contains("button", "Home");
      cy.contains("button", "Movies");
      cy.contains("button", "Series");
    });
  });

  it("navigates to the correct pages when buttons are clicked", () => {
    cy.contains("button", "Movies").click();
    cy.url().should("include", "/movies");

    cy.contains("button", "Series").click();
    cy.url().should("include", "/series");

    cy.contains("button", "Home").click();
    cy.url().should("not.include", "/movies");
    cy.url().should("not.include", "/series");
  });

  it("applies active color to the current page button", () => {
    const activeColor = "rgb(0, 123, 255)"; // #007bff in RGB

    // Check Home button is active on home page
    cy.contains("button", "Home").should("have.css", "color", activeColor);

    // Navigate to Movies and check its button becomes active
    cy.contains("button", "Movies").click();
    cy.contains("button", "Movies").should("have.css", "color", activeColor);
    cy.contains("button", "Home").should("not.have.css", "color", activeColor);

    // Navigate to Series and check its button becomes active
    cy.contains("button", "Series").click();
    cy.contains("button", "Series").should("have.css", "color", activeColor);
    cy.contains("button", "Movies").should(
      "not.have.css",
      "color",
      activeColor
    );
  });
});
