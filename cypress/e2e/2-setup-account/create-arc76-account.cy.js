/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("main", () => {
  it("go to index", () => {
    indexedDB.deleteDatabase("AWallet");
    cy.viewport(1920, 1050);
    cy.visit("/").wait(1000);
    cy.get("#newwallet-pass").type("Test Password").wait(1000);
    cy.get("#newwallet-name").type("Test Wallet");
    cy.get("#new_wallet_button_create").click().wait(1000);
    cy.get(".pi-home")
      .first()
      .trigger("mouseenter")
      .wait(1000)
      .click()
      .wait(2000);
    cy.get(".pi-plus").first().trigger("mouseenter").wait(1000);
    cy.get(".pi-at").first().click().wait(2000);
    cy.get("#email").type("test@example.com");
    cy.get("#w").type("test@example.comtest@example.com");
    cy.get("#name").type("ARC76 Account");
    cy.get("#create_account").click().wait(5000);
    cy.get(".account-qr").should("be.visible", { timeout: 10000 }).wait(1000);
  });
});
