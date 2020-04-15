package nikki.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;

public class delete_details 
{
	WebDriver driver;
	By username=By.id("txtUsername");
	By password=By.id("txtPassword");
	By login=By.id("btnLogin");
	By admin=By.xpath("//*[@id=\"menu_admin_viewAdminModule\"]/b");
	By user_management=By.id("menu_admin_UserManagement");
	By users=By.id("menu_admin_viewSystemUsers");
	By usercheckbox=By.xpath("//*[@id=\"resultTable\"]/tbody/tr[2]/td[1]");
	By delete=By.id("btnDelete");
	public void LaunchUrl3(String browser) 
	{
		if(browser.equalsIgnoreCase("Chrome")) {
			
		System.setProperty("webdriver.chrome.driver","src\\test\\resources\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("firefox")) {
			
			System.setProperty("webdriver.firefox.driver","src\\test\\resources\\drivers\\geckodriver.exe");
			driver = new InternetExplorerDriver();
			}
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		
	}
	public void open()
	{
		driver.get("https://opensource-demo.orangehrmlive.com/");
		System.out.println(driver.getTitle());
	}
	
		public void login_details3() 
		{
			driver.findElement(username).sendKeys("Admin");
			driver.findElement( password).sendKeys("admin123");	
			driver.findElement(login).click();
		}
	
		public void delete_requirements() 
		{
			driver.findElement(admin).click();
			WebElement a=driver.findElement(user_management);
			WebElement b=driver.findElement(users);
			Actions act=new Actions(driver);
			act.moveToElement(a).click().build().perform();
			act.moveToElement(b).click().build().perform();
			WebElement a1 =driver.findElement(usercheckbox);
			a1.click();
			//driver.findElement(usercheckbox).click();
			driver.findElement(delete).click();
	
		}
	
}
