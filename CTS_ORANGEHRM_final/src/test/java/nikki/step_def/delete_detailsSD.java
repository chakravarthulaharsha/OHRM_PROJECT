package nikki.step_def;

import org.openqa.selenium.WebDriver;

import nikki.pages.delete_details;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class delete_detailsSD
{
	WebDriver driver;
	delete_details page3=new delete_details();
	
	@Given("^user launch the chrome browser3$")
	public void user_launch_the_chrome_browser3() 
	{
		page3.LaunchUrl3("Chrome");//calling LaunchUrl method  
	  
	}
	
	@When("^user open the orange hrm login page(\\d+)$")
	public void user_open_the_orange_hrm_login_page(int arg1) throws Throwable {
	    
	page3.open(); 
		
	}
	@Then("^login with required details(\\d+)$")
	public void login_with_required_details(int arg1) throws Throwable {
		page3.login_details3()  ;  
	}

	@Then("^click on the delete button$")
	public void user_is_able_to_delet_the_admin_in_the_admin_page() 
	{
	  page3.delete_requirements() ;
		
	}

}
