
class dashboardPage {

    getPageTitle(){
     return cy.get(".pageTitle")
        
    }
    clickOnLogout(){
        cy.get(':nth-child(4) > .ant-btn').click()
        
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-sm"]').click() 
    }
    getLogIntext(){
        return cy.get(".ant-typography.signInRetailerPage_promoSectionSubtitle__2PVpZ")
           
       }
    ClickOnCLF(){
         cy.get("a[href='/admin/jobs/create']").click()
           
    }
    ClickOnJB(){
        cy.xpath('//a[normalize-space()="Job Management"]').click()
          
   }
   ClickOnOM(){
    cy.xpath('//a[normalize-space()="Order Management"]').click()
         
  }
      
   

}
export default dashboardPage;