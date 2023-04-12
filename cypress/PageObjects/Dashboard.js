
class dashboardPage {

    getPageTitle(){
     return cy.get(".pageTitle")
        
    }
    clickOnLogout(){
      cy.get(':nth-child(4) > .ant-btn-round').click()
        
        cy.get('button[class="ant-btn ant-btn-primary ant-btn-sm"]').click() 
    }
    getLogIntext(){
        return cy.get('.signInRetailerPage_promoSectionTitle__xUNxu > .ant-typography')
           
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
  ClickOnDM(){
    cy.xpath('//a[normalize-space()="Driver Management"]').click()
         
  }   
   
  ClickOnZC(){
    cy.xpath('//a[normalize-space()="Zone creation"]').click()
         
  }   

  ClickOnDS(){
    cy.xpath('//a[normalize-space()="Drivers Stats"]').click()
         
  }   

  ClickOnPayement(){
    cy.xpath('//a[normalize-space()="Payments"]').click()
         
  }   
  ClickOnRM(){
    cy.xpath('//a[normalize-space()="Retailers Management"]').click()
         
  } 
  ClickOnRG(){
    cy.xpath('//a[normalize-space()="Retailers Groups"]').click()
         
  } 
  ClickOnAccounting(){
    cy.xpath('//a[normalize-space()="Accounting"]').click()
         
  } 
  ClickOnEV(){
    cy.xpath('//a[normalize-space()="Environment stats"]').click()
         
  } 
  ClickOnSR(){
    cy.xpath('//a[normalize-space()="System Report"]').click()
         
  } 
  ClickOnDR(){
    cy.xpath('//a[normalize-space()="Delivery Reports"]').click()
         
  } 
  ClickOnTickets(){
    cy.xpath('//a[normalize-space()="Tickets"]').click()
         
  } 

  ClickOnNotifications(){
    cy.xpath('//a[normalize-space()="Notifications"]').click()
         
  } 
  ClickOnReports(){
    cy.xpath('//a[normalize-space()="Reports"]').click()
         
  } 
  ClickOnUM(){
    cy.xpath('//a[normalize-space()="User Management"]').click()
         
  } 
  ClickOnSettings(){
    cy.xpath('//a[normalize-space()="Settings"]').click()
         
  } 

}
export default dashboardPage;