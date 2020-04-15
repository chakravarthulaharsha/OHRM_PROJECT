package org.step_def;

import org.baseclass.lib_utility;
import org.pages.OHRM_LOGIN;
import org.pages.OHRM_PIM;
import org.seleniumutil.sel_util;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DEF_PIM extends lib_utility{
	OHRM_LOGIN login;
	sel_util selutil;
	OHRM_PIM pim;
	@Given("^I Logged in to the website using$")
	public void i_Logged_in_to_the_website_using() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
	}

	@Then("^I click on PIM \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_click_on_PIM_and(String arg1, String arg2) throws Throwable {
		login=new OHRM_LOGIN(dr);
		login.enter_cred(arg1 , arg2);
	    login.click_login();
	    System.out.println("Logged in");
	    pim =new OHRM_PIM(dr);
	    pim.click_pim();
		 System.out.println("print 1");
	}

	@Then("^I click on Report$")
	public void i_click_on_Report() throws Throwable {
		pim =new OHRM_PIM(dr);
		pim.clic_rpt();
		System.out.println("clicked rpt");
	}

	@When("^I click on ADD report$")
	public void i_click_on_ADD_report() throws Throwable {
		pim =new OHRM_PIM(dr);
		pim.Add_report();
		System.out.println("Add rpt");
	}

	@When("^I enter the details of the report \"([^\"]*)\"$")
	public void i_enter_the_details_of_the_report(String reporname) throws Throwable {
		pim =new OHRM_PIM(dr);
		pim.detls_rpts(reporname);
	    System.out.println("added details"+reporname);
	}

	@When("^I click save$")
	public void i_click_save() throws Throwable {
		pim =new OHRM_PIM(dr);
		pim.click_savebtn();
	   System.out.println("print 5");
	}

	@Then("^I find Report Successfully added \"([^\"]*)\"$")
	public void i_find_Report_Successfully_added(String rpt) throws Throwable {
		login=new OHRM_LOGIN(dr);
		pim =new OHRM_PIM(dr);
		String act_id = pim.search_andverify(rpt);
		System.out.println("done"+" "+act_id);
		login.Logout();
		login.close_driver();
	}
}
