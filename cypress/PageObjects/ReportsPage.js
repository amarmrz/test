class ReportsPage {

    getPageTitle(){
     return cy.get(".crumb-title[href='/admin/reports']")
        
    }
  /*   clickOnLogout(){
        cy.get(':nth-child(4) > .ant-btn').click()
        
        cy.get('.ant-btn-primary > span').click() 
    } */
   
   

}
export default ReportsPage;