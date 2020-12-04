context("Contacts page", () => {
    beforeEach(() => cy.visit("http://localhost:3000/Contacts"))
    it('Should have "Contacts" title', () => {
        cy.get(".ant-page-header-heading-title").should("have.text", "Contacts")
    });
    it('Should submit form when required fields are filled', () => {
        cy.get('#username').type("Pedro Fonseca");
        cy.get('#email').type("Pedro.fonseca@talkdesk.com");
        cy.get("#message").type("hello");
        cy.get("#submit").click();
        cy.get(".ant-alert-warning .ant-alert-message").should("have.text", "Sending message");
        cy.get(".ant-alert-success .ant-alert-message").should("have.text", "We got your message");
    });
    it.only('Should show error on invalid email', () => {
        cy.get('#username').type("Pedro Fonseca");
        cy.get('#email').type("Pedro.fonseca@talkdesk");
        cy.get("#message").type("hello");
        cy.get("#submit").click();
        cy.get(".ant-alert-error .ant-alert-message").should("have.text", "Please fix the form errors before submitting");
    })
})