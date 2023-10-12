///<reference types = "cypress"/>

import { LoginPage } from "../support/pomClass/LoginPage"

const loginObj = new LoginPage()

beforeEach(function () {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

describe('Login to application', () => {

  it('Login with Valid Credentials', () => {
    loginObj.enterUsername('Admin')
    loginObj.enterPassword('admin123')
    loginObj.clickOnLoginButton()
  })

  it('Login with Invalid Credentials', () => {
    loginObj.enterUsername('Admin123')
    loginObj.enterPassword('admin')
    loginObj.clickOnLoginButton()
  })

})