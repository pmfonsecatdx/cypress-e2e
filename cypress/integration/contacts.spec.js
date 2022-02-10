describe("Contacts page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Contacts");
  });
  it("should show the contacts page", () => {
    cy.get(".ant-page-header-heading-title").should("have.text", "Contacts");
  });

  it("Should submit the form", () => {
    cy.get("#username").type("Pedro Fonseca");
    cy.get("#email").type("Pedro.Fonseca@talkdesk.com");
    cy.get("#message").type("message");
    cy.get("#submit").click();
    cy.get(".ant-alert-warning .ant-alert-message").should(
      "have.text",
      "Sending message"
    );
    cy.get(".ant-alert-success .ant-alert-message").should(
      "have.text",
      "We got your message"
    );
  });
});
