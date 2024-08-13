
describe('Transações', () => {

//hooks- executar antes ou depois de cada ou de todos os testes 
//before
//after
//beforeEach
//afterEack

beforeEach(() => {
    cy.visit("https://dev-finance.netlify.app/#")
});

    it('Cadastrar um entrada', () => {

         criarTransacao("Frella", 500)
            
       cy.get("tbody tr td.description").should("have.text", "Frella")
       
      
    });

    it('Cadastrar uma saída', () => {
               
        criarTransacao("Cinema", -39)

        cy.get("tbody tr td.description").should("have.text", "Cinema")
        
    });

    it('Excluir transação', () => {
        
        criarTransacao("Frella", 500)
        criarTransacao("Mesada", 10)
        
               
        //cy.contains(".description","Frella") //td referencia
       // .parent() //tr
       // .find('img') //elemento que a gente precisa
       // .click()

       cy.contains(".description","Frella") //td referencia
       .siblings()
       .children('img')
       .click()

       

        cy.get('tbody tr').should("have.length", 1)

    });

});

function criarTransacao(descricao, valor){

    cy.contains("Nova Transação").click()
    cy.get ('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2024-01-14")

    cy.contains ('button', 'Salvar').click()
}



