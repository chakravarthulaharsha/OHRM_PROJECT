package org.pages;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class OHRM_LEAVE {
	public WebDriver dr;
	@FindBy(id="menu_leave_viewLeaveModule")
	WebElement Leave_btn;
	@FindBy(id="menu_leave_assignLeave")
	WebElement Assn_leave_btn;
	@FindBy(id="assignleave_txtEmployee_empName")
	WebElement emp_nm;
	@FindBy(id="assignleave_txtFromDate")
	WebElement from_date;
	@FindBy(id="assignleave_txtToDate")
	WebElement to_date;
	@FindBy(id="assignBtn")
	WebElement assn_btn;
	@FindBy(id="confirmOkButton")
	WebElement assn_btn_ok;
	@FindBy(id="menu_leave_viewLeaveList")
	WebElement leave_lst;
	@FindBy(id="calFromDate")
	WebElement v_from;
	@FindBy(id="calToDate")
	WebElement v_to;
	@FindBy(id="leaveList_chkSearchFilter_checkboxgroup_allcheck")
	WebElement chk_lst;
	@FindBy(id="leaveList_txtEmployee_empName")
	WebElement v_emp;
	@FindBy(id="btnSearch")
	WebElement v_search;
	@FindBy(id="leaveList_cmbWithTerminated")
	WebElement v_pastemp;
	
	Logger log= Logger.getLogger("devpinoyLogger");

	public OHRM_LEAVE(WebDriver dr) {
		this.dr=dr;
		PageFactory.initElements(dr, this);
	}
	public void click_leave() {
		Leave_btn.click();
		Assn_leave_btn.click();
	}
	public void leave_details(String name,String leavetp,String fro,String tod) {
		
		Select drp_Tp = new Select(dr.findElement(By.id("assignleave_txtLeaveType")));
		drp_Tp.selectByVisibleText(leavetp);
		from_date.clear();
		from_date.sendKeys(fro);
		to_date.clear();
		to_date.sendKeys(tod);
		emp_nm.sendKeys(name);
	}
	public void click_save() {
		assn_btn.click();
		assn_btn.click();
		log.debug("Leave Successfully applied");
//		assn_btn_ok.click();
	}
	public void leave_in_rpt(String emp,String frm,String tt) {
		leave_lst.click();
		chk_lst.click();
		v_emp.click();
		v_emp.sendKeys(emp);
		v_to.clear();
		v_to.sendKeys(tt);
		v_from.clear();
		v_from.sendKeys(frm);
		v_search.click();
		v_search.click();
		log.debug("Leave verified");

	}

}
