package com.localhost.pages;

import com.localhost.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[text()='Got It!']")
    WebElement acceptCookies;

    @CacheLookup
    @FindBy(xpath = "//div[@class='et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ']")
    WebElement exploreNowButton;

    @CacheLookup
    @FindBy(xpath = "//div//h3[text()='Explore our 9 travel styles below to begin your journey']")
    WebElement titleText;

    public void clickOnAcceptCookie(){
        clickOnElement(acceptCookies);
        log.info("Clicking on Got it(accepting cookies) "+acceptCookies.toString());
    }

    public void clickOnExploreNowButton() {
        clickOnElement(exploreNowButton);
        log.info("Clicking on explore now button "+exploreNowButton.toString());
    }

    public String getTitleText() {
        log.info("getting title Text "+titleText.toString());
        return getTextFromElement(titleText);
    }
}
