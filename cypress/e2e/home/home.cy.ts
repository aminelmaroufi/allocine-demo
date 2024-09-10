describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // Utility function to wait for typing animation
  const waitForTypingAnimation = () => {
    // Wait for the typing animation to complete (adjust time as needed)
    cy.wait(2000); // Assuming 2s for typing animation
    // Wait for color transition to complete
    cy.wait(2000); // Additional 2s for color transition
  };

  it("displays the welcome message with animation", () => {
    cy.get("#helloTextId").should("exist");

    waitForTypingAnimation();

    cy.get("#helloTextId")
      .should("contain", "Hello")
      .and("contain", "what do you want to watch today?");

    cy.get("#helloTextId").should("have.css", "animation").and("not.be.empty");
  });

  it("shows buttons after delay", () => {
    // Initially, buttons should not be visible
    cy.get("#moviesBtnId").should("not.be.visible");
    cy.get("#seriesBtnId").should("not.be.visible");

    // Wait for the full animation and delay
    cy.wait(5000);

    // After delay, buttons should appear
    cy.get("#moviesBtnId").should("be.visible");
    cy.get("#seriesBtnId").should("be.visible");
  });

  it("navigates to movies page when Movies button is clicked", () => {
    cy.wait(5000); // Wait for buttons to appear
    cy.get("#moviesBtnId").click();
    cy.url().should("include", "/movies");
  });

  it("navigates to series page when Series button is clicked", () => {
    cy.wait(5000); // Wait for buttons to appear
    cy.get("#seriesBtnId").click();
    cy.url().should("include", "/series");
  });
});
