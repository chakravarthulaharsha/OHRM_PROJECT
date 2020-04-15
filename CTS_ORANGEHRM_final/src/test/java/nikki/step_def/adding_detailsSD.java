package nikki.step_def;


import org.openqa.selenium.WebDriver;

import nikki.pages.adding_details;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class adding_detailsSD 
{
	WebDriver driver;
	adding_details page2=new adding_details();
	
	@Given("^user launch the chrome browser2$")
	public void user_launch_the_chrome_browser2() 
	{
		page2.LaunchUrl2("Chrome");//calling LaunchUrl method ;
	  
	}

	@When("^User open the orange hrm login page(\\d+)$")
	public void user_open_the_orange_hrm_login_page(int arg1) throws Throwable {
	  page2.Open();
		
	}
	@Then("^login with valid details(\\d+)$")
	public void login_with_valid_details(int arg1) throws Throwable {
		page2.login_details2(); 
	}

	@Then("^user is able to add the new user in the admin page$")
	public void user_is_able_to_add_the_new_user_in_the_admin_page()
	{
		page2.add_details();
	}

}
