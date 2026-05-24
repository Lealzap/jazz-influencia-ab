describe('Teste Home', () => {
  it('abre a página', () => {
    cy.visit('http://127.0.0.1:5500')

    cy.contains('Home')
  })
})