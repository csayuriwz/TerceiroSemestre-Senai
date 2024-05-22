describe('template spec', () => {
  let musicaItem;

  before( () => {
    cy.visit('/')
  });

  it('Redirecionar para tela de busca', () => {
    cy.get("[href='/Search']").click();
    cy.scrollTo("top");
  });

  it('Procurando uma musica especifica', () => {
    cy.get("[data-testid='campoBusca']").type("blue");

    // cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });

  it('Clicar na musica desejada', () => {
    // cy.get("[aria-label='music-item']").contains(/^(Billie Eilish)/i).click();

    musicaItem = cy.get("[aria-label='music-item']").contains("Billie Eilish").click()
    musicaItem.click();
  });

  it('Clicar no curtir da musica', () => {
   musicaItem.then( (item)=> {
    item.find("[data-testid='icon-button']").click()
   })
  });

})