package com.localhost.steps;

import com.localhost.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }


    @And("^I click on explore now button$")
    public void iClickOnExploreNowButton() {
        new HomePage().clickOnExploreNowButton();
    }


    @Then("^I should verify \"([^\"]*)\" title on travel style page$")
    public void iShouldVerifyTitleOnTravelStylePage(String text) {
        Assert.assertEquals("title is not matching", text, new HomePage().getTitleText());
        System.out.println("title: "+new HomePage().getTitleText());
    }

    @When("^I click on accept cookies$")
    public void iClickOnAcceptCookies() {
        new HomePage().clickOnAcceptCookie();
    }
}
