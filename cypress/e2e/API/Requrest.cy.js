/// <reference types="Cypress"/>

import DataForTest from '../../fixtures/DataForTest.json';

describe('API CRUD testing for Requres', function () {


    const JsonFileForTest = 'JsonDataTest.json';

    it('API Post call for create update and delete an user', () => {


        cy.fixture(JsonFileForTest).each((data)=>{

            cy.APICALLWithoutURLParameters(
                data.UserName,
                data.Last_Name,
                data.Gender,
                data.birthday,
                DataForTest.Rest_Methods.POST,
                DataForTest.Status_Code.Status_true)
                .then((response) => {

                    expect(response).property('status').to.equal(201);
                    expect(response.body).to.have.property('id');
                    expect(response.body).to.have.property('name').eq(data.UserName);
                    expect(response.body).to.have.property('lastName').eq(data.Last_Name);
                    expect(response.body).to.have.property('gender').eq(data.Gender);
                    expect(response.body).to.have.property('birthday').eq(data.birthday);
                    expect(response.body).to.have.property('createdAt');



                    if (data.udpate) {
                        cy.APICALLWithURLParameters(
                            data.UserName_ToUpdate,
                            data.Last_Name_ToUpdate,
                            data.Gender_ToUpdate,
                            data.birthday_ToUpdate,
                            response.body.id,
                            DataForTest.Rest_Methods.PUT,
                            DataForTest.Status_Code.Status_true).then((responsePut) => {
                                expect(responsePut).property('status').to.equal(200);
                                expect(responsePut.body).to.have.property('name').eq(data.UserName_ToUpdate);
                                expect(responsePut.body).to.have.property('lastName').eq(data.Last_Name_ToUpdate);
                                expect(responsePut.body).to.have.property('gender').eq(data.Gender_ToUpdate);
                                expect(responsePut.body).to.have.property('birthday').eq(data.birthday_ToUpdate);
                                expect(responsePut.body).to.have.property('updatedAt');
                            });
                    }


                    if (data.delete) {
                        cy.APICALLWithURLParametersNoBody(
                            response.body.id,
                            DataForTest.Rest_Methods.DELETE,
                            DataForTest.Status_Code.Status_false).then((responseDelete) => {
                                expect(responseDelete).property('status').to.equal(204);
                                expect(responseDelete).property('statusText').to.equal('No Content');
                            });
                    }
                });
        });
    });

    it('API Get Call for read item data, with string parameters and a 404 status as response', () => {

        cy.APICALLWithURLParametersNoBody(
            DataForTest.Wrong_Data.StringParameter,
            DataForTest.Rest_Methods.GET,
            DataForTest.Status_Code.Status_false
        )
            .then((response) => {
                expect(response).property('status').to.equal(404);
            });
    });


});