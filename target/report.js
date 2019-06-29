$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/93ksr/eclipse-workspace/Bala/Cucumber1/src/test/resources/Features/AddCustomer.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "The user is filling all the details",
  "rows": [
    {
      "cells": [
        "Bala",
        "Krishnan",
        "balakrishnan@gmail.com",
        "Chennai",
        "9874568521"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_filling_all_the_details(DataTable)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdefinition.AddCustomerSteps.the_user_is_filling_all_the_details(AddCustomerSteps.java:40)\r\n\tat ✽.The user is filling all the details(C:/Users/93ksr/eclipse-workspace/Bala/Cucumber1/src/test/resources/Features/AddCustomer.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_should_see_the_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is in telecom page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_in_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add customer",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "New",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Customer"
    },
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "The user is filling all details",
  "rows": [
    {
      "cells": [
        "fname",
        "Bala"
      ]
    },
    {
      "cells": [
        "lname",
        "Krishnan"
      ]
    },
    {
      "cells": [
        "email",
        "balakrishnan@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "Chennai"
      ]
    },
    {
      "cells": [
        "phoneno",
        "9874568521"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_is_filling_all_details(DataTable)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.stepdefinition.AddCustomerSteps.the_user_is_filling_all_details(AddCustomerSteps.java:49)\r\n\tat ✽.The user is filling all details(C:/Users/93ksr/eclipse-workspace/Bala/Cucumber1/src/test/resources/Features/AddCustomer.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user should see the customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomerSteps.the_user_should_see_the_customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("C:/Users/93ksr/eclipse-workspace/Bala/Cucumber1/src/test/resources/Features/AddTariff.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tariff"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Main",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tariffmain"
    }
  ]
});
formatter.step({
  "name": "The User is in Telecom Page",
  "keyword": "Given "
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.step({
  "name": "the user fill all the details\"\u003cmonthlyrental\u003e\",\"\u003cfreelocal\u003e\",\"\u003cfreeinternational\u003e\",\"\u003cfreesms\u003e\",\"\u003clocalcharge\u003e\",\"\u003cinternationalcharges\u003e\",\"\u003csmscharges\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "the user is displayed as congratulation you add tariff plan",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "monthlyrental",
        "freelocal",
        "freeinternational",
        "freesms",
        "localcharge",
        "internationalcharges",
        "smscharges"
      ]
    },
    {
      "cells": [
        "500",
        "1500",
        "100",
        "50",
        "2",
        "12",
        "1"
      ]
    },
    {
      "cells": [
        "401",
        "1250",
        "150",
        "100",
        "3",
        "15",
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Main",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tariff"
    },
    {
      "name": "@tariffmain"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User is in Telecom Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_User_is_in_Telecom_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_on_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill all the details\"500\",\"1500\",\"100\",\"50\",\"2\",\"12\",\"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_the_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is displayed as congratulation you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_displayed_as_congratulation_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Main",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tariff"
    },
    {
      "name": "@tariffmain"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User is in Telecom Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_User_is_in_Telecom_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_on_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill all the details\"401\",\"1250\",\"150\",\"100\",\"3\",\"15\",\"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_the_details(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is displayed as congratulation you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_displayed_as_congratulation_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Sub",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tariff"
    },
    {
      "name": "@subtariff"
    },
    {
      "name": "@tariffmain"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User is in Telecom Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AddTariffPlan.the_User_is_in_Telecom_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user click on add tariff plan",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.the_user_click_on_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user fill all details in list",
  "rows": [
    {
      "cells": [
        "601",
        "1750",
        "150",
        "60",
        "2",
        "12",
        "5"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddTariffPlan.the_user_fill_all_details_in_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddTariffPlan.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is displayed as congratulation you add tariff plan",
  "keyword": "Then "
});
formatter.match({
  "location": "AddTariffPlan.the_user_is_displayed_as_congratulation_you_add_tariff_plan()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});