/// <reference types="Cypress"/>
import IndexPage from '../../support/Pages/Index';
import AuthenticationPage from '../../support/Pages/Authentication';
import AccounCreationPage from '../../support/Pages/AccountCreation';
import MyAccountPage from '../../support/Pages/MyAccount';

import DataForTestUI from '../../fixtures/UIData/DataForTestingUI.json';
import MenuPage from '../../support/Pages/Menu';
import DressesPage from '../../support/Pages/Dresses';
import CheckOutPage from '../../support/Pages/CheckOutPage';




describe('SingIn Page testing user creation', () => {

    const clsIndex = new IndexPage();
    const clsAuthentication = new AuthenticationPage();
    const clsAccountCreation = new AccounCreationPage();
    const clsMyAccount = new MyAccountPage();
    const clsMenu = new MenuPage();
    const clsDresses = new DressesPage();
    const clsCheckOut = new CheckOutPage();
    let Email;

    beforeEach('Load Index page', () => {
        clsIndex.navigate();
    });

    it('SignIn User creation', () => {

        clsIndex.elements.LogoImage().should('be.visible');
        clsIndex.SignInClick();
        clsAuthentication.elements.txtemail_create().should('be.visible');


        

        Email = cy.GenericFunctions.RamdonEmail(DataForTestUI.User_Data_Email.strFirstEmailSection,
            DataForTestUI.User_Data_Email.strMiddleEmailSection,
            DataForTestUI.User_Data_Email.strLastEmailSection);

        clsAuthentication.typeEmail(Email);

        clsAuthentication.elements.SubmitButton().click();

        

        clsAccountCreation.selectGenderOne();

        clsAccountCreation.typeFirstName(DataForTestUI.User_Data_Personal_Info.customer_firstname);
        clsAccountCreation.typeLastName(DataForTestUI.User_Data_Personal_Info.customer_lastname);

        clsAccountCreation.elements.txtemail().should('have.value', Email);

        clsAccountCreation.typePassword(DataForTestUI.User_Data_Personal_Info.passwd);


        clsAccountCreation.selectDay(DataForTestUI.User_Data_Personal_Info.day);
        clsAccountCreation.selectMonth(DataForTestUI.User_Data_Personal_Info.month);
        clsAccountCreation.selectYear(DataForTestUI.User_Data_Personal_Info.year);

        clsAccountCreation.checkNewsLetter();
        clsAccountCreation.checkSpecialOffer();

        clsAccountCreation.typeFirstNameAddress(DataForTestUI.User_Data_Personal_Info.firstnameaddress);
        clsAccountCreation.typeLastnameAdress(DataForTestUI.User_Data_Personal_Info.lastnameaddress);

        clsAccountCreation.typeCompany(DataForTestUI.User_Data_Personal_Info.company);

        clsAccountCreation.typeAddress1(DataForTestUI.User_Data_Personal_Info.address1);
        clsAccountCreation.typeAddress2(DataForTestUI.User_Data_Personal_Info.address2);

        clsAccountCreation.typeCity(DataForTestUI.User_Data_Personal_Info.city);

        clsAccountCreation.selectState(DataForTestUI.User_Data_Personal_Info.id_state);

        clsAccountCreation.typePostCode(DataForTestUI.User_Data_Personal_Info.postcode);

        clsAccountCreation.selectCountry(DataForTestUI.User_Data_Personal_Info.id_country);

        clsAccountCreation.typeOther(DataForTestUI.User_Data_Personal_Info.other);

        clsAccountCreation.typePhone(DataForTestUI.User_Data_Personal_Info.phone);
        clsAccountCreation.typePhone_Mobile(DataForTestUI.User_Data_Personal_Info.phone_mobile);

        clsAccountCreation.typeAlias(DataForTestUI.User_Data_Personal_Info.alias);

        clsAccountCreation.submitAccount();


        clsMyAccount.elements.lblInfoAccount().should('be.visible');

        clsMenu.clickDressesMenu();
        clsDresses.clickList();

        clsDresses.elements.lblAvailableOne().should('be.visible');
        clsDresses.clickAddToCarItemOne();

        clsDresses.elements.lblProductAdded().should('be.visible');

        clsDresses.clickContinueShopping();

        clsDresses.clickAddToCarItemTwo();
        clsDresses.clickContinueShopping();

        

        clsDresses.clickMoreItemtemThree(); 

        clsDresses.elements.lblDataSheet().should('be.visible');


        clsDresses.clickImageOne();
        clsDresses.clickCloseImage();

        clsDresses.clickImageTwo();
        clsDresses.clickCloseImage();

        clsDresses.clickImageThree();
        clsDresses.clickCloseImage();

        clsDresses.clickImageFour();
        clsDresses.clickCloseImage();

        clsDresses.clickbtnAddToCareMore();

        clsDresses.clickCheckOut();

        clsCheckOut.elements.lblSummary().should('be.visible');

        clsCheckOut.calculateCartSummary();


    })



});