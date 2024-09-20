/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *  Window object with additional properties used during test.
     */
    // window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>;

    /**
     * Custom command to make taking Percy snapshots with full name formed from the test title + suffix easier
     */
    // visualSnapshot(maybeName?): Chainable<any>;

    getBySel(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>;
    // getBySelLike(dataTestPrefixAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
  }
}
