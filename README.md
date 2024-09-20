# github-actions-nextjs-cypress-vercel

This project is a reference for me in putting together a NextJS app with Cypress E2E tests and deployed to Vercel.com using GitHub Actions.

This project does not demonstrate a NextJS focus.

## Getting Started

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Lint

```bash
npm run lint
```

## Run Cypress E2E Tests (WIP)

```bash
npm run e2e
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Setup Cypress

### Install Cypress

```bash
npm install cypress --save-dev
```

Some files and folders are added in the project.

Add the following files, especially if your NextJS app is using TypeScript.

### Update `tsconfig.json` in the root

Add `"baseUrl": "."`.

So the file would look like:

```
{
  "compilerOptions": {
    "baseUrl": ".",
    ...
  }
}
```

### Add a `tsconfig.json` inside the `cypress` folder.

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

### Add a `global.d.ts` inside the `cypress` folder

```
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
```

### Add `.getBySel()` custom command

Add the following to the `cypress/support/commands.ts` file:

```
Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});
```

### Add a `cypress.d.ts` in the root

```
import { mount } from "cypress/react";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
```

### Update the `cypress.config.ts` to

```
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    viewportHeight: 1000,
    viewportWidth: 1280,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

### All E2E test files should be `**.spec.ts`
