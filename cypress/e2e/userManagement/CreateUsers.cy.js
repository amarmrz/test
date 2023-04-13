import dashboardPage from "../../PageObjects/Dashboard"
import loginPage from "../../PageObjects/LoginPage"
import UserManagementPage from "../../PageObjects/UserManagementPage"

describe('Verify user managament functionality', function()  {
   
    it('Admin can create users properly ',{ tags: '@Smoke'}, ()=>  
    {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.fixture("UsersData.json").then((data)=>{
            cy.visit("https://staging.beebolt.com/admin_login")
          
            data.forEach(element => {
            let lp=new loginPage()

            lp.setAdminEmail("amar+staging@beebolt.com")
            lp.setAdminPassword("123456789")
            lp.clickOnloginIn()

            let dash=new dashboardPage()
            dash.getPageTitle().should('have.text',"Dashboard")
            dash.ClickOnUM()

            let US=new UserManagementPage()
            US.getPageTitle().should('have.text','user_management')    
            US.clickOnAddNewUserBtn()
            cy.wait(1000)
            cy.get("div[role='dialog']").should('be.visible')            
            US.setEmail(element.email)
            US.setName(element.Name)
            US.setPassword(element.password)
            US.setConfirmPassword(element.password)
            US.setTenants(element.Tenants) 
            cy.get('.ant-modal-body').click()  
            US.setRole(element.Role) 
            US.clickOnSaveBtn() 
            US.getToastMessage().contains("Succes")
            cy.wait(3000)
            dash.clickOnLogout()
                
            });
        })
    })  
   
    
  })