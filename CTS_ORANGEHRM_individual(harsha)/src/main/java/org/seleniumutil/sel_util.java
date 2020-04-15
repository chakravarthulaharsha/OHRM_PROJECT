package org.seleniumutil;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class sel_util {
	WebDriver driver;
	public sel_util(WebDriver driver){
		this.driver=driver;
	}
	public void takeSnapShot(String path1) 
	{
		TakesScreenshot screenshot = (TakesScreenshot)driver;
        File Source = screenshot.getScreenshotAs(OutputType.FILE);
        try {
			FileUtils.copyFile(Source, new File(path1));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
