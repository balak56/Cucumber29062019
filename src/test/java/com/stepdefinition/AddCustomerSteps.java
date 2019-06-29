package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.objectrepository.AddCustomerPage;
import com.objectrepository.TelecomHomePage;
import com.resource.BaseClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddCustomerSteps extends BaseClass {

		
		TelecomHomePage home=new TelecomHomePage();
		AddCustomerPage cust=new AddCustomerPage();
		
		static WebDriver driver;
		@Given("The user is in telecom page")
		public void the_user_is_in_telecom_page() {
			
			launch("http://demo.guru99.com/telecom/");
		}

		@Given("The user click on add customer")
		public void the_user_click_on_add_customer() {
			btn(home.getAddCustButton());
		}
		@When("The user is filling all the details")
		public void the_user_is_filling_all_the_details(DataTable dataTable) {
		    List<String> CustomerdetailsList = dataTable.asList(String.class);
		   btn(cust.getRadioButton());
		   type(cust.getFirstName(), CustomerdetailsList.get(0));
		   type(cust.getLastName(), CustomerdetailsList.get(1));
		   type(cust.getEmail(), CustomerdetailsList.get(2));
		   type(cust.getAddress(), CustomerdetailsList.get(3));
		   type(cust.getPhno(), CustomerdetailsList.get(4));
		
		}	
	@When("The user is filling all details")
		public void the_user_is_filling_all_details(DataTable dtable) {
			Map<String, String> CustomerdetailsMap = dtable.asMap(String.class, String.class);
			type(cust.getFirstName(), CustomerdetailsMap.get("fname"));
			type(cust.getLastName(), CustomerdetailsMap.get("lname"));
			type(cust.getEmail(), CustomerdetailsMap.get("email"));
			type(cust.getAddress(), CustomerdetailsMap.get("address"));
			type(cust.getPhno(), CustomerdetailsMap.get("phoneno"));
			
		}



		@When("The user click on submit button")
		public void the_user_click_on_submit_button() {
			btn(cust.getButton());
}

		@Then("The user should see the customer id")
		public void the_user_should_see_the_customer_id() {
			Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		}
	

}
