import dashboardPage from "../PageObjects/Dashboard"
import loginPage from "../PageObjects/LoginPage"

describe('Verify the Login functionality', function()  {
    it('Login as admin the valide and invalide credentials', ()=>  
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.fixture("LoginData.json").then((data)=>{
            cy.visit("https://staging.beebolt.com/admin_login")
          
            data.forEach(element => {
            let lp=new loginPage()

            lp.setAdminEmail(element.email)
            lp.setAdminPassword(element.password)
            lp.clickOnloginIn()
            
          
            if (element.email=="amar+staging@beebolt.com"&&element.password=="123456789") {
                let dash=new dashboardPage()
                dash.getPageTitle().should('have.text',element.expected)
                cy.wait(6000)
                dash.clickOnLogout()
            } else {
                //cy.log("else block")
                cy.wait(1000)
                lp.getToastMessage().should('have.text',element.expected)

            }
                
            });
        })
       
    }
    )
   
  })