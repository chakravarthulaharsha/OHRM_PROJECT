package org.step_def;

import org.baseclass.lib_utility;
import org.pages.OHRM_LOGIN;
import org.seleniumutil.sel_util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DEF_LOGOUT extends lib_utility{
	OHRM_LOGIN login;
	sel_util selutil;
	@Given("^I am logged in on the site$")
	public void i_am_logged_in_on_the_site() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
	}

	@When("^I click the Log out button$")
	public void i_click_the_Log_out_button() throws Throwable {
		login =new OHRM_LOGIN(dr);
		login.enter_cred("Admin", "admin123");
		login.click_login();
		login.Logout();
	}

	@Then("^I go back to my login page$")
	public void i_go_back_to_my_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selutil=new sel_util(dr);
	    selutil.takeSnapShot("src\\test\\resources\\screenshots\\Logged_out.png");
	    login =new OHRM_LOGIN(dr);
	    login.close_driver();
	}
}
