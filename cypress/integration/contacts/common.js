const fieldSelectors = {
    "Name": '#username',
    "Job title": "#jobTitle",
    "Phone number": "#phone",
    "Email": "#email",
    "Message": "#message"
};

const buttonSelectors = {
    "Submit": "#submit"
}

const itemSelectors = {
    "Name": ".usernameItem",
    "Email": ".emailItem",
    "Message": ".messageItem"
}

Given(/^I open the "([^"]*)" page$/, (args1) => {
	cy.visit("http://localhost:3000/Contacts");
});

Then(/^I see "([^"]*)" in the page title$/, (title) => {
	cy.get(".ant-page-header-heading-title").should("have.text", title)
});


Given(/^I type "([^"]*)" in the "([^"]*)" field$/, (text, fieldName) => {
	cy.get(fieldSelectors[fieldName]).type(text);
});

When(/^I click on button "([^"]*)"$/, (button) => {
	cy.get(buttonSelectors[button]).click();
});

Then(/^I see a "([^"]*)" message with text "([^"]*)"$/, (type, message) => {
	cy.get(`.ant-alert-${type} .ant-alert-message`).should("have.text", message);
});


Then(/^I see an error in the "([^"]*)" field with message "([^"]*)"$/, (fieldName, message) => {
	cy.get(`${itemSelectors[fieldName]} div[role='alert']`).should("have.text", message);
});
