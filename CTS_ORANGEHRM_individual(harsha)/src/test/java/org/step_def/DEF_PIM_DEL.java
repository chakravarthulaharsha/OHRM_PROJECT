package org.step_def;

import org.baseclass.lib_utility;
import org.pages.OHRM_LOGIN;
import org.pages.OHRM_PIM;
import org.seleniumutil.sel_util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DEF_PIM_DEL extends lib_utility{
	OHRM_LOGIN login;
	sel_util selutil;
	OHRM_PIM pim;
	@Given("^I have Log in to the website$")
	public void i_have_Log_in_to_the_website() throws Throwable {
		launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");	    
	}

	@Then("^I clicked on PIM  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_clicked_on_PIM_and(String arg1, String arg2) throws Throwable {
		login=new OHRM_LOGIN(dr);
		login.enter_cred(arg1 , arg2);
	    login.click_login();
	    System.out.println("Logged in");
	    pim =new OHRM_PIM(dr);
	    pim.click_pim(); 
	}

	@Then("^I clicked on Report$")
	public void i_clicked_on_Report() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		pim =new OHRM_PIM(dr);
		pim.clic_rpt();
		System.out.println("clicked rpt");
	}

	@When("^I select a project \"([^\"]*)\"$")
	public void i_select_a_project(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		pim =new OHRM_PIM(dr);
		pim.sEarch_del(arg1);
	}

	@When("^I click delete button$")
	public void i_click_delete_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		pim =new OHRM_PIM(dr);
		pim.delbtn();
	}

	@Then("^I find report successfully deleted \"([^\"]*)\"$")
	public void i_find_report_successfully_deleted(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		pim=new OHRM_PIM(dr);
		pim.search_and_verify2(arg1);
		login=new OHRM_LOGIN(dr);
		login.Logout();
		login.close_driver();
	}
}
