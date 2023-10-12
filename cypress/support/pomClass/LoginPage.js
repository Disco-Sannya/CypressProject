export class LoginPage {

    usernameElement = 'input[placeholder="Username"]'
    passwordElement = 'input[placeholder="Password"]'
    loginBtnElement = 'button'

    enterUsername(username) {
        cy.get(this.usernameElement).type(username)
    }

    enterPassword(password) {
        cy.get(this.passwordElement).type(password)
    }

    clickOnLoginButton() {
        cy.get(this.loginBtnElement).click()
    }

}