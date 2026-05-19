describe("Jazz Influência AB", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("index.html");
    cy.contains("Jazz Influência AB");
    cy.contains("Sobre o projeto");
  });

  it("deve acessar a página de história", () => {
    cy.visit("historia.html");
    cy.contains("História do Jazz");
  });

  it("deve acessar a página de artistas", () => {
    cy.visit("artistas.html");
    cy.contains("Artistas importantes");
  });
});