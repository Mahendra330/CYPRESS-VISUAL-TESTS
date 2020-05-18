/// <reference types="cypress" />
const pages=['http://example.com/']
const sizes=['iphone-6','ipad-2',[1200,800]]
describe('Whole Web page screenshot Test', () => {
        sizes.forEach(size =>{
            pages.forEach(page =>{
                it('should match ${page} in Resolution ${size}', () => {
                    //Override Time for all Visualisation Testing is must
                    let currentTime= new Date(Date.UTC(2020,5,17)).getDate()
                    cy.clock(currentTime)
                    cy.setResolution(size)
                    cy.visit(page)
                    cy.matchImageSnapshot()
            })
        })
    })
})

describe('Single Element Snapshot Test', () => {
  
            it('should match single element on the page', () => {
                cy.visit('http://example.com/')
                cy.get('h1').matchImageSnapshot()
        })
    })