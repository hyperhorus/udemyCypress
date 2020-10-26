/// <reference types="cypress" />

describe("Testing EA App", () =>{
    
    it('Login operation', () =>{

        cy.visit("http://eaapp.somee.com/");
        
        //cy.contains("Login").click();
        cy.get("#loginLink").then(($link) => {
            const linkText = $link.text();
            expect(linkText).is.eql('Login');
        }).click();

        cy.url().should("include", "/Account/Login");

        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get('.btn').click({force:true});

        cy.contains('Employee List').click();

        //Table
        //cy.get('.table').find('tr').filter('td'); una manera
        //cy.get('.table').find('tr > td'); otra manera de encontrar los elemtos dentro de un tr
        cy.get('.table').find('tr > td').contains('Prashanth').parent().contains('Benefits').click();



    })
})