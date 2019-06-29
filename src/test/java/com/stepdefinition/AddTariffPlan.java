package com.stepdefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.objectrepository.AddTariffPage;
import com.objectrepository.CustomerIdDisplayPage;
import com.objectrepository.TelecomHomePage;
import com.resource.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTariffPlan extends BaseClass {
	
	TelecomHomePage home=new TelecomHomePage();
	AddTariffPage tariff=new AddTariffPage();
	CustomerIdDisplayPage id=new CustomerIdDisplayPage();
	
	
	static WebDriver driver;
	
	@Given("The User is in Telecom Page")
	public void the_User_is_in_Telecom_Page() {
		launch("http://demo.guru99.com/telecom/");
	}

	@Given("The user click on add tariff plan")
	public void the_user_click_on_add_tariff_plan() {
btn(home.getAddTariffButton());
}

	@When("the user fill all the details{string},{string},{string},{string},{string},{string},{string}")
	public void the_user_fill_all_the_details(String monthlyrental, String freelocal, String freeinternational, String freesms, String localcharge, String internationalcharges, String smscharges) {
		
		type(tariff.getMonthREntal(), monthlyrental);
		type(tariff.getFreeLocalMins(), freelocal);
		type(tariff.getFreeIntrMins(), freeinternational);
		type(tariff.getFreeSms(), freesms);
		type(tariff.getLocalChgs(), localcharge);
		type(tariff.getIntnChgs(),internationalcharges);
		type(tariff.getSmsChgs(), smscharges);
		
	    }
	
	@When("the user fill all details in list")
	public void the_user_fill_all_details_in_list(DataTable dataTable) {
		 List<String> CustomerdetailsList = dataTable.asList(String.class);
		 
		 type(tariff.getMonthREntal(), CustomerdetailsList.get(0));
			type(tariff.getFreeLocalMins(), CustomerdetailsList.get(1));
			type(tariff.getFreeIntrMins(), CustomerdetailsList.get(2));
			type(tariff.getFreeSms(), CustomerdetailsList.get(3));
			type(tariff.getLocalChgs(), CustomerdetailsList.get(4));
			type(tariff.getIntnChgs(), CustomerdetailsList.get(5));
			type(tariff.getSmsChgs(), CustomerdetailsList.get(6));	}

	@When("click on submit button")
	public void click_on_submit_button() {
		btn(tariff.getSubButton());
	}

	@Then("the user is displayed as congratulation you add tariff plan")
	public void the_user_is_displayed_as_congratulation_you_add_tariff_plan() {
	//	 Assert.assertTrue(driver.findElement(By.xpath("//h2[text()='Congratulation you add Tariff Plan']")).isDisplayed());
	Assert.assertTrue(id.getTariffAdded().isDisplayed());
	}




}
