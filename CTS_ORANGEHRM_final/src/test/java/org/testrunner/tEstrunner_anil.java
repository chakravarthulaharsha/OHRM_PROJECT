package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

public class tEstrunner_anil {
	@RunWith(Cucumber.class)
	@CucumberOptions
	(

	features = "src\\test\\resources\\features\\anil.feature",
	glue = {"anil.step_def"},        
	plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
	        "com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"}
	       
	)

	public static class runner{

	    @AfterClass
	      public static void extendReport()
	    {
	        Reporter.loadXMLConfig("src\\test\\resources\\testdata\\extent-config.xml");
	        Reporter.setSystemInfo("user", System.getProperty("user.name"));
	        Reporter.setSystemInfo("os", "Windows");
	        Reporter.setTestRunnerOutput("Sample test runner output message");
	    }
	}


}

