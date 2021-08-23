/// <reference types="cypress" />
import '../../support/commands.js'



context("Actions", () => {
    beforeEach(() => {
      cy.visit("https://lowcodeazure.azurewebsites.net/");
    });

    it("Create a WebApp without github and Free Account", () => {
      const uniqueSeed = Date.now().toString();
      cy.login('SimpleMenuUser','123zxc')
      cy.get("h5").contains('Create a WebApp').click();
      cy.wait(100)
      cy.get("input[ng-model='vm.UMCR.Name']").click().type("App"+uniqueSeed);
      cy.wait(100)
      cy.get("button[data-id='SelectAppserviceplanCombobox']").click();
      cy.get("a").contains('Free - 1 - 1.75GB - 1GB - Free - Free').click();
      cy.get("button").contains('Build').click();
    });

  /*  it("Create a WebApp with connected github and F1 Account", () => {
      cy.skip();
      cy.login('SimpleMenuUser','123zxc')
      cy.get("h5").contains('Create a WebApp').click();
      cy.get("input[ng-model='vm.UMCR.Name']").click();
      cy.get("input[ng-model='vm.UMCR.Name']").type("Abhi-Cypress");
      cy.get("button[data-id='SelectAppserviceplanCombobox']").click();
      cy.get("a").contains('F1').click();
    });*/
});