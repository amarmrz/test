
class dashboardPage {

    getPageTitle(){
     return cy.get(".pageTitle")
        
    }
    clickOnLogout(){
        cy.get(':nth-child(4) > .ant-btn').click()
        
        cy.get('.ant-btn-primary > span').click() 
    }
    getLogIntext(){
        return cy.get(".ant-typography.signInRetailerPage_promoSectionSubtitle__2PVpZ")
           
       }
   

}
export default dashboardPage;