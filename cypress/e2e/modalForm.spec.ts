describe("Modal Form", () => {
  // it("successfully loads", () => {
  //   Cypress.log({
  //     name: "baseUrl",
  //     message: `${Cypress.config().baseUrl}`,
  //   });
  //   cy.visit("/");
  // });

  it("opens successfully", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.wait(3000); // important
    cy.getBySel("modal-with-form").should("be.visible");
    cy.wait(1000);
  });

  it("close button closes the mdoal", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.getBySel("modal-with-form").should("be.visible");
    cy.wait(1000);
    cy.getBySel("close-modal-button").click();
    cy.get("modal-with-form").should("not.exist");
  });

  it("can type a name", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.getBySel("modal-with-form").should("be.visible");
    cy.getBySel("name-field").type("John Smith");
  });

  it("can type an email", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.getBySel("modal-with-form").should("be.visible");
    // cy.getBySel("name-field").type("J");
    // cy.get(".form-error-text")
    //   .should("be.visible")
    //   .and("have.text", "Min length is 2");
    cy.getBySel("email-field").type("John Smith");
    cy.wait(1000);
    cy.getBySel("email-field-error")
      .should("be.visible")
      .and("have.text", "Email is required");
  });
});
