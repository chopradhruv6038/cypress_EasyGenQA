

    export class PricingPage{

    //Currency UI element or Locators on pricing page


    actualeuroCurrencySelector = '[for="first_toggle"]';
    expectedeuroCurrencySelector = 'EUR';

    //pro package UI definitions or Locators

    actualpropackageName = '.price-table > :nth-child(1) > .name';
    expectedpropackageName = 'Pro';
    actualproPackageMonthlyPrice = ':nth-child(1) > .price';
    expectedproPackageMonthlyPrice = '\n€\n96\n a month\n';
    actualProPackageAnnualPrice = ':nth-child(1) > .other-price';
    expectedProPackageAnnualPrice = 'billed € 1149 annually';
    trialLinkProPackage = '.price-table > :nth-child(1) > .link'

    //Team package UI definitions or Locators

    actualBestValueTextTeamPackage = '.abs-text'
    expectedBestValueTextTeamPackage = 'BEST VALUE'
    actualTeamPackageName = '.box.active > .name';
    expectedTeamPackageName = 'Team';
    actualTeamPackageMonthlyPrice = '.box.active > .price';
    expectedTeamPackageMonthlyPrice = '\n€\n479\na month\n';
    actualTeamPackageAnnualPrice = '.box.active > .other-price';
    expectedTeamPackageAnnualPrice = 'billed € 5745 annually';
    trialLinkTeamPackage = '.box.active > .link';
    trialLinkTeamExpectedText = '\nGet Free 14-Days Trial\n'


    //Enterprice Package UI definitions/locators


    actualEnterpricePackageName = '.price-table > :nth-child(3) > .name';
    expectedEnterpricePackageName = 'Enterprise';

    actualEnterpricePackageContactText = '.contacts';
    expectedEnterpricePackageContactText = 'Contact us';
    contactUsLinkEnterprisePackage = '.price-table > :nth-child(3) > .link';
    expectedTextOnContactUsLinkEnterprisePackage = '\nContact us\n';





//Url and currency selected assertion functions

    assertPricingPageUrl(){

    cy.url().should('contain', '/en/pricing/')

    }

    assertEuroCurrencySelected(){

    cy.get(this.actualeuroCurrencySelector).should('have.text', this.expectedeuroCurrencySelector);

    }

    //pro package functions

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

//Team package functions


assertBestValueTextOnTeamPackage(){

cy.get(this.actualBestValueTextTeamPackage).should('have.text', this.expectedBestValueTextTeamPackage);

}


   assertTeamPackageName(){

cy.get(this.actualTeamPackageName).should('have.text', this.expectedTeamPackageName);


   }

 assertTeamPackageMonthlyPrice(){

    cy.get(this.actualTeamPackageMonthlyPrice).should('have.text', this.expectedTeamPackageMonthlyPrice);


 }


 assertTeamPackageAnnualPrice(){

    cy.get(this.actualTeamPackageMonthlyPrice).should('have.text', this.expectedTeamPackageMonthlyPrice);


 }

assertTeamPackageTrialLink (){


cy.get(this.trialLinkTeamPackage).should('have.text',this.trialLinkTeamExpectedText)
.and('have.class', 'link active');


}



//Enterprice Package Functions


assertEnterprisePackageName(){

cy.get(this.actualEnterpricePackageName).should('have.text', this.expectedEnterpricePackageName);

}


assertEnterprisePackageContactText(){

cy.get(this.actualEnterpricePackageContactText).should('have.text', this.expectedEnterpricePackageContactText);

}

assertEnterprisePackageContactLink(){

cy.get(this.contactUsLinkEnterprisePackage).should('have.class', 'link')
.and('have.text', this.expectedTextOnContactUsLinkEnterprisePackage);

}


    }