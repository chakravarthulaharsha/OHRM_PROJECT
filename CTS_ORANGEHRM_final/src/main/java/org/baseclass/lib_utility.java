package org.baseclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class lib_utility { 
	public static WebDriver dr;
	
public static void launch_browser(String browser,String url) {
	String ch_driver_path="src\\test\\resources\\drivers\\chromedriver.exe";
	String ff_driver_path="src\\test\\resources\\driver\\geckodriver.exe";
	switch(browser) {
	case "chrome":
		System.setProperty("webdriver.chrome.driver", ch_driver_path);
		dr=new ChromeDriver();
		dr.get(url);
		break;
	case "firefox":
		System.setProperty("webdriver.gecko.driver", ff_driver_path);
		dr=new FirefoxDriver();
		dr.get(url);
		break;
	default :
		System.out.println("Supported brower is chrome and firefox");
		break;
		}
	}
}

