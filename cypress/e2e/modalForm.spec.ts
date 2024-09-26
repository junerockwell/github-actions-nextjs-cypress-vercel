describe("Modal Form", () => {
  // it("successfully loads", () => {
  //   Cypress.log({
  //     name: "baseUrl",
  //     message: `${Cypress.config().baseUrl}`,
  //   });
  //   cy.visit("/");
  // });

  // it("opens successfully", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.wait(3000); // important
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.wait(1000);
  // });

  // it("close button closes the mdoal", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.wait(1000);
  //   cy.getBySel("close-modal-button").click();
  //   cy.get("modal-with-form").should("not.exist");
  // });

  // it("can type a name", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("name-field").type("John Smith");
  // });

  // it("shows name error required", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("name-field").find("input").focus().blur();
  //   // cy.getBySel("email-field");
  //   cy.getBySel("name-field")
  //     .find("p.form-error-text")
  //     .should("be.visible")
  //     .and("have.text", "Name is required");
  // });

  // it("shows name error minLength", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("name-field").type("J");
  //   cy.getBySel("name-field-minlen-error")
  //     .should("be.visible")
  //     .and("have.text", "Min length is 2");

  //   cy.getBySel("name-field").type("John Mark Luke Matthew");
  //   cy.getBySel("name-field-maxlen-error")
  //     .should("be.visible")
  //     .and("have.text", "Max length 20 exceeded");
  // });

  // it("can type an email", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   // cy.getBySel("name-field").type("J");
  //   // cy.get(".form-error-text")
  //   //   .should("be.visible")
  //   //   .and("have.text", "Min length is 2");
  //   cy.getBySel("email-field").type("John Smith");
  //   cy.wait(1000);
  //   cy.getBySel("email-field-error")
  //     .should("be.visible")
  //     .and("have.text", "Email is required");
  // });

  // // Add other email field tests here

  // // Add textarea field tests here

  // it("checks the checkbox", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   // Chaining .find() if data-test is on the parent of the input[type=checkbox]
  //   cy.getBySel("checkMe-field").find("input").check({ force: true });
  //   // Directly use .check() without .find() if data-test is on the actual input[type=checkbox]
  //   // cy.getBySel("checkMe-field").check({ force: true });
  //   cy.wait(1000);
  // });

  // it("single select dropdown selects by default", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("selectOne-field").should("have.value", null);
  // });

  // it("single select dropdown selects by one", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("selectOne-field").select(1).should("have.value", "Snoopy");
  //   cy.wait(1000);
  //   cy.getBySel("selectOne-field")
  //     .select(2)
  //     .should("have.value", "Hello Kitty");
  //   cy.wait(1000);
  //   cy.getBySel("selectOne-field").select(3).should("have.value", "Bugs Bunny");
  // });

  // it("multiple select dropdown selects one default", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("selectMore-field").invoke("val").should("deep.equal", []);
  // });

  // it("multiple select dropdown selects more than one", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("selectMore-field")
  //     .select([1, 2])
  //     .invoke("val")
  //     .should("deep.equal", ["Snoopy", "Hello Kitty"]);
  //   cy.wait(1000);
  //   cy.getBySel("selectMore-field")
  //     .select([1, 2, 3])
  //     .invoke("val")
  //     .should("deep.equal", ["Snoopy", "Hello Kitty", "Bugs Bunny"]);
  //   cy.wait(1000);
  //   cy.getBySel("selectMore-field")
  //     .select([1, 3])
  //     .invoke("val")
  //     .should("deep.equal", ["Snoopy", "Bugs Bunny"]);
  //   cy.wait(1000);
  //   cy.getBySel("selectMore-field")
  //     .select([3, 2])
  //     .invoke("val")
  //     .should("deep.equal", ["Hello Kitty", "Bugs Bunny"]);
  // });

  // it("default checked switch field", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("switch-field").find("input").should("be.checked");
  // });

  // it("toggles switch field", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("switch-field").find("input").uncheck();
  //   cy.wait(2000);
  //   cy.getBySel("switch-field").find("input").check();
  //   cy.wait(2000);
  //   cy.getBySel("switch-field").find("input").uncheck();
  //   cy.wait(1000);
  // });

  // it("unchecks switch field renders error message", () => {
  //   cy.visit("/");
  //   cy.getBySel("launch-modal").click();
  //   cy.getBySel("modal-with-form").should("be.visible");
  //   cy.getBySel("switch-field").find("input").uncheck();
  //   cy.getBySel("switch-field-required-error")
  //     .should("be.visible")
  //     .and("have.text", "This switch must be turned on!");
  // });

  it("radio chooses one topo chico flavor", () => {
    cy.visit("/");
    cy.getBySel("launch-modal").click();
    cy.getBySel("modal-with-form").should("be.visible");
    cy.getBySel("radio-choices-field")
      .find("input[type='radio']")
      .check("regular")
      .should("be.checked");
    cy.wait(1000);
  });
});
