export class ResetPassword{

    resetUsernameElement = 'input[placeholder="Username"]'
    cancelBtnElement = 'button:nth-child(1)'
    resetBtnElement = 'button:nth-child(2)'

    enterResetUsername(resetUsername) {
        cy.get(this.resetUsernameElement).type(resetUsername)
    }

    clickOnResetBtn() {
        cy.get(this.resetBtnElement).click()
    }

    clickOnCancelBtn() {
        cy.get(this.cancelBtnElement).click()
    }

}