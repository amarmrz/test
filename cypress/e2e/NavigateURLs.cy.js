import CreatePage from "../PageObjects/CreatePage"
import loginPage from "../PageObjects/LoginPage"
import dashboardPage from "../PageObjects/Dashboard"
import JobPage from "../PageObjects/JobPage"
import OrderManagementPage from "../PageObjects/Order ManagementPage"
describe('Verify the Logout functionality', function()  
{
    beforeEach(() => {
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
      
      
      })

    afterEach(() => {
       cy.url().then(url => {
        cy.log(url)
      });
      
    })

    it('Navigate to Cloud fleet Routing Page', { tags: '@Smoke'}, ()=>  
    {
       
            
                let dash=new dashboardPage()
                dash.ClickOnCLF()
                cy.wait(6000)
                //cy.intercept('GET','**/tenants').as('Dashboard')
               //cy.wait('@Dashboard') 
               let crete=new CreatePage()
               crete.getPageTitle().should('have.text','create')
            
     })
    it("Navigate to Job Management Page", { tags: '@Smoke' },()=> 
        {
            let dash=new dashboardPage()
            dash.ClickOnJB()
            cy.wait(6000)
            //cy.intercept('GET','**/tenants').as('Dashboard')
           //cy.wait('@Dashboard') 
           let job=new JobPage()
           job.getPageTitle().should('have.text','jobs')
    })

       
    it("Navigate to Order Management Page", { tags: '@Smoke' },()=> 
        {
            let dash=new dashboardPage()
            dash.ClickOnOM()
            cy.wait(6000)
            //cy.intercept('GET','**/tenants').as('Dashboard')
           //cy.wait('@Dashboard') 
           let OM=new OrderManagementPage()
           OM.getPageTitle().should('have.text','orders_managment')
    })
     
 })