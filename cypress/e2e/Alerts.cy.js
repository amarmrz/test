describe('Alerts', function()  {
    it('JS Alert', ()=>  
    {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
   
        cy.get("button[onclick='jsAlert()']").click()
        
    }
    )
  })