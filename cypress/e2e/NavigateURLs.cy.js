import CreatePage from "../PageObjects/CreatePage"
import loginPage from "../PageObjects/LoginPage"
import dashboardPage from "../PageObjects/Dashboard"
import JobPage from "../PageObjects/JobPage"
import OrderManagementPage from "../PageObjects/Order ManagementPage"
import DriverManagementPage from "../PageObjects/DriverManagementPage"
import ZoneCreationPage from "../PageObjects/ZoneCreationPage"
import DriverStat from "../PageObjects/DriverStat"
import PaymentPage from "../PageObjects/PaymentPage"
import RetailerManagementPage from "../PageObjects/RetailerManagementPage"
import RetailerGroupsPage from "../PageObjects/RetailerGroupsPage"
import AccountingPage from "../PageObjects/AccountingPage"
import SytemReportPage from "../PageObjects/SytemReportPage"
import EnviromentStatsPage from "../PageObjects/EnviromentStatsPage"
import DelivryReportPage from "../PageObjects/DelivryReportPage"
import TicketsPage from "../PageObjects/TicketsPage"
import NotificationPage from "../PageObjects/NotificationPage"
import ReportsPage from "../PageObjects/ReportsPage"
import UserManagementPage from "../PageObjects/UserManagementPage"
import SettingsPage from "../PageObjects/SettingsPage"


describe('User can Navigate to all pages', function()  
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

      it("Navigate to Driver Management Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnDM()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new DriverManagementPage()
          DM.getPageTitle().should('have.text','drivers_manager')
      })
    
      it("Navigate to Zone creation Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnZC()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new ZoneCreationPage()
          DM.getPageTitle().should('have.text','zones_manager')
      })
      
      it("Navigate to Driver Stats Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnDS()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new DriverStat()
          DM.getPageTitle().should('have.text','drivers_stats')
      })

      it("Navigate to Payments Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnPayement()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new PaymentPage()
          DM.getPageTitle().should('have.text','payments')
      })

      it("Navigate to Retailers Management Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnRM()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new RetailerManagementPage()
          DM.getPageTitle().should('have.text','retailers')
      })

      it("Navigate to Retailers Groups Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnRG()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new RetailerGroupsPage()
          DM.getPageTitle().should('have.text','retailers_groups')
      })

      it("Navigate to Accounting Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnAccounting()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new AccountingPage()
          DM.getPageTitle().should('have.text','accounting')
      })

      it("Navigate to System Report Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnSR()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new SytemReportPage()
          DM.getPageTitle().should('have.text','system_report')
      })

      it("Navigate to Environment Stats Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnEV()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new EnviromentStatsPage()
          DM.getPageTitle().should('have.text','environment_stats')
      })

      it("Navigate to Delivery Reports Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnDR()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new DelivryReportPage()
          DM.getPageTitle().should('have.text','delivery_reports')
      })

      it("Navigate to Tickets Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnTickets()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
        //cy.wait('@Dashboard') 
          let DM=new TicketsPage()
          DM.getPageTitle().should('have.text','tickets')
      })

      it("Navigate to Notifications Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnNotifications()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
          //cy.wait('@Dashboard') 
          let DM=new NotificationPage()
          DM.getPageTitle().should('have.text','notifications')
      })

      it("Navigate to Reports Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnReports()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
          //cy.wait('@Dashboard') 
          let DM=new ReportsPage()
          DM.getPageTitle().should('have.text','reports')
      })
    
      it("Navigate to User Management Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnUM()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
          //cy.wait('@Dashboard') 
          let DM=new UserManagementPage()
          DM.getPageTitle().should('have.text','user_management')
      })

      it("Navigate to Settings Page", { tags: '@Smoke' },()=> 
      {
          let dash=new dashboardPage()
          dash.ClickOnSettings()
          cy.wait(6000)
          //cy.intercept('GET','**/tenants').as('Dashboard')
          //cy.wait('@Dashboard') 
          let DM=new SettingsPage()
          DM.getPageTitle().should('have.text','preferences')
      })
 })