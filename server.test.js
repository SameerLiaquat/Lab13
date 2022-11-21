const request= require("supertest");
const app=require('./routes/User');
const mongoose=require('mongoose');

describe("Test the root path",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("mongodb://localhost:27017/Lab12/Users/add"
        ).send({
            "Name":"Sameer",
            "Email": "2020",
            "Age":20,
            "Contact":200
        })
        expect(response.statusCode).toBe(200);
    })
})


describe("Test the Add path 2",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("mongodb://localhost:27017/Lab12/Users/add"
        ).send({
            "Name":"Sameer",
        })
        expect(response.statusCode).toBe(200);
    })
})

describe("Test the Delete path 3",()=>{
    test("It should response the get method",()=>{
        const response=request(app).post("mongodb://localhost:27017/Lab12/Users/delete"
        ).send({
            "Name":"Sameer",
            "Email": "2020",
            "Age":20,
            "Contact":200        })
        expect(response.statusCode).toBe(200);
    })
})

