package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\93ksr\\eclipse-workspace\\Bala\\Cucumber1\\src\\test\\resources\\Features",
							glue="com.stepdefinition",plugin= {"html:target","json:src/test/resources/report.json",
							"rerun:src/test/resources/failed.txt"},
							dryRun=false)

public class TestRunner {

}
