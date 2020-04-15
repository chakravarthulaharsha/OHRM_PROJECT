package anil.step_def;

import org.baseclass.lib_utility;
import org.seleniumutil.sel_util;

import anil.pages.Directory;
import anil.pages.orangehrmlogin;
import anil.pages.validsearch;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class validsearchstep extends lib_utility{
	Directory page2;
	validsearch page3;
	orangehrmlogin log;
	sel_util selutil;
	
	@Given("^search directory is displayed inside the Directory Tab$")
	public void search_directory_is_displayed_inside_the_Directory_Tab() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
	}

	@When("^i entered values to validate search directory \"([^\"]*)\" and \"([^\"]*)\" ,\"([^\"]*)\"$")
	public void i_entered_values_to_validate_search_directory_and(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		log=new orangehrmlogin(dr);
		   log.login(arg1, arg2);
		   log.userclick();
		   page2=new Directory(dr);
		   page2.DirectoryTab();  
		   page3 = new validsearch(dr);
			page3.validSearchOperation(arg3);
	}

	@Then("^i clicked on the search button$")
	public void i_clicked_on_the_search_button() throws Throwable {
		page3 = new validsearch(dr);
		page3.searchButton();
	}

	@Then("^the result is dispalyed$")
	public void the_result_is_dispalyed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		selutil=new sel_util(dr);
		selutil.takeSnapShot("src\\test\\resources\\anilScrnshoot\\directorysearch.png");
		log=new orangehrmlogin(dr);
		log.close();
	}
}
