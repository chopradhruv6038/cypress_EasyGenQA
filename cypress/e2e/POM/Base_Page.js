

export class BasePage{

LoadUrl = 'https://www.easygenerator.com';


webUrl() {


cy.visit(this.LoadUrl);


}


waitToSync(){

cy.wait(1000);

}



}