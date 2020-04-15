package anil.step_def;

import org.baseclass.lib_utility;
import org.seleniumutil.sel_util;

import anil.pages.Marketplace;
import anil.pages.orangehrmlogin;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Marketplacestep extends lib_utility{
Marketplace page4;
orangehrmlogin log;
sel_util selutil;

@Given("^i logged on to the OrangeHRM Home Page and navigate to the marketplace Tab$")
public void i_logged_on_to_the_OrangeHRM_Home_Page_and_navigate_to_the_marketplace_Tab() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
}

@When("^orangehrm addons tab is displayed with multiple addons \"([^\"]*)\" and \"([^\"]*)\"$")
public void orangehrm_addons_tab_is_displayed_with_multiple_addons_and(String arg1, String arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	log=new orangehrmlogin(dr);
	log.login(arg1, arg2);
	log.userclick();
}

@Then("^then i clicked on the request button for adding ldpa$")
public void then_i_clicked_on_the_request_button_for_adding_ldpa() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	page4 = new Marketplace(dr);
	page4.MarketplaceTab();
	page4.request_Addons();
}

@Then("^enter the data to be added on addons$")
public void enter_the_data_to_be_added_on_addons() throws Throwable {
	page4 = new Marketplace(dr);
	page4.enter_data();
    
}

@Then("^click on ok$")
public void click_on_ok() throws Throwable {
	log=new orangehrmlogin(dr);
	selutil=new sel_util(dr);
	selutil.takeSnapShot("src\\test\\resources\\anilScrnshoot\\Marketplace.png");
	log.close();
}
}
