///<reference types ="cypress"/>

beforeEach(function () {
    cy.visit('https://www.target.com/')

})
describe('LoginValidationTests', function () {
    it('LoginWithValidCredentials', function () {

        //cy.visit('https://www.target.com/')

        cy.get('.styles__LinkText-sc-u2k6h-3').click()
        cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-diphzn-1').scrollIntoView().should('be.visible')
            .click({ force: true })

        //entering valid credentials
        cy.get('#username').type('4084168922')
        cy.get('#password').type('CypressDemo1')
        cy.get('#login').click()

        //landing on customer's account page that shows customer name
        cy.contains('Hi, Raji')
            .should('be.visible')
            .and('have.text', 'Hi, Raji')

    })
    it('LoginWithInvalidUsername', function () {

        // cy.visit('https://www.target.com/')

        cy.get('.styles__LinkText-sc-u2k6h-3').click()
        cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-diphzn-1').scrollIntoView().should('be.visible')
            .click({ force: true })

        //entering invalid username
        cy.get('#username').type('4084168923')
        cy.get('#password').type('CypressDemo1')
        cy.get('#login').click()

        //assertions to verify if it lands on customer account page
        cy.contains('Hi, Raji')
            .should('be.visible')
            .and('have.text', 'Hi, Raji')

    })
    it('LoginWithInvalidPassword', function () {

        // cy.visit('https://www.target.com/')

        cy.get('.styles__LinkText-sc-u2k6h-3').click()
        cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-diphzn-1').scrollIntoView().should('be.visible')
            .click({ force: true })

        cy.get('#username').type('4084168922')

        //entering invalidpassword
        cy.get('#password').type('CypressDemo')
        cy.get('#login').click()

        //assertions to verify if it lands on customer account page
        cy.contains('Hi, Raji')
            .should('be.visible')
            .and('have.text', 'Hi, Raji')

    })
    it('LoginWithInvalidUsernameAndPassword', function () {

        // cy.visit('https://www.target.com/')

        cy.get('.styles__LinkText-sc-u2k6h-3').click()
        cy.get('[data-test="accountNav-signIn"] > .styles__ListItemText-sc-diphzn-1').scrollIntoView().should('be.visible')
            .click({ force: true })

        //entering invalid username and password
        cy.get('#username').type('4084168924')
        cy.get('#password').type('CypressDemo')
        cy.get('#login').click()

        //assertions to verify if it lands on customer account page
        cy.contains('Hi, Raji')
            .should('be.visible')
            .and('have.text', 'Hi, Raji')

    })


})
