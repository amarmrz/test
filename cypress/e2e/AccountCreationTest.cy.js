import loginPage from "../PageObjects/LoginPage"
import SignUpPage from "../PageObjects/SignUpPage"

describe('Verify the Account Creation functionality', function()  {
    it('Create Account with valide credentials',{ tags: '@Smoke'}, ()=>  
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })

        cy.fixture("AccountCreationData.json").then((data)=>{
            cy.visit("https://staging.beebolt.com/admin_login")
          
            data.forEach(element => {
            let lp=new loginPage()
            lp.clickOnSignUpBtn()
            
          
            
                let Account=new SignUpPage()
                //we are in sign up page
                Account.getPageTitle().should('have.text','Sign Up')

                Account.setAdminEmail(element.email)
                Account.setAdminPassword(element.password)
                Account.setAdminConfirmPassword(element.password)
                Account.setComapanyName(element.companyName)
                Account.clickOnSignUpbtn()
                //some validation
                cy.hash().should('have.text','https://staging.beebolt.com/admin/dashboard')

     
                
            });
        })
       
    }
    )
   
  })