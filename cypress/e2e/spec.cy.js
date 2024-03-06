describe('wc aquino', () => {
  before(() => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

  })
  beforeEach(() =>{
    cy.reload()
  })

  it ('Text', () => {
    cy.get('body').should('contain', 'Cuidado')
    cy.get ('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
  })

it.only('Textfields', () =>{
cy.get('#formNome')
.type('zé')
.should('have.value', 'zé')

cy.get('[data-cy="dataSobrenome"]')
.type('Da manga')
.should('have.value', 'Da manga')

cy.get('[data-cy="dataSobrenome"]')
cy.get('#formSexoMasc').click()

cy.get('#formComidaFavorita')
.should('not.have.text','feijão')

cy.get('[data-test="dataEscolaridade"]').select('Superior')

cy.get('#formComidaFavorita')
cy.get('#formComidaPizza').click()

cy.get('[data-testid="dataEsportes"]').select('Futebol')

cy.get('#elementosForm')
.should('not.have.value', 'Vitoria')

cy.get(':nth-child(7) > :nth-child(1) > label').type('oioi')


  })

})