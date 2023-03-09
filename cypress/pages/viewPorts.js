export class ViewPorts {
  storefrontTitle='[class="header-text"]>h2'
  visit() {
    cy.visit('/')
    cy.title().should('include','Storefront')
    cy.url().should('include','storefront')
    cy.get(this.storefrontTitle).should('be.visible').and('have.text','Storefront')
  }


  }
  
  
     
  
  
  
  

  