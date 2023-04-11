class SignUpPage {

    getPageTitle(){
     return cy.get(".ant-typography.signInRetailerPage_promoSectionSubtitle__2PVpZ")
        
    }

    setAdminEmail(email){
        cy.get("#adminSignup_email").clear().type(email)
    }
    setAdminPassword(password){
        cy.get("#adminSignup_password").clear().type(password)
    }
    setAdminConfirmPassword(password){
        cy.get("#adminSignup_passwordConfirmation").clear().type(password)
    }
    setComapanyName(Name){
        cy.get("#adminSignup_name").clear().type(Name)
    }
    clickOnSignUpbtn(){
        cy.get("button[type='submit']").click()
    }
   

}
export default SignUpPage;