
const AngularPageFactory = require(browser.params.FACTORY_DIR + '\\angular-page-factory');

const angularPageFactory = new AngularPageFactory();
const homePage = angularPageFactory.homePage();
const expect = utils.assert;

describe('Check input text field', () => {
  it('check name field on angular', () => {
    expect(homePage.enterName('Raghupro')).to.eventually.equal(true, 'Enter Input failed')
    .then(()=> {
      expect(homePage.getNameDisplay()).to.eventually.equal('Hello Raghupro!', 'Display Failed');
    });
  });

  it('Navigate to Free Course Link using NavBar', () => {
    browser.ignoreSynchronization = true;
    homePage.navBar.goTo('Learn', 'Free Course')
    .then(() => {
      expect(browser.getCurrentUrl()).to.eventually.equal('https://www.codeschool.com/pages/angularjs-vs-angular', 'Navigation to the correct URL failed');
    });
  });
});
