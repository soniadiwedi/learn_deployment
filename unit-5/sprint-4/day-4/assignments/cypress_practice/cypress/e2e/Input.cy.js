const url="http://localhost:3000/"

describe("Test all input",()=>{
    beforeEach(()=>{
        cy.visit(url)
    })

    it("check if input box present",()=>{
        cy.get(".inputvalue").should("exist");
        cy.get(".inputnumber").should("exist");

    })




    it("should focus present",()=>{
        cy.get(".inputnumber").should("have.focus")
    })



    it("correct value type",()=>{
        cy.get(".inputvalue").should("exist")
        cy.get(".inputnumber").type("sonia")
    })
})
