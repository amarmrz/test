class RetailerGroupsPage {

    getPageTitle(){
     return cy.get(".crumb-title[href='/admin/retailers_groups']")
        
    }
  /*   clickOnLogout(){
        cy.get(':nth-child(4) > .ant-btn').click()
        
        cy.get('.ant-btn-primary > span').click() 
    } */
   
   

}
export default RetailerGroupsPage;