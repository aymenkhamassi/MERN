const express = require("express");
const app = express();
const port = 8000;


const { faker } = require('@faker-js/faker');

// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
    const newFake = {
        password :faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number('###-###-###'),
        lastName :faker.person.lastName(),
        firstName :faker.person.firstName(),
        _id :faker.string.uuid()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
       
       
    };
    return newFake;
};
app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompanies = createCompany();
    res.json(newCompanies);
});

app.get("/api/user/company", (req, res) => {
    const newCompanies = createCompany();
    const newUser = createUser();
    res.json({newCompanies,newUser});
   
});





app.listen( port, () => console.log(`Listening on port: ${port}`) );