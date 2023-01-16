export class HomePage{

pricingLink = '#menu-item-97387 > a';

clickPricingLink(){


cy.get(this.pricingLink).click();


}
}