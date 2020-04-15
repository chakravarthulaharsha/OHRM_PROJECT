package org.pages;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OHRM_LOGIN {
	public WebDriver dr;
	@FindBy(id="txtUsername")
	WebElement uSername;
	@FindBy(id="txtPassword")
	WebElement pAssword;
	@FindBy(id="btnLogin")
	WebElement login_btn;
	@FindBy(id="welcome")
	WebElement admin_btn;
	@FindBy(xpath="//*[@id=\"welcome-menu\"]/ul/li[2]/a")
	WebElement logout_btn;
	Logger log= Logger.getLogger("devpinoyLogger");
	
	public OHRM_LOGIN(WebDriver dr) {
		this.dr=dr;
		PageFactory.initElements(dr, this);
	}
	public void enter_cred(String usernm,String pwd) {
		uSername.sendKeys(usernm);
		pAssword.sendKeys(pwd);
	}
	public void click_login() {
		login_btn.click();
		log.debug("successfully logged into pc");
	}
	public void Logout() {
		admin_btn.click();
		dr.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		logout_btn.click();
		log.debug("successfully logged out of pc");
	}
	public void close_driver() {
		log.debug("successfully closed browser");
		dr.close();
	}
}
