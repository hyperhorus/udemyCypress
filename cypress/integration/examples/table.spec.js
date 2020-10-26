/// <reference types="cypress" />

describe("Testing EA App", () =>{
    
    it.only('Testing assertions in EA', () => {
        cy.visit('https://executeautomation.com/');
        //cy.get("h6").should('have.class', 'Countries');

        cy.get("h6").should(($x) => {
            expect($x).to.have.class('Countries');

        })  

    })
    
    it('Login operation', () =>{

        cy.visit("http://eaapp.somee.com/");
        
        //cy.contains("Login").click();
        // Método largo de hacer un alias
        // cy.get("#loginLink").then(($link) => {
        //     return $link.text();
        // }).as("linkText");
        //Metodo corto de hacer un alias
        cy.get("#loginLink").invoke('text').as("linkText");

        cy.contains("Login").click();

        cy.get("@linkText").then(($x) => {
            expect($x).is.eql('Login');
        })

        
        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click({force:true});

        cy.contains('Employee List').click();

        //Table
        //cy.get('.table').find('tr').filter('td'); una manera
        //cy.get('.table').find('tr > td'); otra manera de encontrar los elemtos dentro de un tr
        //cy.get('.table').find('tr').contains('Prashanth').parent().contains('Benefits').click();

        cy.get('.table').find('tr').as("rows");

        // cy.get("@rows").then(($row) =>{
        //     cy.wrap($row).click({multiple:true});
        // })

        //cy.wrap({name:'Karthik'}).should('have.property', 'name').and('eq','Karthik');

        //Using wrap
        cy.get('.table').find('tr > td').then(($td) =>{
            cy.wrap($td).contains("John").invoke("wrap").parent().contains("Benefits").click()
        })
    })
})