@orangeHRM
Feature: orangehrm website

  @tc_00_login
  Scenario Outline: validate the login
  Given I launched the browser
  When I enters the "<email>" and "<pass>"
  And I click login
  Then I am on the homePage
  
  Examples:
  | email | pass     |
  | Admin | admin123 |
  | admin | Admin124 |
  | anil  | admin123 |
  
  @tc_02_functionality_of_directory_tab
  Scenario Outline: validating the click functionality of Directory tab
  Given i logged on to the OrangeHRM Home Page and navigate to the Directory Tab
  When i  enterd into directory tab by clicked on it "<email1>" and "<pass1>"
  Then search directory is displayed
  And directory tab is validated successfully
  
  Examples:
  | email1 | pass1    |
  | Admin  | admin123 |
  @tc_03_validate_search_in_directory_tab
  Scenario Outline: validating the search functionality in directory tab
  Given search directory is displayed inside the Directory Tab
  When i entered values to validate search directory "<email2>" and "<pass2>" ,"<emp_name>"
  Then i clicked on the search button
  And the result is dispalyed
  
  Examples:
  | email2 | pass2    | emp_name       |
  | Admin  | admin123 | Linda Anderson |
  
  @tc_04_requesting_addons_in_marketplace
  Scenario Outline: requesting addons to the marketplace
    Given i logged on to the OrangeHRM Home Page and navigate to the marketplace Tab
    When orangehrm addons tab is displayed with multiple addons "<email3>" and "<pass3>"
    Then then i clicked on the request button for adding ldpa
    And enter the data to be added on addons
    Then click on ok

    Examples: 
      | email3 | pass3    |
      | Admin  | admin123 |
