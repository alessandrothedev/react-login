describe('App', () => {

    it('should get inputs values', () => {
       cy.get('#name').type('alex').should('have.value', 'alex')
    })

})