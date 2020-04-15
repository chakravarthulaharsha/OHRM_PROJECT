package anil.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Marketplace {
  WebDriver dr;
  By MarketplaceTab = By.id("MP_link");
  public Marketplace(WebDriver dr) {
		this.dr=dr;
	}

    public void MarketplaceTab() {
    	dr.findElement(MarketplaceTab).click();
    }
    public void request_Addons() {
    	dr.findElement(By.id("buyBtn1")).click();
    	dr.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
    }
    	public void enter_data() {
    	dr.findElement(By.id("email")).sendKeys("abc1@gmail.com");
    	dr.findElement(By.id("contactNumber")).sendKeys("1234567890");
    	dr.findElement(By.id("organization")).sendKeys("xyzorganization");
    	dr.findElement(By.id("modal_confirm_buy")).click();
    }	
}
