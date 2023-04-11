class UserManagementPage {

    getPageTitle(){
     return cy.get(".crumb-title[href='/admin/user_management']")
        
    }
  /*   clickOnLogout(){
        cy.get(':nth-child(4) > .ant-btn').click()
        
        cy.get('.ant-btn-primary > span').click() 
    } */
   
   

}
export default UserManagementPage;