describe("Home Page", () => {
  it("successfully loads", () => {
    Cypress.log({
      name: "baseUrl",
      message: `${Cypress.config().baseUrl}`,
    });
    cy.visit("/");
  });

  it("opens the modal with form", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.getBySel("new-task-modal").should("be.visible");
  });
});
