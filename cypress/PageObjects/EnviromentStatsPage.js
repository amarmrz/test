class EnviromentStatsPage {

    getPageTitle(){
     return cy.get(".crumb-title[href='/admin/environment_stats']")
        
    }
  /*   clickOnLogout(){
        cy.get(':nth-child(4) > .ant-btn').click()
        
        cy.get('.ant-btn-primary > span').click() 
    } */
   
   

}
export default EnviromentStatsPage;