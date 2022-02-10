const fieldNames = {
  Name: "#username",
  "Job title": "#jobTitle",
  "Phone number": "#phone",
  Email: "#email",
  Message: "#message",
  Submit: "#submit",
};

Given(/^I open the "([^"]*)" page$/, (args1) => {
  cy.visit("http://localhost:3000/Contacts");
});

Then(/^I see "([^"]*)" in the page title$/, (title) => {
  cy.get(".ant-page-header-heading-title").should("have.text", title);
});

Given(/^I type "([^"]*)" in the "([^"]*)" field$/, (text, fieldName) => {
  cy.get(fieldNames[fieldName]).type(text);
});

When(/^I click on button "([^"]*)"$/, (fieldName) => {
  cy.get(fieldNames[fieldName]).click();
});

Then(/^I see a "([^"]*)" message with text "([^"]*)"$/, (type, text) => {
  cy.get(`.ant-alert-${type} .ant-alert-message`).should("have.text", text);
});

Then(
  /^I see an error in the "([^"]*)" field with message "([^"]*)"$/,
  (args1, args2) => {
    cy.get(`.ant-alert-${type} .ant-alert-message`).should("have.text", text);
  }
);
