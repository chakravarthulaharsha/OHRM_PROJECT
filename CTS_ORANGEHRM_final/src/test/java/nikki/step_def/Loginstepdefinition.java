package nikki.step_def;

import nikki.pages.LoginFromExcelPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Loginstepdefinition 
{
	//creation of an object to call the methods present in LoginFromExcelPage
	LoginFromExcelPage a = new LoginFromExcelPage();
	@Given("^open the url in a browser$")
	public void open_the_url_in_a_browser()
	{
		a.LaunchUrl1("Chrome");//calling LaunchUrl method
	}
	@When("^enter the email id and password in the excel sheet to register click login and assert$")
	public void enter_the_email_id_and_password_in_the_excel_sheet_to_register_click_login_and_assert() throws Exception {
		
		/*for(int i=1;i<=2;i++) 
		{*/
			a.loginCredentials(1);
			a.clickLogin();
			/* if(i==1) */
			a.Assert();
			a.Screenshot1();
	}

}
