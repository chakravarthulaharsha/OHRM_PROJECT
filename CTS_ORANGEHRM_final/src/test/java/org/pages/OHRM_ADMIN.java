package org.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OHRM_ADMIN {
	WebDriver dr;
	@FindBy(id="menu_admin_viewAdminModule")
	WebElement ADM_btn;
	@FindBy(id="menu_admin_Organization")
	WebElement orgnbtn;
	@FindBy(id="menu_admin_viewOrganizationGeneralInformation")
	WebElement geninfo;
	@FindBy(id="btnSaveGenInfo")
	WebElement edit_btn;
	@FindBy(id="organization_name")
	WebElement org_nm;
	@FindBy(id="btnSaveGenInfo")
	WebElement save_btn;
	@FindBy(id="aboutDisplayLink")
	WebElement abt_btn;
	@FindBy(id="welcome")
	WebElement welc_btn;
	Logger log= Logger.getLogger("devpinoyLogger");
	public OHRM_ADMIN(WebDriver dr) {
		this.dr=dr;
		PageFactory.initElements(dr, this);
	}
	public void click_admin() {
		ADM_btn.click();
	}
	public void clic_orgbtn() {
		orgnbtn.click();
	
	}
	public void clic_generalinfo() {
		
		geninfo.click();
	}
	public void clic_editbtn() {
		edit_btn.click();
	}
	public void change_orgnm(String orgnm) {
		org_nm.clear();
		org_nm.sendKeys(orgnm);
		log.debug("Changed Organisation name");
	}
	public void click_savebtn() {
		save_btn.click();
	}
	public void verify_btn() {
		welc_btn.click();
		abt_btn.click();
		log.debug("successfully Changed Organisation name");
	}

}
