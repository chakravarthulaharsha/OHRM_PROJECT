package org.step_def;

import org.baseclass.lib_utility;
import org.pages.OHRM_ADMIN;
import org.pages.OHRM_LEAVE;
import org.pages.OHRM_LOGIN;
import org.seleniumutil.sel_util;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DEF_ADMIN extends lib_utility{

	OHRM_LOGIN login;
	OHRM_LEAVE leave;
	sel_util selutil;
	OHRM_ADMIN adm;
	@Then("^I clicked Admin \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_clicked_Admin_and(String arg1, String arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	login=new OHRM_LOGIN(dr);
	login.enter_cred(arg1 , arg2);
    login.click_login();
    System.out.println("Logged in");
    adm=new OHRM_ADMIN(dr);
    adm.click_admin();
    
}

@Then("^I clicked organisation$")
public void i_clicked_organisation() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	adm=new OHRM_ADMIN(dr);
    adm.clic_orgbtn();
}

@Then("^I clicked General Info$")
public void i_clicked_General_Info() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	adm=new OHRM_ADMIN(dr);
    adm.clic_generalinfo();
}

@Then("^I Clicked edit$")
public void i_Clicked_edit() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	adm=new OHRM_ADMIN(dr);
    adm.clic_editbtn();
}

@When("^I change the organisation name \"([^\"]*)\"$")
public void i_change_the_organisation_name(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	adm=new OHRM_ADMIN(dr);
    adm.change_orgnm(arg1);
}

@When("^I click save button$")
public void i_click_save_button() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	adm=new OHRM_ADMIN(dr);
    adm.click_savebtn();
}

@Then("^I find the organisation name successfully changed$")
public void i_find_the_organisation_name_successfully_changed() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	adm=new OHRM_ADMIN(dr);
    adm.verify_btn();
    selutil=new sel_util(dr);
    selutil.takeSnapShot("src\\test\\resources\\screenshots\\organisation.png");
    login=new OHRM_LOGIN(dr);
    login.close_driver();
}
}
