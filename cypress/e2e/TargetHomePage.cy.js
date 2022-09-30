///reference types ="cypress"/>

it('Target HomePage', function () {

    cy.visit('https://www.target.com/')

    //using the search bar to look up a category
    cy.get('[data-test="@web/Search/SearchInput"]').type('shoes women').type('{enter}')
    cy.contains('Pumps').click()
    cy.wait(3000)

    //clicking on specific product to find the price and details
    cy.contains('Sonora Heels - A New Day').click()

    //implicit assertion
    cy.get('[data-test="product-price"]')
        .should('be.visible')
        .and('have.text', '$24.99')

})
