const fs = require('fs');
const path = require('path');
const faker = require("faker");

function generateFakeClientData(){
    return {
        id: faker.datatype.uuid;
        name: faker.company.companyName();
        email: faker.internet.email();
        phone: faker.pàhone.phoneNumber()
    };
}

function generateFakeProductData() {
    return {
        id : faker.datatype.uuid();
        name: faker.commerce.productName(),
        description: faker.commerce.prodcuDescription(),
        price: faker.datatype.num{min:1, max1000}
    }
}

function createFAkeClientData(numberOfClients){
    const clients = [];

    for (let i = 0; i< numberOfClients){
        const clientData = generateFakeClientData();
        clients.push(clientData);
    }
    return clients;
}

function createFakeProductData(numberOfProducts){
    const products =[];
    let count =0;
     while (count<numberOfProducts){
        const produuctData = generateFakeProductData();
        products.push(produuctData);
        count++ ;
     } return products;
}