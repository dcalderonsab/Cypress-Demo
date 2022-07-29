class AuthenticationPage{
    
    elements = {
        SubmitButton: () => cy.get('#SubmitCreate'),
        txtemail_create: () => cy.get('#email_create')
    }

    submitButtonClick(){
        this.elements.SubmitButton().click();
    }

    typeEmail(strEmail){
        this.elements.txtemail_create().clear().type(strEmail);
    }
}

export default AuthenticationPage;