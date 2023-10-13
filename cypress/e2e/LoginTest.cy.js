///<reference types = "cypress"/>

import { LoginPage } from "../support/pomClass/LoginPage"
import { ResetPassword } from "../support/pomClass/ResetPassword"

const loginObj = new LoginPage()
const resetObj = new ResetPassword()

beforeEach(function () {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

//Login Application
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


//Reset Password
describe('Reset Password Test', () => {

  it('Enter Mail and Reset', () => {
    loginObj.clickOnForgetPasswordLink()
    resetObj.enterResetUsername('admin@test.com')
    resetObj.clickOnResetBtn()
  })

  it('Enter Mail and Cancel Button', () => {
    loginObj.clickOnForgetPasswordLink()
    resetObj.enterResetUsername('admin@test.com')
    resetObj.clickOnCancelBtn()
  })

})