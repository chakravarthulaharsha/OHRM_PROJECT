$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/tEstcase.feature");
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
  "duration": 16954663800,
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
  "duration": 2818804200,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_click_the_login_button()"
});
formatter.result({
  "duration": 7906383100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_am_on_Home_page()"
});
formatter.result({
  "duration": 3287843300,
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
  "duration": 8373605500,
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
  "duration": 2224073800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_click_the_login_button()"
});
formatter.result({
  "duration": 2006541000,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_am_on_Home_page()"
});
formatter.result({
  "duration": 3404782500,
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
  "duration": 8528008200,
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
  "duration": 2390736800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_click_the_login_button()"
});
formatter.result({
  "duration": 2652956000,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGIN.i_am_on_Home_page()"
});
formatter.result({
  "duration": 3640949300,
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
  "duration": 7354271100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGOUT.i_click_the_Log_out_button()"
});
formatter.result({
  "duration": 8763691900,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LOGOUT.i_go_back_to_my_login_page()"
});
formatter.result({
  "duration": 3679705900,
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
  "duration": 7704030100,
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
  "duration": 9325745400,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM.i_click_on_Report()"
});
formatter.result({
  "duration": 1705090800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM.i_click_on_ADD_report()"
});
formatter.result({
  "duration": 2302389900,
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
  "duration": 1914819400,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM.i_click_save()"
});
formatter.result({
  "duration": 1953757200,
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
  "duration": 4743617700,
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
  "duration": 8078114500,
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
  "duration": 9424500400,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM_DEL.i_clicked_on_Report()"
});
formatter.result({
  "duration": 1378325400,
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
  "duration": 2781945400,
  "status": "passed"
});
formatter.match({
  "location": "DEF_PIM_DEL.i_click_delete_button()"
});
formatter.result({
  "duration": 2494404500,
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
  "duration": 5996987600,
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
  "duration": 9813991800,
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
  "duration": 4754981800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_LEAVE.i_click_on_Assign_Leave()"
});
formatter.result({
  "duration": 6458698100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.163)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027HARSHA-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.163, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\harsha\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:53278}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: af411df02ee8caa310de06c57beef6c6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor9.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat org.pages.OHRM_LEAVE.click_leave(OHRM_LEAVE.java:50)\r\n\tat org.step_def.DEF_LEAVE.i_click_on_Assign_Leave(DEF_LEAVE.java:27)\r\n\tat ✽.Then I click on Assign Leave(src/test/resources/features/tEstcase.feature:54)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "DEF_LEAVE.i_click_Save_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "duration": 8414340500,
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
  "duration": 10809623900,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_clicked_organisation()"
});
formatter.result({
  "duration": 378976300,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_clicked_General_Info()"
});
formatter.result({
  "duration": 1751371800,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_Clicked_edit()"
});
formatter.result({
  "duration": 387970100,
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
  "duration": 974791900,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_click_save_button()"
});
formatter.result({
  "duration": 1499946100,
  "status": "passed"
});
formatter.match({
  "location": "DEF_ADMIN.i_find_the_organisation_name_successfully_changed()"
});
formatter.result({
  "duration": 4770184900,
  "status": "passed"
});
});