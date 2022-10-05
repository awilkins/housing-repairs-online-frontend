describe('smellGas mvp', () => {
  context('conditional mvp tests', () => {
    if (Cypress.env('CYPRESS_RELEASE_VERSION') == 'mvp') {
      beforeEach(() => {
        cy.visit('http://localhost:3000/report-repair/smell-gas');
      });

      it('Displays mvp title', () => {
        cy.get('h1[class="govuk-heading-xl"]').contains('If you smell gas');
      });

      it('Displays paragraph', () => {
        cy.get('p[class="govuk-body-m"]').contains('If you can smell gas, please call the gas emergency number: 0800 111 999');
      });
    }
  });
});
