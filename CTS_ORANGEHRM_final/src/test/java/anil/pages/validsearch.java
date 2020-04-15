package anil.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

public class validsearch {
	WebDriver dr;
	By valid_name = By.name("searchDirectory[emp_name][empName]");
	By searchButton = By.id("searchBtn");
	By DirectoryTab = By.xpath("//*[@id=\"menu_directory_viewDirectory\"]/b");
	
	public validsearch(WebDriver dr) {
		this.dr=dr;
	}
	
	public void validSearchOperation(String empnm) {
		dr.findElement(By.id("searchDirectory_emp_name_empName")).sendKeys(empnm);
		Select drp_Tp = new Select(dr.findElement(By.id("searchDirectory_job_title")));
		drp_Tp.selectByVisibleText("HR Manager");
	}
	public void searchButton() {
		dr.findElement(searchButton).click();
	}
}
