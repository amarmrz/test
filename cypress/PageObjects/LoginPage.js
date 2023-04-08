
class loginPage {

    setAdminEmail(email){
        cy.get("#adminLogin_email").clear().type(email)
    }
    setAdminPassword(password){
        cy.get("#adminLogin_password").clear().type(password)
    }
    clickOnloginIn(){
        cy.get("button[type='submit']").click()
    }
    getToastMessage(){
       return cy.get('.ant-notification-notice-description')
    }


}
export default loginPage;