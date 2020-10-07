describe('egghead is working', () => {
  it('loads the homepage', () => {
    cy.visit('/')
    cy.contains('©egghead.io')
  })
  it('homepage contains nav', () => {
    cy.visit('/')
    cy.get('nav > ul > li').should(($li) => {
      // currently [Topics] [Search]
      expect($li).length.to.be.at.least(2)
    })
  })
})
