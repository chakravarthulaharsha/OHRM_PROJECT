@orangeHRM
Feature: orangeHrm website

  @tc_00_login
  Scenario Outline: validate the login functionality
    Given I launched OrangeHRM website
    When I enter the "<username>" and "<password>"
    And I click the login button
    Then I am on Home page

    Examples: 
      | username | password |
      | Admin    | admin123 |
      | admin    | Admin124 |
      | harsha   | admin123 |

  @tc_00_logout
  Scenario: Logout
    Given I am logged in on the site
    When I click the Log out button
    Then I go back to my login page

  @tc_01_ADD_PIM_Report
  Scenario Outline: ADD PIM Report
    Given I Logged in to the website using
    Then I click on PIM "<username1>" and "<password1>"
    Then I click on Report
    When I click on ADD report
    And I enter the details of the report "<reportname>"
    And I click save
    Then I find Report Successfully added "<reportname1>"

    Examples: 
      | username1 | password1 | reportname | reportname1 |
      | Admin     | admin123  | PIM report | PIM report  |

  @tc_02_delete_PIM_Report
  Scenario Outline: delete PIM Report
    Given I have Log in to the website
    Then I clicked on PIM  "<username2>" and "<password2>"
    Then I clicked on Report
    When I select a project "<reportname2>"
    And I click delete button
    Then I find report successfully deleted "<delrpt>"

    Examples: 
      | username2 | password2 | reportname2 | delrpt     |
      | Admin     | admin123  | PIM report  | PIM report |

  @tc_03_Assign_Leave_and_Search_for_assigned_leave
  Scenario Outline: Assign leave
    Given I have Log in to the website
    Then I click on Leave "<username3>" and "<password3>"
    Then I click on Assign Leave
    Then I enter the details "<Employeename>" "<leavetype>" "<fromdate>" "<Todate>"
    When I click Save button
    Then I find the of employee leave in leave report "<Employeename>" ,"<fromdate>", "<Todate>"

    Examples: 
      | username3 | password3 | Employeename   | leavetype   | fromdate   | Todate     |
      | Admin     | admin123  | Linda Anderson | Vacation US | 2020-04-15 | 2020-04-15 |

  @tc_04_Edit_organisation_name_and_verify_the_changes
  Scenario Outline: Edit organisation name
    Given I have Log in to the website
    Then I clicked Admin "<username4>" and "<password4>"
    Then I clicked organisation
    Then I clicked General Info
    And I Clicked edit
    When I change the organisation name "<organisationname>"
    And I click save button
    Then I find the organisation name successfully changed

    Examples: 
      | username4 | password4 | organisationname |
      | Admin     | admin123  | Harsha Solutions |
