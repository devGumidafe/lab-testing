describe('Login specs', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('input[name="user"]').as('userInput');
    cy.get('input[name="password"]').as('passwordInput');
    cy.findByRole('button').as('loginButton');
  });

  it('should display login form', () => {
    cy.findByRole('heading', { name: 'Login' }).as('loginTitle');

    cy.get('@loginTitle').should('be.visible');
    cy.get('@userInput').should('be.visible');
    cy.get('@passwordInput').should('be.visible');
    cy.get('@loginButton').should('be.visible');
  });

  it('should display 2 error message when type empty credentials', () => {
    cy.get('@userInput').type(' ');
    cy.get('@passwordInput').type(' ');
    cy.get('@loginButton').click();
    cy.findAllByText("Debe informar el campo").as('errorMessage');

    cy.get('@errorMessage').should('be.length', 2);
  });

  it('should display alert error when type invalid credentials', () => {
    const user = 'invalid';
    const password = 'invalid';

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginButton').click();
    cy.findByText('Usuario y/o password no válidos').as('errorMessage');

    cy.get('@errorMessage').should('be.visible');
  });

  it('should navigate to submodule-list url when type valid credentials', () => {
    const user = 'admin';
    const password = 'test';

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.get('@loginButton').click();

    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
