package org.step_def;

import org.baseclass.lib_utility;
import org.pages.OHRM_LOGIN;
import org.seleniumutil.sel_util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DEF_LOGIN extends lib_utility {
	OHRM_LOGIN login;
	sel_util selutil;
	
	@Given("^I launched OrangeHRM website$")
	public void i_launched_OrangeHRM_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
	}

	@When("^I enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_the_and(String username, String pswd) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		login=new OHRM_LOGIN(dr);
	    login.enter_cred(username, pswd);
		selutil=new sel_util(dr);
	    selutil.takeSnapShot("src\\test\\resources\\screenshots\\LoginPage.png");
	}

	@When("^I click the login button$")
	public void i_click_the_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		login=new OHRM_LOGIN(dr);
	    login.click_login();
	}

	@Then("^I am on Home page$")
	public void i_am_on_Home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selutil=new sel_util(dr);
	    selutil.takeSnapShot("src\\test\\resources\\screenshots\\Logged_in.png");
	    login=new OHRM_LOGIN(dr);
	    login.close_driver();
	}
}
