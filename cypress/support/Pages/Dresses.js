class DressesPage{

    elements = {
        divDresses: () => cy.get('.content_scene_cat'),
        btnList: () => cy.get('#list'),
        lblAvailableOne: () => cy.get('.first-in-line.first-item-of-tablet-line > .product-container > :nth-child(1) > .center-block > .availability > .available-now'),
        lblAvailableTwo: () => cy.get(':nth-child(2) > .product-container > :nth-child(1) > .center-block > .availability > .available-now'),
        bntAddToCarItemOne: () => cy.get('.first-in-line.first-item-of-tablet-line > .product-container > :nth-child(1) > .right-block > .right-block-content > .button-container > .ajax_add_to_cart_button > span'),
        bntAddToCarItemTwo: () => cy.get(':nth-child(2) > .product-container > :nth-child(1) > .right-block > .right-block-content > .button-container > .ajax_add_to_cart_button > span'),
        bntMoreItemThree: () => cy.get('.last-in-line > .product-container > :nth-child(1) > .right-block > .right-block-content > .button-container > .lnk_view > span'),
        lblProductAdded: () => cy.get('.layer_cart_product > h2'),
        btnContinueShopping : () => cy.get('.continue > span'),
        lblProductPriceOne: () => cy.get('.first-in-line.first-item-of-tablet-line > .product-container > :nth-child(1) > .right-block > .right-block-content > .content_price > .price'),
        lblProductPriceTwo: () => cy.get(':nth-child(2) > .product-container > :nth-child(1) > .right-block > .right-block-content > .content_price > .price'),
        lblProductPriceThree: () => cy.get('.last-in-line > .product-container > :nth-child(1) > .right-block > .right-block-content > .content_price > .price'),
        imgDressImageOne:() => cy.get('#thumb_12'),
        imgDressImageTwo:() => cy.get('#thumb_13'),
        imgDressImageThree:() => cy.get('#thumb_14'),
        imgDressImageFour:() => cy.get('#thumb_15'),
        imgCloseImage:()=> cy.get('.fancybox-item'),
        btnAddToCarMore : () => cy.get('.exclusive > span'),
        btnCheckOut: () => cy.get('.button-medium > span'),
        lblDataSheet: () => cy.get(':nth-child(2) > .page-product-heading')
    }


    clickDressesMenu(){
        this.elements.lblDresses().click();
    }

    clickList(){
        this.elements.btnList().click();
    }

    clickAddToCarItemOne(){
        this.elements.bntAddToCarItemOne().click();
    }

    clickAddToCarItemTwo(){
        this.elements.bntAddToCarItemTwo().click();
    }

    clickMoreItemtemThree(){
        this.elements.bntMoreItemThree().click();
    }

    clickContinueShopping(){
        this.elements.btnContinueShopping().click();
    }

    clickImageOne(){
        this.elements.imgDressImageOne().click();
    }

    clickImageTwo(){
        this.elements.imgDressImageTwo().click();
    }
    clickImageThree(){
        this.elements.imgDressImageThree().click();
    }
    clickImageFour(){
        this.elements.imgDressImageFour().click();
    }

    clickCloseImage(){
        this.elements.imgCloseImage().click();
    }

    clickbtnAddToCareMore(){
        this.elements.btnAddToCarMore().click();
    }


    clickCheckOut(){
        this.elements.btnCheckOut().click();
    }

}

export default DressesPage;