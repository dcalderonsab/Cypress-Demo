
Cypress.Commands.add("APICALLWithURLParameters",(UserName,Last_Name,Gender,birthday,UrlParameter,RestMethod,failOnStatusCode) => {
    return cy.request({
        method: RestMethod,
        url: Cypress.env('API_URL') + UrlParameter,
        body: {
            name: UserName,
            lastName: Last_Name,
            gender: Gender,
            birthday: birthday
        },
        failOnStatusCode: failOnStatusCode
    });
});


Cypress.Commands.add("APICALLWithoutURLParameters",(UserName,Last_Name,Gender,birthday,RestMethod,failOnStatusCode) => {
    return cy.request({
        method: RestMethod,
        url: Cypress.env('API_URL'),
        body: {
            name: UserName,
            lastName: Last_Name,
            gender: Gender,
            birthday: birthday
        },
        failOnStatusCode: failOnStatusCode
    });
})



Cypress.Commands.add("APICALLWithURLParametersNoBody",(UrlParameter,RestMethod,failOnStatusCode) => {
    return cy.request({
        method: RestMethod,
        url: Cypress.env('API_URL') + UrlParameter,
        failOnStatusCode: failOnStatusCode
    });
});