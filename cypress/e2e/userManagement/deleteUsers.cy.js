import dashboardPage from "../../PageObjects/Dashboard"
import loginPage from "../../PageObjects/LoginPage"
import UserManagementPage from "../../PageObjects/UserManagementPage"

describe('Verify user managament functionality', function()  {
   
   
  it('Admin can Delete users properly ',{ tags: '@Smoke'}, ()=>  
  {
          Cypress.on('uncaught:exception', (err, runnable) => {
              return false
            })
              cy.visit("https://staging.beebolt.com/admin_login")
              let lp=new loginPage()
  
              lp.setAdminEmail("amar+staging@beebolt.com")
              lp.setAdminPassword("123456789")
              lp.clickOnloginIn()
  
              let dash=new dashboardPage()
              dash.getPageTitle().should('have.text',"Dashboard")
              dash.ClickOnUM()
  
              let US=new UserManagementPage()
              US.getPageTitle().should('have.text','user_management')    
              //******************************************************** */
              cy.wait(3000)
              US.searchForUserByEmail('lenegiy1')
              cy.wait(3000)
             
                cy.xpath("(//button[@class='ant-btn ant-btn-default no-border-style'])").each(($button)=>{
                  cy.wrap($button).click()
                  cy.get('button[class="ant-btn ant-btn-default delete-user-btn"]').click()
                  US.getToastMessageDescription().contains("User deleted")
                  cy.wait(1000)
                })
               
               
              
               
                    
  })
   
    
  })