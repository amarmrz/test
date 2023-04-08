import dashboardPage from "../PageObjects/Dashboard"
import loginPage from "../PageObjects/LoginPage"

describe('Verify the Logout functionality', function()  
{
    it('Login as admin and click on Logout', { tags: '@Smoke'}, ()=>  
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
       
            cy.visit("https://staging.beebolt.com/admin_login")
            let lp=new loginPage()

            lp.setAdminEmail("amar+staging@beebolt.com")
            lp.setAdminPassword("123456789")
            lp.clickOnloginIn()
            
                let dash=new dashboardPage()
                dash.getPageTitle().should('have.text',"Dashboard")
                cy.wait(6000)
                //cy.intercept('GET','**/tenants').as('Dashboard')
               //cy.wait('@Dashboard') 
                dash.clickOnLogout()
                dash.getLogIntext().should('have.text',"Log In")
  
     })
    it("Just dummy test for tags", { tags: 'Regression' },()=> 
        {
           cy.log("this regression test") 
    })

       
    it("Just dummy test for tags", { tags: '@Smoke' },()=> 
        {
           cy.log("this Smoke test") 
    })
     
 })