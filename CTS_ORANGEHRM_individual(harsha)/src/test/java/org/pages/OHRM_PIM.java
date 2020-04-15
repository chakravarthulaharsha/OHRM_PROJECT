package org.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class OHRM_PIM {
	 public WebDriver dr;
	@FindBy(id="menu_pim_viewPimModule")
	WebElement PIM_btn;
	@FindBy(id="menu_core_viewDefinedPredefinedReports")
	WebElement repor_t;
	@FindBy(id="btnAdd")
	WebElement rpt_add;
	@FindBy(id="report_report_name")
	WebElement rpt_name;
	@FindBy(id="btnAddDisplayField")
	WebElement dspl_fld;
	@FindBy(id="display_group_1")
	WebElement chk_box;
	@FindBy(id="btnSave")
	WebElement save_btn;
	@FindBy(id="search_search")
	WebElement search_tab;
	@FindBy(name="_search")
	WebElement search_btn;
	@FindBy(xpath="//*[@id=\"resultTable\"]/tbody/tr/td[2]")
	WebElement srch_result;
	@FindBy(id="ohrmList_chkSelectAll")
	WebElement check_btn;
	@FindBy(id="btnDelete")
	WebElement del_btn;
	@FindBy(id="dialogDeleteBtn")
	WebElement del_ok_btn;
	@FindBy(xpath="//*[@id=\"resultTable\"]/tbody/tr/td")
	WebElement no_rcd;
	
	Logger log= Logger.getLogger("devpinoyLogger");
	
	public OHRM_PIM(WebDriver dr) {
		this.dr=dr;
		PageFactory.initElements(dr, this);
	}
	public void click_pim() {
		PIM_btn.click();
		
	}
	public void clic_rpt() {
		repor_t.click();
	}
	public void Add_report() {
		rpt_add.click();
	}
	public void detls_rpts(String rptnm) {
		rpt_name.sendKeys(rptnm);
		dspl_fld.click();
		chk_box.click();
	}
	public void click_savebtn() {
		save_btn.click();
		log.debug("PIM report Added successfully");

	}
	public String search_andverify(String rptname) {
		search_tab.sendKeys(rptname);
		search_btn.click();
		log.debug("PIM report Verifed successfully");
		return srch_result.getText();
	}
	public void sEarch_del(String delnm) {
		search_tab.sendKeys(delnm);
		search_btn.click();
		check_btn.click();
	}
	public void delbtn() {
		del_btn.click();
		del_ok_btn.click();
		log.debug("PIM report deleted successfully");

	}
	public void search_and_verify2(String rEptnm) {
		search_tab.sendKeys(rEptnm);
		search_btn.click();
		System.out.println(no_rcd.getText());
	}
	
}
