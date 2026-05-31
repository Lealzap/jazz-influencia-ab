describe("Testes Completos - Jazz Influência AB", () => {
  
  describe("Página Inicial", () => {
    beforeEach(() => {
      cy.visit("index.html");
    });

    it("deve carregar a página inicial corretamente", () => {
      cy.contains("Jazz Influência AB").should("be.visible");
      cy.contains("Sobre o projeto").should("be.visible");
    });

    it("deve exibir botão para acessar história", () => {
      cy.contains("a", "Conheça a história").should("be.visible");
      cy.contains("a", "Conheça a história").should("have.attr", "href", "historia.html");
    });

    it("deve validar navegação via navbar", () => {
      cy.get(".navbar-brand").should("contain", "Jazz Influência R&B");
      cy.get(".nav-link").should("have.length.at.least", 4);
    });
  });

  describe("Página de História", () => {
    beforeEach(() => {
      cy.visit("historia.html");
    });

    it("deve acessar a página de história", () => {
      cy.url().should("include", "historia.html");
    });

    it("deve verificar conteúdo da página", () => {
      cy.contains("História do Jazz").should("exist");
    });

    it("deve ter links funcionais na navbar", () => {
      cy.contains("a", "Artistas").should("have.attr", "href", "artistas.html");
      cy.contains("a", "Influência").should("have.attr", "href", "rnb.html");
    });
  });

  describe("Página de Artistas", () => {
    beforeEach(() => {
      cy.visit("artistas.html");
    });

    it("deve acessar a página de artistas", () => {
      cy.url().should("include", "artistas.html");
    });

    it("deve exibir conteúdo de artistas", () => {
      cy.contains("Artistas importantes").should("exist");
    });
  });

  describe("Acessibilidade", () => {
    beforeEach(() => {
      cy.visit("index.html");
    });

    it("deve ter atributos de imagem descritivos", () => {
      cy.get("img").each(($img) => {
        cy.wrap($img).should("have.attr", "alt");
      });
    });

    it("deve ter headings estruturados", () => {
      cy.get("h1").should("have.length.at.least", 1);
      cy.get("h2").should("have.length.at.least", 1);
    });
  });
});
