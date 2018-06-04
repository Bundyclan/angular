import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/users');
  }

  getWelcomeText() {
    return element(by.css('app-users h3')).getText();
  }

  getAboutButton(){
    return element(by.css('[routerlink="/about"]'));
  }

  getAboutText(){
    return element(by.css('app-about h2')).getText();
  }

  getCreateButton(){
    return element(by.id('submitTodo'));
  }

  getTodosText(){
    return element(by.css('e2e-testing'));
  }

}
