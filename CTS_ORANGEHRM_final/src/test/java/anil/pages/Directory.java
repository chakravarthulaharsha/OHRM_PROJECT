package anil.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Directory {
	WebElement textbox;
	WebDriver dr;
	By username = By.id("txtUsername");
	By password = By.id("txtPassword");
	By login = By.id("btnLogin");
	By DirectoryTab = By.id("menu_directory_viewDirectory");
    By MarketplaceTab = By.id("MP_link");
    
    public Directory(WebDriver dr) {
		this.dr=dr;
	}
 
	public void DirectoryTab() {
		dr.findElement(DirectoryTab).click();
	}
	public void close() {
		dr.close();
	}
}



