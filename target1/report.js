$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/93ksr/eclipse-workspace/Bala/Cucumber1/src/test/resources/Features/AddTariff.feature");
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
});