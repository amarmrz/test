import dashboardPage from "../../PageObjects/Dashboard"
import loginPage from "../../PageObjects/LoginPage"
import UserManagementPage from "../../PageObjects/UserManagementPage"

describe('Verify user managament functionality', function()  {
   
   
    it('Admin can edit user role properly ',{ tags: '@Smoke'}, ()=>  
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
                US.searchForUserByEmail('lenegiy136@lieboe.com')
                US.getUserEmailFromTable().contains('lenegiy136@lieboe.com')
                US.changeRole("Customer Service")
                US.getToastMessageDescription().contains("Role changed")
                cy.wait(3000)
                dash.clickOnLogout()    
    })
    it('Admin can edit user tenant properly ',{ tags: '@Smoke'}, ()=>  
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
                US.searchForUserByEmail('lenegiy136@lieboe.com')
                US.getUserEmailFromTable().contains('lenegiy136@lieboe.com')
                US.addTenants()
                US.getToastMessageDescription().contains("The tenant has been added successfully")
                cy.wait(3000)
                dash.clickOnLogout()    
    })
   
    
  })