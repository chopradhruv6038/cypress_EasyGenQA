  import { it } from "mocha";
import { BasePage } from "./POM/Base_Page"
  import { HomePage } from "./POM/Home_Page";
  import { PricingPage } from "./POM/Pricing_Page";



  const basepage = new BasePage();
  const homepage = new HomePage();
  const pricingpage = new PricingPage();



  describe('All Packages details validation', () => {

  beforeEach(()=>{

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false

  })

  it('fails to visit website EasyGen', function () {
    basepage.webUrl();

  })

  basepage.webUrl();
  cy.viewport(1280, 720)   // setting the viewport (width height) to get full screen
  basepage.waitToSync();

  })

  it('Pro package currency selected, name, monthly & annual pricing + trial link validation', ()=> {

  homepage.clickPricingLink();

  pricingpage.assertPricingPageUrl(); 
  pricingpage.assertEuroCurrencySelected();

  //pro package

  pricingpage.assertProPackageName();
  pricingpage.assertProPackageMonthlyPrice();
  pricingpage.assertProPackageAnnualPrice();
  pricingpage.assertPresenceOfTrialLinkProPackage();
 
  
  })

it('Team package currency selected, name, monthly & annual pricing + trial link validation', ()=> {


  homepage.clickPricingLink();

  pricingpage.assertPricingPageUrl(); 
  pricingpage.assertEuroCurrencySelected();

  //Team Package

  pricingpage.assertBestValueTextOnTeamPackage();
  pricingpage.assertTeamPackageName();
  pricingpage.assertTeamPackageMonthlyPrice();
  pricingpage.assertProPackageAnnualPrice();
  pricingpage.assertTeamPackageTrialLink();

})

it('Enterprice package currency selected, name, monthly & annual pricing + trial link validation', ()=> {

  homepage.clickPricingLink();

  pricingpage.assertPricingPageUrl(); 
  pricingpage.assertEuroCurrencySelected();

//Enterprise Package

pricingpage.assertEnterprisePackageName();
pricingpage.assertEnterprisePackageContactText();
pricingpage.assertEnterprisePackageContactLink();


})



  })