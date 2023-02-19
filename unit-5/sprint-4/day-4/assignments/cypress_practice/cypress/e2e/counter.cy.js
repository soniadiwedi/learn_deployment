
const url=`http://localhost:3000/`;


describe("Test the counter application",()=>{
    //counter should be present 
    beforeEach(()=>{
        cy.visit(url)
    })
    //CASE-1
    it("Countershould be present",()=>{
        // cy.visit(url);
        //using data test id
        //using test
        cy.get(".counter_value").should('exist')
        cy.get("button").should("exist") //don not prefer this because if we have so btn
        cy.get("button.add_btn").should("exist")
        cy.get("button.reduce_btn").should("exist")
    });


    //CASE-2
    it("Counter should have text couter: 0",()=>{
        // cy.visit(url);
         cy.get(".counter_value").should("have.text","counter: 0")
        
    });

    //CASE-3
    it("Check text for buttons",()=>{
        cy.get("button.add_btn").should("have.text","add")
        cy.get("button.reduce_btn").should("have.text","reduce")
    });

    //CASE-4
    it("onclicking the add button count should increase",()=>{
        cy.get(".counter_value").should("have.text","counter: 0")
        cy.get(".add_btn").click()
        cy.get(".counter_value").should("have.text","counter: 1")
    })

    //CASE-5
    it("onclicking the reduce button count decrease",()=>{
        cy.get(".counter_value").should("have.text","counter: 0")
        cy.get(".reduce_btn").click()
        cy.get(".counter_value").should("have.text","counter: -1")
    })
}) 