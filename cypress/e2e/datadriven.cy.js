describe('Datadriven test', function()  {
    it('approch1', ()=>  
    {
        cy.fixture("LoginData.json").then((data)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
          
            data.forEach(element => {
            
            cy.get("input[placeholder='Username']").type(element.name)
            cy.get("input[placeholder='Password']").type(element.email)
            cy.get("button[type='submit']").click()
            if (element.name=="Admin"&&element.email=="admin123") {
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                 .should('have.text',element.expected)
                 cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
                 cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
            } else {
                //cy.log("else block")
                cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text',element.expected)  

            }
            
            
    
                
            });
        })
       
    }
    )
   
  })