class UserManagementPage {

    getPageTitle(){
     return cy.get(".crumb-title[href='/admin/user_management']")
        
    }
    clickOnAddNewUserBtn(){
        cy.get('.ant-row > .ant-btn').click()
    }
    setEmail(email){
        cy.get("#register_email").clear().type(email)
    }
    setName(name){
        cy.get("#register_username").clear().type(name)
    }
    setPassword(password){
        cy.get("#register_password").clear().type(password)
    }
    setConfirmPassword(password){
        cy.get("#register_confirm").clear().type(password)
    }
    setTenants(tenants){
        cy.get('.ant-select-selection-overflow').click()
        cy.get('#register_tenants').clear().type(tenants).type('{enter}')
    }
    setRole(role){
        cy.get('#register_role').click()
        switch (role) {
        case "Admin":cy.get("div[title='Admin']").click()
            break;
        case "Customer Service":cy.get("div[title='Customer Service']").click()
            break;    
        case "Operations Team":cy.get("div[title='Operations Team']").click()
             break;    
        case "Driver Manager":cy.get("div[title='Driver Manager']").click()
             break;    
        case "Accounts Team":cy.get("div[title='Accounts Team']").click()
             break;    
    }}
    clickOnSaveBtn(){
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
    }
    getToastMessage(){
        return cy.get('.ant-notification-notice-message')
           
    }
    searchForUserByEmail(email){
        cy.get('input[placeholder="Search"]').clear().type(email).type('{enter}')
           
    }
    getUserEmailFromTable(){
       return cy.get('table>tbody>tr:nth-child(2)>td:nth-child(2)')
           
    }
    addTenants(){
        cy.get('.ant-btn.ant-btn-default.ant-dropdown-trigger.no-border-style').click()       
        cy.xpath('(//input[@type="checkbox"])[3]').check({ force: true }) 
 
    }
    getToastMessageDescription(){
        return cy.get('.ant-notification-notice-description')
           
    }
    changeRole(role){
        cy.get('.ant-select-selection-item[title="Admin"]').click()
        switch (role) {
        case "Admin":cy.get("div[title='Admin']").click()
            break;
        case "Customer Service":cy.get("div[title='Customer Service']").click()
            break;    
        case "Operations Team":cy.get("div[title='Operations Team']").click()
             break;    
        case "Driver Manager":cy.get("div[title='Driver Manager']").click()
             break;    
        case "Accounts Team":cy.get("div[title='Accounts Team']").click()
             break;    
    }
    cy.wait(1000)
    cy.get('.ant-btn.ant-btn-primary.ant-btn-sm').click()
    }
   
    

       
    

}
export default UserManagementPage;