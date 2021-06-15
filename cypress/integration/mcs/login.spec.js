/// <reference types="cypress" />
import '../../support/commands.js'
const uniqueSeed = Date.now().toString();


context("Actions", () => {
    beforeEach(() => {
      cy.visit("https://lowcodeazure.azurewebsites.net/");
    });

    it("Create a WebApp without github and F1 Account", () => {
      cy.login('SimpleMenuUser','123zxc')
      cy.get("h5").contains('Create a WebApp').click();
      cy.get("input[ng-model='vm.UMCR.Name']").type("App"+uniqueSeed);
      cy.get("button[data-id='SelectAppserviceplanCombobox']").click();
      cy.get("a").contains('F1').click();
      cy.get("button").contains('Build').click();
      cy.get("button[class='confirm']").click();
      cy.wait(20000);
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