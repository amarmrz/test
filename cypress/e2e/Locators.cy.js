describe('Suittest', function()  {
    it('Test1', function()  
    {

      //login
      cy.visit("https://www.saucedemo.com/")
      cy.get("#user-name").type("standard_user")
      cy.get("#password").type("secret_sauce")
      cy.get("#login-button").click()
        //validate number of product
      cy.xpath("//*[@id='inventory_container']/div/div").should('have.length',7)
      const len= cy.xpath("//*[@id='inventory_container']/div/div")
    // console.log(len.length);
      //typeof(len)
    

  }
    )
  })