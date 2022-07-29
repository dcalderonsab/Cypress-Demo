class MenuPage{

    elements = {
        lblWomenTab: () => cy.get('.sf-with-ul'),
        lblDresses: () => cy.get('.sf-menu > :nth-child(2) > .sf-with-ul')
    }


    clickDressesMenu(){
        this.elements.lblDresses().click();
    }


}

export default MenuPage;