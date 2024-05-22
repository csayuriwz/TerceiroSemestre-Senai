describe("template spec", () => {
  let musicaItem;

  it("passes", () => {
    cy.visit("/");
  });
  it("Visualizar playlists e executar uma música", () => {
    cy.get("[aria-label='title-head']");

    // eu vejo o header "Good morning"
    cy.get("[aria-label='title-head']").should("contain", "Good morning");

    //eu vejo uma lista de playlists
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0);

    //eu clico na primeira playlist e eu vejo uma lista de músicas
    cy.get("[aria-label='playlist-item']").first().click();

    //eu clico na primeira música e a música começa a tocar
    cy.get("[aria-label='music-item']").eq(0).click();
  });

  it("Navegar entre playlists e executar outra música", () => {
    //eu volto para a listagem de playlists
    cy.get("[data-testid='setinha']").click();
    cy.wait(2000);

    //eu clico na segunda playlist e eu vejo uma lista de músicas
    cy.get("[aria-label='playlist-item']").eq(1).click();
    cy.wait(2000);

    //eu clico na primeira música e a música começa a tocar
    cy.get("[aria-label='music-item']").first().click();
    cy.wait(2000);
  });
  // it("Procurar e favoritar uma música", () => {
  //   //que eu estou na tela de Pesquisa
  //   cy.get("[href='/Search']").click();
  //   cy.wait(2000);
  //   cy.scrollTo("top");

  //   // eu procuro por uma música "Nome da Música" e eu vejo uma lista de resultados de músicas
  //   cy.get("[data-testid='campoBusca']").type("blue");
  //   cy.wait(2000);

  //   //eu clico na primeira música dos resultados
  //   musicaItem = cy.get("[aria-label='music-item']").first().click();

  //   cy.wait(2000);

  //   musicaItem.then((item) => {
  //     item.find("[data-testid='icon-button']").click();

  //   });
  // Scenario: Verificar música favoritada na tela de Favoritos
  it("Verificar música favoritada na tela de Favoritos", () => {
    //que eu estou na tela de Favoritos
    cy.get("[href='/Favorites']").click();
    cy.scrollTo("top");
    cy.wait(2000);

    //eu vejo uma lista de músicas favoritas e eu vejo a música favoritada na lista
    cy.get("[aria-label= 'music-item']").should("have.length.greaterThan", 0);

    cy.get("[aria-label= 'music-item']").should("have.length.greaterThan", 0);

    //eu clico na música favoritada
    cy.get("[aria-label= 'music-item']")
      .should("have.length.greaterThan", 0)
      //a música começa a tocar
      .click();
    cy.scrollTo("top");
    cy.wait(1000);

    cy.wait(1000);
  });
});
