describe('ShipProduction', () => {
  it('', () => {
    cy.visit('/');
    cy.get('input[type=radio]').first().click();
    cy.get('input[type=number]').clear().type('2');
    cy.get('form button').click();
    cy.wait(4000);
    cy.get('app-space-ship').should('have.length', 2);
  });
});