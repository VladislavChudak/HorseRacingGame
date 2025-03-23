describe('Race Flow', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Generate Program').click();
  });

  it('should start the race and show horse movement', () => {
    cy.contains('Start').click();
    cy.get('.race-lane__row')
      .first()
      .find('.horse__icon')
      .invoke('attr', 'style')
      .should('include', 'translateX');
  });

  it('should display results after a race', () => {
    cy.contains('Start').click();
    cy.get('.race-table__header', { timeout: 10000 }).should('contain', 'Lap 1');
  });
});
