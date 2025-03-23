describe('Race Pause and Resume', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Generate Program').click();
    cy.contains('Start').click();
  });

  it('should pause the race and stop horse movement', () => {
    cy.wait(1000);

    cy.contains('Pause').click();

    cy.wait(1000);

    cy.get('.race-lane__row')
      .first()
      .find('.horse__icon')
      .invoke('attr', 'style')
      .then((pausedStyle) => {
        cy.wait(1000);

        cy.get('.race-lane__row')
          .first()
          .find('.horse__icon')
          .invoke('attr', 'style')
          .should('eq', pausedStyle);
      });
  });

  it('should resume the race after being paused', () => {
    cy.wait(1000);
    cy.contains('Pause').click();
    cy.wait(500);
    cy.contains('Resume').click();

    cy.wait(1000);

    cy.get('.race-lane__row')
      .first()
      .find('.horse__icon')
      .invoke('attr', 'style')
      .should('include', 'translateX');
  });
});
