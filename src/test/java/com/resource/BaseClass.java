package com.resource;


import org.openqa.selenium.WebElement;


import com.stepdefinition.Hook;



public class BaseClass {
	
	
	
	public  void launch(String url) {
	 Hook.driver.get(url);

	}
	
	public void type(WebElement ele,String name) {
		
		ele.sendKeys(name);

	}
	
	public void btn(WebElement ele) {
		
		ele.click();

	}
	
	
}
