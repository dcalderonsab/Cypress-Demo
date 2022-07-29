class CheckOutPage{
    
    intTotalAmount = 0;

    elements = {
        lblPriceOne: () =>cy.get('#total_product_price_3_13_725054'),
        lblPriceTwo: () => cy.get('#total_product_price_4_16_725054'),
        lblPriceThree: () => cy.get('#total_product_price_5_19_725054'),
        lblShipping : () => cy.get('#total_shipping'),
        lblTotalPrice : () => cy.get('#total_price'),
        tblCartSummary : () => cy.get('#cart_summary > tbody > tr > td:nth-child(6)'),
        lblSummary : () => cy.get('.step_current > span')

    }

    submitButtonClick(){
        this.elements.SubmitButton().click();
    }

    typeEmail(strEmail){
        this.elements.txtemail_create().clear().type(strEmail);
    }

    calculateCartSummary(){
        this.elements.tblCartSummary().each(($element) => {
            cy.wrap($element).invoke('text').invoke('replaceAll','$','').then(text => {
                this.intTotalAmount = this.intTotalAmount + +(text);
                cy.log(this.intTotalAmount.toFixed(2));
            });
        })
    }
}

export default CheckOutPage;