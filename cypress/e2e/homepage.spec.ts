describe("Home Page", () => {
  it("successfully loads", () => {
    Cypress.log({
      name: "baseUrl",
      message: `${Cypress.config().baseUrl}`,
    });
    cy.visit("/");
  });
});
