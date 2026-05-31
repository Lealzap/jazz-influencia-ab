describe('Testes - Página Home', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
  });

  it('deve carregar a página home corretamente', () => {
    cy.contains('Jazz Influência R&B').should('be.visible');
  });

  it('deve verificar se a navbar está visível', () => {
    cy.get('.navbar').should('exist');
    cy.contains('História').should('be.visible');
    cy.contains('Artistas').should('be.visible');
    cy.contains('Influência').should('be.visible');
    cy.contains('Contato').should('be.visible');
  });

  it('deve permitir navegação para a página de história', () => {
    cy.contains('a', 'História').click();
    cy.url().should('include', 'historia.html');
  });

  it('deve exibir o carrossel de imagens', () => {
    cy.get('.carousel').should('exist');
    cy.get('.carousel-item').should('have.length.at.least', 3);
  });

  it('deve validar cards de conteúdo', () => {
    cy.get('.card-jazz').should('exist');
    cy.get('.card-jazz').should('have.length', 3);
  });

  it('deve ter footer visível', () => {
    cy.get('footer').should('exist');
    cy.get('footer').should('contain', 'Jazz Influência AB');
  });
});
