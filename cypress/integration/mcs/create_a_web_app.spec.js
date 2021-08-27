/// <reference types="cypress" />
import '../../support/commands.js'

context("Create a WebApp", () => {
  
    it("Without github and Free Account plan 'Free - 1 - 1.75GB - 1GB - Free - Free'", () => {
      const appName = "App" + Date.now().toString();
      cy.login('SimpleMenuUser','123zxc');
      cy.get("h5").contains('Create a WebApp').click();
      cy.get("input[ng-model='vm.UMCR.Name']",{ timeout: 20000 }).should('be.visible').click().type(appName);
      cy.get("button[data-id='SelectAppserviceplanCombobox']",{ timeout: 10000 }).should('be.visible').click();
      cy.get("a").contains('Free - 1 - 1.75GB - 1GB - Free - Free').click();
      cy.get("button").contains('Build').click();      
      cy.get('#BuildWebApp > div > table > tbody > tr:nth-child(1) > td > div > label').should('contain.text', 'Build Resource Group')
      cy.get('#BuildWebApp > div > table > tbody > tr:nth-child(1) > td > div > i',{ timeout: 20000 }).should('be.visible').should('contain.text', 'Success');
      cy.get('#BuildWebApp > div > table > tbody > tr:nth-child(2) > td > div > label').should('contain.text', 'Build Service Plan')
      cy.get('#BuildWebApp > div > table > tbody > tr:nth-child(2) > td > div > i',{ timeout: 20000 }).should('be.visible').should('contain.text', 'Success');
      cy.get('#BuildWebApp > div > table > tbody > tr:nth-child(3) > td > div > label').should('contain.text', 'Build Web App')
      cy.get('#BuildWebApp > div > table > tbody > tr:nth-child(3) > td > div > i',{ timeout: 80000 }).should('be.visible').should('contain.text', 'Success');
      cy.get("button").contains('Back').click(); 
      cy.get("a>h5>span[class='ng-binding']").contains(appName).click();
    })
});