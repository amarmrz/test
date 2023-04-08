describe('Suittest', function()  {
    it('Test1', function()  
    {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.title().should('eq','ParaBank | Welcome | Online Banking')
    }
    )
   
    it('Test2', function()  
    {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    cy.title().should('eq','ParaBank 1231| Welcome | Online Banking')
    }
    )
  }
  )