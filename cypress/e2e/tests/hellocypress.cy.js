describe('A test suite', () => { //A test suite

before(function () {
  cy.log("Runs once at beginning of suite")
});
after(function () {
  cy.log('Runs once at the end of the suite')
});
beforeEach(function () {
  cy.log('Runs before each test in suite')
});
afterEach(function () {
  cy.log('Runs at the end of every test in suite')
});

  it('is a test', () => { //A test. That is skipped. it.only() would be the reverse.
    cy.visit('https://google.com')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('adds and removes a cap', function() {
    /* ==== Generated with Cypress Studio ==== */
    //cy.pause();
    cy.origin('google.com',()=>{
      cy.visit('https://www.google.com/')
      
    })
    //debugger - useless as cy commands are async
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/');
    cy.get('.woocommerce-store-notice__dismiss-link').click();
    cy.get('#woocommerce-product-search-field-0').clear();
    cy.get('#woocommerce-product-search-field-0').type('{shift}cap{enter}{shift}');
    //cy.get(':nth-child(1) > .site-search > .widget > .woocommerce-product-search > button').click(); //Experimental recorder erroniously added this unnecessary line breaking the script
    cy.get('.single_add_to_cart_button')
    //  .debug() //Will invoke browser breakpoint at this part of the test
      .click();
    // const buttonText = cy.get('.woocommerce-message > .button').invoke('text')
    // cy.log("Button text is: " + buttonText)
    cy.get('.woocommerce-message > .button').click();
    cy.get('.remove').click();
    cy.contains('Return to shop').click();
    cy.log("Use this for logging")
    cy.get('#menu-item-42 > a').click().then(()=>{
      console.log("Test finished")
    });
    
    /* ==== End Cypress Studio ==== */
  });

  it('Chaining and scoping', function () {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/');
    cy.get('.woocommerce-store-notice__dismiss-link').click();
    cy.get('#woocommerce-product-search-field-0').clear().type('cap{enter}');
    //cy.get('#product-29 > div.summary.entry-summary').find('form > button').click();
    cy.get('#product-29 > div.summary.entry-summary').within(function(){
      cy.get('input[id^=quantity]').clear().type("2")
      //cy.get('form > button').click()
      //cy.contains('div > div',/Add to CART/i /*,{matchCase: false}*/).click()
      
    })

    // cy.get('form > button').eq(1).click();

  });

  it('Clicks the cart drop down', function () {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/');
    cy.get('#woocommerce-product-search-field-0').clear().type('cap{enter}');
    cy.contains('Add to cart').click()
    //cy.get('.cart-contents').trigger('mouseover')
    //Bring menu on screen
    cy.get('.widget_shopping_cart').invoke('css','left','0') //should bring menu onscreen
    cy.get('#site-header-cart > li:nth-child(2) > div > div > p.woocommerce-mini-cart__buttons.buttons > a:nth-child(1)').click()
    
  });

  it('does actions on stuff', function () {
    cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
    //cy.get('input[type=radio]').click({ multiple: true })
    cy.get('input[type=radio]').each((elm,index,jqueryhtmllist)=>{
      //elm.click()
      if(index!==1){ //Skip the second
        cy.wrap(elm).click()
      }
      
    })

    cy.get('input[type=radio]').check(['One','Two'])
    
    cy.get('#textInput').type("Hello world",{delay: 300})
    cy.get('#select').select(1)

  });

  it('Asserts on stuff', function () {
    cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
    cy.get('#textInput').type("Hello world")
    cy.get('#textInput').invoke('val').should('match',/Hello/)
    cy.title().should('equal','Forms')
    cy.get('h1').should('have.text','Forms')
    cy.get('h1').invoke('text').should('match',/Form/)
    //cy.get('h1').should('match',/Form/)

  });

  it.only('It checks the cart maths', function () {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/');
    cy.get('#woocommerce-product-search-field-0').clear().type('cap{enter}');
    cy.contains('Add to cart').click()
    cy.get('.woocommerce-message > .button').click()
    cy.get('.cart-subtotal > td').should('have.text','£16.00')
    cy.get('.order-total > td').should('have.text','£19.95 ')
    cy.get('.cart-subtotal > td').invoke('text').then(theSubtotal=>{
      cy.log('The captured text is:' + theSubtotal)
      expect(theSubtotal).to.equal('£17.00')
      cy.get('.order-total > td').invoke('text').then(theGrandTotal=>{
        cy.log('I now have both the subtotal and the grand total' + theSubtotal + " " + theGrandTotal)

      })
    })
    

  });
})
