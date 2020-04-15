package anil.pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class orangehrmlogin {
	WebDriver dr;
	@FindBy(id="txtUsername")
	WebElement uSername;
	@FindBy(id="txtPassword")
	WebElement pAssword;
	@FindBy(id="btnLogin")
	WebElement login_btn;	
	
	public orangehrmlogin(WebDriver dr) {
		this.dr=dr;
		PageFactory.initElements(dr, this);
	}
	
	public void login(String usname,String pwd) {
		uSername.sendKeys(usname);
		pAssword.sendKeys(pwd);
	}
	public void userclick() {
		login_btn.click();
	}
	public void close() {
		dr.close();
	}
}
