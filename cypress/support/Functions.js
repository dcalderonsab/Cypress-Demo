cy.GenericFunctions = {
    RamdonEmail: (strFirstEmailSection, strMiddleEmailSection, strLastEmailSection  ) => {
        let uuid = () => Cypress._.random(0, 1e6)
        let id = uuid()
        let strEmail = strFirstEmailSection + id + '@' + strMiddleEmailSection + strLastEmailSection;
        return strEmail.toString();
    },
    ReturnAmount: (element) => {
        let newAmount = element().invoke('val').invoke('replaceAll','$','').then((value)=>{ cy.log(value)});
        cy.log(element().invoke('val').invoke('replaceAll','$',''));
        cy.log('hola');
        return newAmount;
    }
}