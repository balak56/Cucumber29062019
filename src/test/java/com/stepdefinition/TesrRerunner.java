package com.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@C:\\Users\\93ksr\\eclipse-workspace\\Bala\\Cucumber1\\src\\test\\resources\\failed.txt",
							glue="com.stepdefinition",plugin= "html:target1")

public class TesrRerunner {

}
