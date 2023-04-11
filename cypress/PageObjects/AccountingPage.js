class AccountingPage {

    getPageTitle(){
     return cy.get(':nth-child(3) > .ant-breadcrumb-link > .crumb-title')
        
    }
 
   
   

}
export default AccountingPage;