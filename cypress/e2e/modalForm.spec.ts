describe("Modal Form", () => {
  it("radio chooses one topo chico flavor", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.getBySel("modal-with-form").should("be.visible");
    // cy.getBySel("radio-choices-field")
    //   .find("input[type='radio']")
    //   .check("blueberry")
    //   .should("be.checked");
    // cy.wait(1000);
    cy.getBySel("radio-choices-field")
      .find("input[type='radio']")
      .check("regular")
      .should("be.checked");
    cy.wait(1000);
    // cy.getBySel("radio-choices-field")
    //   .find("input[type='radio']")
    //   .check("lime")
    //   .should("be.checked");
    // cy.wait(1000);
  });
});
