describe('Suittest', function()  {
    it('Test1', function()  
    {

      //login
    cy.visit("https://www.saucedemo.com/")
  
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
   
    let expeTitle="Swag Labs";
    
    //bdd
    cy.get(".app_logo").then(function(x){

        let actTitle=x.text()
        expect(actTitle).to.equal(expeTitle)

    //tdd
        assert.equal(actTitle,expeTitle)

    })


  }
    )
  })