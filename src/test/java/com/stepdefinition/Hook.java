package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hook {
     public static WebDriver driver;
	
	@Before
	public void beforeBackground() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\93ksr\\eclipse-workspace\\Bala\\Selenium\\driver\\chromedriver1.exe");
		 driver=new ChromeDriver();
		

	}
	
	@After
	public void afterScenario() {
		
		driver.quit();

	}
}
