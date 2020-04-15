
@orangehrm
Feature: OrangeHRM Website

@tc_01
Scenario: Log in to OrangeHRM with valid Credentials

Given open the url in a browser
When enter the email id and password in the excel sheet to register click login and assert

@tc_02
Scenario: adding user details in admin page

Given  user launch the chrome browser2
When  User open the orange hrm login page2
Then login with valid details1
Then user is able to add the new user in the admin page

@tc_03
Scenario: delete user details in admin page

Given user launch the chrome browser3
When  user open the orange hrm login page3
Then login with required details2
Then click on the delete button

@tc_04
Scenario: about orange HRM

Given user launch the chrome browser4
When login with valid details
Then user is able to know about orange hrm application
Then take the screenshot of about page 