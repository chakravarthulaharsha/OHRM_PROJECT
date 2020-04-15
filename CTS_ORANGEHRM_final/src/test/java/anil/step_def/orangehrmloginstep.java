package  anil.step_def;

import org.baseclass.lib_utility;
import org.seleniumutil.sel_util;
import anil.pages.orangehrmlogin;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class orangehrmloginstep extends lib_utility {
	orangehrmlogin log;
	sel_util selutil;
	
	@Given("^I launched the browser$")
	public void i_launched_the_browser() throws Throwable {
		launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
	}

	@When("^I enters the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enters_the_and(String arg1, String arg2) throws Throwable {
	   log=new orangehrmlogin(dr);
	   log.login(arg1, arg2);
	
	}

	@When("^I click login$")
	public void i_click_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		log=new orangehrmlogin(dr);
		log.userclick();
	}

	@Then("^I am on the homePage$")
	public void i_am_on_the_homePage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selutil=new sel_util(dr);
		selutil.takeSnapShot("src\\test\\resources\\anilScrnshoot\\loggedin.png");
		log=new orangehrmlogin(dr);
		log.close();
	}
}	
