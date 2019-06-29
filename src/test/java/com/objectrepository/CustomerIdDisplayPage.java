package com.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.resource.BaseClass;
import com.stepdefinition.Hook;

public class CustomerIdDisplayPage extends BaseClass {
	
	public CustomerIdDisplayPage() {
	PageFactory.initElements(Hook.driver, this);
	}

	@FindBy(xpath="(//td[@align='center'])[2]")
	private WebElement custIdPage;
	
	@FindBy(xpath="//h2[text()='Congratulation you add Tariff Plan']")
	private WebElement tariffAdded;

	public WebElement getTariffAdded() {
		return tariffAdded;
	}

	public WebElement getCustIdPage() {
		return custIdPage;
	} 
}
