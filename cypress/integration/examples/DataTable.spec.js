/// <reference types="cypress" />
describe('Visualisation Test for Login', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('#user_remember_me').click()
        cy.get('input.btn.btn-primary').click()  
    })

    it('Should load account activity', () => {
        cy.get('#account_activity_tab').click()
    })
    it('DataTable Snapshot', () => {
        cy.matchImageSnapshot()
    })
   
})