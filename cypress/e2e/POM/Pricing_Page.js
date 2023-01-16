    export class PricingPage{


    actualeuroCurrencySelector = '[for="first_toggle"]';
    expectedeuroCurrencySelector = 'EUR';
    actualpropackageName = '.price-table > :nth-child(1) > .name';
    expectedpropackageName = 'Pro';
    actualproPackageMonthlyPrice = ':nth-child(1) > .price';
    expectedproPackageMonthlyPrice = '\n€\n96\n a month\n';
    actualProPackageAnnualPrice = ':nth-child(1) > .other-price';
    expectedProPackageAnnualPrice = 'billed € 1149 annually';
    trialLinkProPackage = '.price-table > :nth-child(1) > .link'




    assertPricingPageUrl(){

    cy.url().should('contain', '/en/pricing/')

    }

    assertEuroCurrencySelected(){

    cy.get(this.actualeuroCurrencySelector).should('have.text', this.expectedeuroCurrencySelector);

    }


    assertProPackageName(){

    cy.get(this.actualpropackageName).should('have.text', this.expectedpropackageName);

    }

    assertProPackageMonthlyPrice(){


    cy.get(this.actualproPackageMonthlyPrice).should('have.text', this.expectedproPackageMonthlyPrice);


    }

    assertProPackageAnnualPrice(){

    cy.get(this.actualProPackageAnnualPrice).should('have.text', this.expectedProPackageAnnualPrice);


    }

    assertPresenceOfTrialLinkProPackage(){

    cy.get(this.trialLinkProPackage).should('be.visible')
    .and('have.class', 'link')

    }

    }