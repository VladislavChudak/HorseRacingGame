describe('Game Initialization', () => {
  it('should generate horses and schedule when Generate Program is clicked', () => {
    cy.visit('/');
    cy.contains('Generate Program').click();
    cy.get('.horses__body-row').should('have.length', 20);
    cy.get('.race-table__header').should('contain', 'Lap 1');
  });
});
