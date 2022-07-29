class AccounCreationPage {

    elements = {
        PageSubHeading: () => cy.get('.page-subheading'),
        runiformid_gender1: () => cy.get('#uniform-id_gender1'),
        runiformid_gender2: () => cy.get('#uniform-id_gender2'),
        txtcustomer_firstname: () => cy.get('#customer_firstname'),
        txtcustomer_lastname: () => cy.get('#customer_lastname'),
        txtemail : () => cy.get('#email'),
        txtpasswd : () => cy.get('#passwd'),
        sdays : () => cy.get('#days'),
        smonths : () => cy.get('#months'),
        syears : () => cy.get('#years'),
        chknewsletter : () => cy.get('#newsletter'),
        chkoptin : () => cy.get('#optin'),
        txtfirstname : () => cy.get('#firstname'),
        txtlastname : () => cy.get('#lastname'),
        txtcompany : () => cy.get('#company'),
        txtaddress1 : () => cy.get('#address1'),
        spninlineinfos : () => cy.get('.inline-infos'),
        txtaddress2 : () => cy.get('#address2'),
        txtcity : () => cy.get('#city'),
        sid_state : () => cy.get('#id_state'),
        txtpostcode : () => cy.get('#postcode'),
        sid_country : () => cy.get('#id_country'),
        txaother : () => cy.get('#other'),
        txtphone : () => cy.get('#phone'),
        txtphone_mobile : () => cy.get('#phone_mobile'),
        txtalias : () => cy.get('#alias'),
        btnsubmitAccount : () => cy.get('#submitAccount')
    }


    selectGenderOne(){
        this.elements.runiformid_gender1().click();
    }


    selectGenderTwo(){
        this.elements.runiformid_gender2().click();
    }

    typeFirstName(FirstName){
        this.elements.txtcustomer_firstname().clear().type(FirstName);
    }

    typeLastName(LastName){
        this.elements.txtcustomer_lastname().clear().type(LastName);
    }

    getEmailValue(){
        return this.elements.txtemail().invoke('value');
    }

    typePassword(Password){
        this.elements.txtpasswd().clear().type(Password);
    }

    selectDay(Day){
        this.elements.sdays().select(Day);
    }

    selectMonth(Month){
        this.elements.smonths().select(Month);
    }

    selectYear(Year){
        this.elements.syears().select(Year);
    }

    checkNewsLetter(){
        this.elements.chknewsletter().click();
    }

    checkSpecialOffer(){
        this.elements.chkoptin().click();
    }


    typeFirstNameAddress(FirstNameAddress){
        this.elements.txtfirstname().clear().type(FirstNameAddress);
    }

    typeLastnameAdress(LastnameAdress){
        this.elements.txtlastname().clear().type(LastnameAdress);
    }

    typeCompany(CompanyName){
        this.elements.txtcompany().clear().type(CompanyName);
    }

    typeAddress1(Address1){
        this.elements.txtaddress1().clear().type(Address1);
    }

    typeAddress2(Address2){
        this.elements.txtaddress2().clear().type(Address2);
    }

    typeCity(City){
        this.elements.txtcity().clear().type(City);
    }

    selectState(state){
        this.elements.sid_state().select(state);
    }

    typePostCode(PostCode){
        this.elements.txtpostcode().clear().type(PostCode);
    }

    selectCountry(country){
        this.elements.sid_country().select(country);
    }

    typeOther(Other){
        this.elements.txaother().clear().type(Other);
    }

    typePhone(PhoneNumber){
        this.elements.txtphone().clear().type(PhoneNumber);
    }

    typePhone_Mobile(PhoneMobileNumber){
        this.elements.txtphone_mobile().clear().type(PhoneMobileNumber);
    }

    typeAlias(Alias){
        this.elements.txtalias().clear().type(Alias);
    }

    submitAccount(){
        this.elements.btnsubmitAccount().click();
    }



}

export default AccounCreationPage;