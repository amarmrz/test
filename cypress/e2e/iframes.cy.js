import "cypress-iframe";

describe('handle tabs', function()  {
    it.skip('approch1', ()=>  
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
   
       const iframe= cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);
       iframe.clear().type("welcome {cmd+a}")
       
       cy.get("button[title='Bold']").click()
    }
    )

    it.skip('using commands.js', ()=>  
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.getIframe("#mce_0_ifr").clear().type("welcome {cmd+a}")
        cy.get("button[title='Bold']").click()
    }
    )

    it('using iframe plugin', ()=>  
    {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr")
        cy.iframe("#mce_0_ifr").clear()
        cy.wait(3000)
        cy.iframe("#mce_0_ifr").type("welcome {cmd+a}")
        cy.wait(3000)
        cy.get("button[title='Bold']").click()
    }
    )
})