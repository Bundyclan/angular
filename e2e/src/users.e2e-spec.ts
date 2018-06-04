import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('Holiday Navigation', () => {
    let page: AppPage;
  
    beforeEach(() => {
      page = new AppPage();
    });
  
    it('should display users page', () => {
      browser.waitForAngularEnabled(false);
      page.navigateTo();
      //browser.pause(4201);
    
      expect(page.getWelcomeText()).toEqual('Todos App');

    });

    it('should display Create button', () => {
        browser.waitForAngularEnabled(false);
        page.navigateTo();
        expect(page.getCreateButton().getText()).toEqual('Create');

        // element(by.id("description")).sendKeys("asd");
        // element(by.id("responsible")).sendKeys("asd");

    })


    it('should fill in the users form', () => {
        browser.waitForAngularEnabled(false);
        page.navigateTo();
        element(by.id("description")).sendKeys("asd");
        element(by.id("responsible")).sendKeys("asd 2");
        page.getCreateButton().click();
        
        expect(page.getTodosText()).toEqual('#');
        

    })
  
    // it('should display about button', ()=> {
    //   page.navigateTo();
    //   expect(page.getAboutButton().getText()).toEqual('About');
    // })
  
    // it('should route to about page', ()=> {
    //   page.navigateTo();
    //   page.getAboutButton().click();
    //   expect(page.getAboutText()).toEqual('About Page');

    // })
  
  
  });