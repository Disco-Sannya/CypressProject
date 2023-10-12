export class LoginPage {

    usernameElement = 'input[placeholder="Username"]'
    passwordElement = 'input[placeholder="Password"]'
    loginBtnElement = 'button'
    forgetPasswordLinkElement = '.orangehrm-login-forgot > .oxd-text'

    enterUsername(username) {
        cy.get(this.usernameElement).type(username)
    }

    enterPassword(password) {
        cy.get(this.passwordElement).type(password)
    }

    clickOnLoginButton() {
        cy.get(this.loginBtnElement).click()
    }

    clickOnForgetPasswordLink() {
        cy.get(this.forgetPasswordLinkElement).click()
    }

}