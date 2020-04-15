package anil.step_def;
import org.baseclass.lib_utility;
import org.seleniumutil.sel_util;

import anil.pages.Directory;
import anil.pages.orangehrmlogin;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Directorystep extends lib_utility{
		Directory page2;
		orangehrmlogin log;
		sel_util selutil;
		
		@Given("^i logged on to the OrangeHRM Home Page and navigate to the Directory Tab$")
		public void i_logged_on_to_the_OrangeHRM_Home_Page_and_navigate_to_the_Directory_Tab() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			launch_browser("chrome", "https://opensource-demo.orangehrmlive.com");
		}

		@When("^i  enterd into directory tab by clicked on it \"([^\"]*)\" and \"([^\"]*)\"$")
		public void i_enterd_into_directory_tab_by_clicked_on_it_and(String arg1, String arg2) throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			log=new orangehrmlogin(dr);
			log.login(arg1, arg2);
			log.userclick();
		}

		@Then("^search directory is displayed$")
		public void search_directory_is_displayed() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			page2=new Directory(dr);
			page2.DirectoryTab();
		}

		@Then("^directory tab is validated successfully$")
		public void directory_tab_is_validated_successfully() throws Throwable {
			// Write code here that turns the phrase above into concrete actions
			selutil=new sel_util(dr);
			selutil.takeSnapShot("src\\test\\resources\\anilScrnshoot\\directory.png");
			log=new orangehrmlogin(dr);
			log.close();
		}
	}



