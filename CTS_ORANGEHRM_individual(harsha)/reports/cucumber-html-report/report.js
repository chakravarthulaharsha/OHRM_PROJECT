$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("H:/eclipsejava/CTS_ORANGEHRM/src/test/resources/features/tEstcase.feature");
formatter.feature({
  "line": 2,
  "name": "orangeHrm website",
  "description": "",
  "id": "orangehrm-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_00_login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launched OrangeHRM website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 12,
      "id": "orangehrm-website;validate-the-login-functionality;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 13,
      "id": "orangehrm-website;validate-the-login-functionality;;2"
    },
    {
      "cells": [
        "admin",
        "Admin124"
      ],
      "line": 14,
      "id": "orangehrm-website;validate-the-login-functionality;;3"
    },
    {
      "cells": [
        "harsha",
        "admin123"
      ],
      "line": 15,
      "id": "orangehrm-website;validate-the-login-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_00_login"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launched OrangeHRM website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_LOGIN.i_launched_OrangeHRM_website()"
});
formatter.result({
  "duration": 8811921700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "DEF_LOGIN.i_enter_the_and(String,String)"
});
formatter.result({
  "duration": 1260582700,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_click_the_login_button()"
});
formatter.result({
  "duration": 4115483300,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_am_on_Home_page()"
});
formatter.result({
  "duration": 727113700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_00_login"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launched OrangeHRM website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the \"admin\" and \"Admin124\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_LOGIN.i_launched_OrangeHRM_website()"
});
formatter.result({
  "duration": 6111139400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "Admin124",
      "offset": 25
    }
  ],
  "location": "DEF_LOGIN.i_enter_the_and(String,String)"
});
formatter.result({
  "duration": 1057825500,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_click_the_login_button()"
});
formatter.result({
  "duration": 1466707600,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_am_on_Home_page()"
});
formatter.result({
  "duration": 723483000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validate the login functionality",
  "description": "",
  "id": "orangehrm-website;validate-the-login-functionality;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tc_00_login"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I launched OrangeHRM website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the \"harsha\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I am on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_LOGIN.i_launched_OrangeHRM_website()"
});
formatter.result({
  "duration": 6540358400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harsha",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "DEF_LOGIN.i_enter_the_and(String,String)"
});
formatter.result({
  "duration": 1117950800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_click_the_login_button()"
});
formatter.result({
  "duration": 1108950000,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_am_on_Home_page()"
});
formatter.result({
  "duration": 829401500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Logout",
  "description": "",
  "id": "orangehrm-website;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc_00_logout"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am logged in on the site",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click the Log out button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I go back to my login page",
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_LOGOUT.i_am_logged_in_on_the_site()"
});
formatter.result({
  "duration": 6142896400,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGOUT.i_click_the_Log_out_button()"
});
formatter.result({
  "duration": 5560056100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGOUT.i_go_back_to_my_login_page()"
});
formatter.result({
  "duration": 972826800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "ADD PIM Report",
  "description": "",
  "id": "orangehrm-website;add-pim-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tc_01_ADD_PIM_Report"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Logged in to the website using",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on PIM \"\u003cusername1\u003e\" and \"\u003cpassword1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Report",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on ADD report",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter the details of the report \"\u003creportname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click save",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I find Report Successfully added \"\u003creportname1\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "orangehrm-website;add-pim-report;",
  "rows": [
    {
      "cells": [
        "username1",
        "password1",
        "reportname",
        "reportname1"
      ],
      "line": 34,
      "id": "orangehrm-website;add-pim-report;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "PIM report",
        "PIM report"
      ],
      "line": 35,
      "id": "orangehrm-website;add-pim-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "ADD PIM Report",
  "description": "",
  "id": "orangehrm-website;add-pim-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tc_01_ADD_PIM_Report"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I Logged in to the website using",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on PIM \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Report",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on ADD report",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter the details of the report \"PIM report\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click save",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I find Report Successfully added \"PIM report\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_PIM.i_Logged_in_to_the_website_using()"
});
formatter.result({
  "duration": 6195291800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 16
    },
    {
      "val": "admin123",
      "offset": 28
    }
  ],
  "location": "DEF_PIM.i_click_on_PIM_and(String,String)"
});
formatter.result({
  "duration": 2537896600,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM.i_click_on_Report()"
});
formatter.result({
  "duration": 4357902000,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM.i_click_on_ADD_report()"
});
formatter.result({
  "duration": 1464249600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIM report",
      "offset": 35
    }
  ],
  "location": "DEF_PIM.i_enter_the_details_of_the_report(String)"
});
formatter.result({
  "duration": 641645000,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM.i_click_save()"
});
formatter.result({
  "duration": 1607216100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIM report",
      "offset": 34
    }
  ],
  "location": "DEF_PIM.i_find_Report_Successfully_added(String)"
});
formatter.result({
  "duration": 2885296600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "delete PIM Report",
  "description": "",
  "id": "orangehrm-website;delete-pim-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@tc_02_delete_PIM_Report"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I have Log in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I clicked on PIM  \"\u003cusername2\u003e\" and \"\u003cpassword2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I clicked on Report",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I select a project \"\u003creportname2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click delete button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I find report successfully deleted \"\u003cdelrpt\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "orangehrm-website;delete-pim-report;",
  "rows": [
    {
      "cells": [
        "username2",
        "password2",
        "reportname2",
        "delrpt"
      ],
      "line": 47,
      "id": "orangehrm-website;delete-pim-report;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "PIM report",
        "PIM report"
      ],
      "line": 48,
      "id": "orangehrm-website;delete-pim-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "delete PIM Report",
  "description": "",
  "id": "orangehrm-website;delete-pim-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 37,
      "name": "@tc_02_delete_PIM_Report"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I have Log in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I clicked on PIM  \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I clicked on Report",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I select a project \"PIM report\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I click delete button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I find report successfully deleted \"PIM report\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_PIM_DEL.i_have_Log_in_to_the_website()"
});
formatter.result({
  "duration": 7571394800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    },
    {
      "val": "admin123",
      "offset": 31
    }
  ],
  "location": "DEF_PIM_DEL.i_clicked_on_PIM_and(String,String)"
});
formatter.result({
  "duration": 2289961100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM_DEL.i_clicked_on_Report()"
});
formatter.result({
  "duration": 3065875600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIM report",
      "offset": 20
    }
  ],
  "location": "DEF_PIM_DEL.i_select_a_project(String)"
});
formatter.result({
  "duration": 938158200,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM_DEL.i_click_delete_button()"
});
formatter.result({
  "duration": 1683124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIM report",
      "offset": 36
    }
  ],
  "location": "DEF_PIM_DEL.i_find_report_successfully_deleted(String)"
});
formatter.result({
  "duration": 3019551900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Assign leave",
  "description": "",
  "id": "orangehrm-website;assign-leave",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@tc_03_Assign_Leave_and_Search_for_assigned_leave"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I have Log in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click on Leave \"\u003cusername3\u003e\" and \"\u003cpassword3\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I click on Assign Leave",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I enter the details \"\u003cEmployeename\u003e\" \"\u003cleavetype\u003e\" \"\u003cfromdate\u003e\" \"\u003cTodate\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click Save button",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I find the of employee leave in leave report \"\u003cEmployeename\u003e\" ,\"\u003cfromdate\u003e\", \"\u003cTodate\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "orangehrm-website;assign-leave;",
  "rows": [
    {
      "cells": [
        "username3",
        "password3",
        "Employeename",
        "leavetype",
        "fromdate",
        "Todate"
      ],
      "line": 60,
      "id": "orangehrm-website;assign-leave;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Linda Anderson",
        "Vacation US",
        "2020-04-15",
        "2020-04-15"
      ],
      "line": 61,
      "id": "orangehrm-website;assign-leave;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 61,
  "name": "Assign leave",
  "description": "",
  "id": "orangehrm-website;assign-leave;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 50,
      "name": "@tc_03_Assign_Leave_and_Search_for_assigned_leave"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 52,
  "name": "I have Log in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I click on Leave \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I click on Assign Leave",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I enter the details \"Linda Anderson\" \"Vacation US\" \"2020-04-15\" \"2020-04-15\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click Save button",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I find the of employee leave in leave report \"Linda Anderson\" ,\"2020-04-15\", \"2020-04-15\"",
  "matchedColumns": [
    2,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_PIM_DEL.i_have_Log_in_to_the_website()"
});
formatter.result({
  "duration": 5966946800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    },
    {
      "val": "admin123",
      "offset": 30
    }
  ],
  "location": "DEF_LEAVE.i_click_on_Leave_and(String,String)"
});
formatter.result({
  "duration": 2355881100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LEAVE.i_click_on_Assign_Leave()"
});
formatter.result({
  "duration": 3489683900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Linda Anderson",
      "offset": 21
    },
    {
      "val": "Vacation US",
      "offset": 38
    },
    {
      "val": "2020-04-15",
      "offset": 52
    },
    {
      "val": "2020-04-15",
      "offset": 65
    }
  ],
  "location": "DEF_LEAVE.i_enter_the_details(String,String,String,String)"
});
formatter.result({
  "duration": 1581031100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LEAVE.i_click_Save_button()"
});
formatter.result({
  "duration": 208874500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Linda Anderson",
      "offset": 46
    },
    {
      "val": "2020-04-15",
      "offset": 64
    },
    {
      "val": "2020-04-15",
      "offset": 78
    }
  ],
  "location": "DEF_LEAVE.i_find_the_of_employee_leave_in_leave_report(String,String,String)"
});
formatter.result({
  "duration": 4582894100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Edit organisation name",
  "description": "",
  "id": "orangehrm-website;edit-organisation-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@tc_04_Edit_organisation_name_and_verify_the_changes"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I have Log in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I clicked Admin \"\u003cusername4\u003e\" and \"\u003cpassword4\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I clicked organisation",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I clicked General Info",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I Clicked edit",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I change the organisation name \"\u003corganisationname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click save button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I find the organisation name successfully changed",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "orangehrm-website;edit-organisation-name;",
  "rows": [
    {
      "cells": [
        "username4",
        "password4",
        "organisationname"
      ],
      "line": 75,
      "id": "orangehrm-website;edit-organisation-name;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "Harsha Solutions"
      ],
      "line": 76,
      "id": "orangehrm-website;edit-organisation-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 76,
  "name": "Edit organisation name",
  "description": "",
  "id": "orangehrm-website;edit-organisation-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 63,
      "name": "@tc_04_Edit_organisation_name_and_verify_the_changes"
    },
    {
      "line": 1,
      "name": "@orangeHRM"
    }
  ]
});
formatter.step({
  "line": 65,
  "name": "I have Log in to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I clicked Admin \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I clicked organisation",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I clicked General Info",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I Clicked edit",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I change the organisation name \"Harsha Solutions\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click save button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I find the organisation name successfully changed",
  "keyword": "Then "
});
formatter.match({
  "location": "DEF_PIM_DEL.i_have_Log_in_to_the_website()"
});
formatter.result({
  "duration": 5774289800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 17
    },
    {
      "val": "admin123",
      "offset": 29
    }
  ],
  "location": "DEF_ADMIN.i_clicked_Admin_and(String,String)"
});
formatter.result({
  "duration": 6425725800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_clicked_organisation()"
});
formatter.result({
  "duration": 174752400,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_clicked_General_Info()"
});
formatter.result({
  "duration": 881720700,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_Clicked_edit()"
});
formatter.result({
  "duration": 156244200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harsha Solutions",
      "offset": 32
    }
  ],
  "location": "DEF_ADMIN.i_change_the_organisation_name(String)"
});
formatter.result({
  "duration": 371015600,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_click_save_button()"
});
formatter.result({
  "duration": 890402700,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_find_the_organisation_name_successfully_changed()"
});
formatter.result({
  "duration": 1349443800,
  "status": "passed"
});
});