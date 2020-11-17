const { expect } = require("@jest/globals");
const similarLicensePlates = require("./practice.js");


describe("match with string",()=>{
    test("match with first character",()=>{
        const plate1 = "B"
        const plate2 = "B"
        expect(similarLicensePlates(plate1,plate2)).toBe(true)
    })
    test("match with first character case 1",()=>{
        const plate1 = "2"
        const plate2 = "Z"
        expect(similarLicensePlates(plate1,plate2)).toBe(true)
    })
})