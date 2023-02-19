const url=`https://example.cypress.io/todo`

describe("Test cypress Todo",()=>{
    beforeEach(()=>{
        crypto.visit(url)
    })

    it("check if input box present",()=>{
        cy.get("input.new-todo").should("exist");

    })
})

