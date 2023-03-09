export class CustomerRegistration{
    registerBtn='[class="btn signup-btn"]'
    customerRegistrationLink='.link[href="/customersignup"]'
    breadMenuOnMobile='[id="menu-button-:r1:"]'
    dropDownMenuOnMobile='[id="menu-list-:r1:"]'
    signUpButtonOnMobile ='[id="menu-list-:r1:-menuitem-:r2:"]'
    firstNameFieldSelector='[name="first_name"]'
    lastNameFieldSelector='[name="last_name"]'
    emailFieldSelector='[name="email"]'
    passwordFieldSelector='[name="password"]'
    confirmPasswordFieldSelctor='[id="confirm_password"]'
    createAccountButtonSelector='button[type="submit"]'



    mobileViewclickOnBreadMenuButton(){
        cy.get(this.breadMenuOnMobile).click({force: true})
        cy.get(this.dropDownMenuOnMobile).should('be.visible')
        
    }
    mobileClickOnSignUp(){
        cy.get(this.signUpButtonOnMobile).click({force: true})
        cy.url().should('include','merchant')

    }
    clickOnRegister(){
        cy.get(this.registerBtn).click({force: true})
        cy.url().should('include','merchant')
    }
    clickOnCustomerAccount(){
        cy.get(this.customerRegistrationLink).click({force: true})
        cy.url().should('include','customer')
    }
    typeFirstName(firstname){
        cy.get(this.firstNameFieldSelector).type(firstname)
        cy.get(this.firstNameFieldSelector).invoke('val').should('eq',firstname)
    }
    typeLastName(lastName){
        cy.get(this.lastNameFieldSelector).type(lastName)
        cy.get(this.lastNameFieldSelector).invoke('val').should('eq',lastName)

    }
    typeEmailAddress(email){
        cy.get(this.emailFieldSelector).type(email)
        cy.get(this.emailFieldSelector).invoke('val').should('eq',email)
    }
    typePassword(password){
        cy.get(this.passwordFieldSelector).type(password)
        cy.get(this.passwordFieldSelector).invoke('val').should('eq',password)
    }
    typeConfirmPassword(confirmPassword){
        cy.get(this.confirmPasswordFieldSelctor).type(confirmPassword)
        cy.get(this.confirmPasswordFieldSelctor).invoke('val').should('eq',confirmPassword)
    }
    clickCreateAccountButton(){
        cy.get(this.createAccountButtonSelector).click({force:true})
    }
    


}