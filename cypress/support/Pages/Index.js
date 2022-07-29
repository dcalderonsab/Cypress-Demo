class IndexPage{

    elements = {
        SignIn: () => cy.get('.login'),
        LogoImage:() => cy.get('.logo')
    }
    
    
        navigate(){
            cy.visit(Cypress.env('WEB_PAGE_URL'));
        }
    
        SignInClick(){
            this.elements.SignIn().click();
        }
    
    }
    
    
    export default IndexPage;