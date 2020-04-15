package org.step_def;

import org.baseclass.lib_utility;
import org.pages.OHRM_LEAVE;
import org.pages.OHRM_LOGIN;
import org.seleniumutil.sel_util;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DEF_LEAVE extends lib_utility{
	OHRM_LOGIN login;
	OHRM_LEAVE leave;
	sel_util selutil;
	@Then("^I click on Leave \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_click_on_Leave_and(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		login=new OHRM_LOGIN(dr);
		login.enter_cred(arg1 , arg2);
	    login.click_login();
	    System.out.println("Logged in");
	}

	@Then("^I click on Assign Leave$")
	public void i_click_on_Assign_Leave() throws Throwable {
	    leave=new OHRM_LEAVE(dr);
	    leave.click_leave();
	    
	}

	@Then("^I enter the details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"$")
	public void i_enter_the_details(String emp_nm, String lv_tp, String from, String tod) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 leave=new OHRM_LEAVE(dr);
		 leave.leave_details(emp_nm, lv_tp,from,tod);
	    
	}

	@When("^I click Save button$")
	public void i_click_Save_button() throws Throwable {
		leave=new OHRM_LEAVE(dr);
		leave.click_save();
	    
	}

	@Then("^I find the of employee leave in leave report \"([^\"]*)\" ,\"([^\"]*)\", \"([^\"]*)\"$")
	public void i_find_the_of_employee_leave_in_leave_report(String arg1, String arg2, String arg3) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
		selutil=new sel_util(dr);
		leave=new OHRM_LEAVE(dr);
		leave.leave_in_rpt(arg1, arg2, arg3);
		selutil.takeSnapShot("src\\test\\resources\\screenshots\\leave_report.png");
		login=new OHRM_LOGIN(dr);
		login.close_driver();
	}


}
