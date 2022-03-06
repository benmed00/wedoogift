describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits The Home Page of the challenge', () => {
    cy.visit('/');
    cy.get('h2').should('contain', 'Frontend challenge');
    cy.get('h3').should('contain', 'Montant désiré :');
  });

  it('successfully call of the API', () => {
    cy.request({
      url: '/shop/5/search-combination',
      headers: { Authorization: 'tokenTest123' },
      qs: { amount: 23 },
    })
      .its('body')
      .as('cardCount');
    // console.log(this.cardCount);
  });

  it('Forbiden Page ', () => {
    cy.visit('/403');
    cy.contains('Your access is not allowed !');
  });

  it('Forbiden request', () => {
    cy.request({
      url: '/shop/5/search-combination',
      qs: { amount: 23 },
      failOnStatusCode: false,
    }).then((resp) => {
      expect(resp.status).to.eq(401);
    });
  });

  it('Simulate a user input of amount', () => {
    cy.get('input[name=value]').type('23{enter}');
  });

  it('Test the button Montant suivant', () => {
    cy.get('input[name=value]').type('23{enter}');
    cy.get('input[name=value]').should('have.value', '023');
    cy.contains('Montant suivant').click();
    cy.get('input[name=value]').should('have.value', '24');
  });

  it('Test the button Montant Précedent', () => {
    cy.get('input[name=value]').type('23{enter}');
     cy.get('input[name=value]').should('have.value', '023');
    cy.contains('Montant précédent').click();
    cy.get('input[name=value]').should('have.value', '22');
  });
});
