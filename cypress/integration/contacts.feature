Feature: Contacts page
    I want to contact the page admin

    Background:
        Given I open the "contacts" page

    Scenario: Should display the correct title
        Then I see "Contacts" in the page title

    Scenario: Should submit form when all fields are filled
        Given I type "Pedro Fonseca" in the "Name" field
        And I type "Frontend developer" in the "Job title" field
        And I type "910941032" in the "Phone number" field
        And I type "pedro.fonseca@talkdesk.com" in the "Email" field
        And I type "What kind of app is this!?!" in the "Message" field
        When I click on button "Submit"
        Then I see a "warning" message with text "Sending message"
        And I see a "success" message with text "We got your message"

    Scenario: Should not submit when form is empty
        When I click on button "Submit"
        Then I see a "error" message with text "Please fix the form errors before submitting"

    Scenario: Should not submit when name is empty - field error is displayed
        And I type "Frontend developer" in the "Job title" field
        And I type "910941032" in the "Phone number" field
        And I type "pedro.fonseca@talkdesk.com" in the "Email" field
        And I type "What kind of app is this!?!" in the "Message" field
        When I click on button "Submit"
        Then I see an error in the "Name" field with message "Please input your name"
        Then I see a "error" message with text "Please fix the form errors before submitting"

    Scenario: Should not submit when email is empty - field error is displayed
        And I type "Pedro Fonseca" in the "Name" field
        And I type "Frontend developer" in the "Job title" field
        And I type "910941032" in the "Phone number" field
        And I type "What kind of app is this!?!" in the "Message" field
        When I click on button "Submit"
        Then I see an error in the "Email" field with message "Please input a valid email address"
        Then I see a "error" message with text "Please fix the form errors before submitting"

    Scenario: Should not submit when email is invalid - field error is displayed
        And I type "Pedro Fonseca" in the "Name" field
        And I type "Frontend developer" in the "Job title" field
        And I type "910941032" in the "Phone number" field
        And I type "pedro.fonseca@talkdesk" in the "Email" field
        And I type "What kind of app is this!?!" in the "Message" field
        When I click on button "Submit"
        Then I see an error in the "Email" field with message "Please input a valid email address"
        Then I see a "error" message with text "Please fix the form errors before submitting"

    Scenario: Should submit form when fields are fixed
        And I type "Frontend developer" in the "Job title" field
        And I type "910941032" in the "Phone number" field
        When I click on button "Submit"
        Then I see an error in the "Email" field with message "Please input a valid email address"
        Then I see a "error" message with text "Please fix the form errors before submitting"
        Given I type "Pedro Fonseca" in the "Name" field
        And I type "pedro.fonseca@talkdesk.com" in the "Email" field
        And I type "What kind of app is this!?!" in the "Message" field
        When I click on button "Submit"
        Then I see a "warning" message with text "Sending message"
        And I see a "success" message with text "We got your message"