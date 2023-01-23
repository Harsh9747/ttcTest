package com.localhost.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on computer link$")
    public void iClickOnComputerLink() {
    }

    @Then("^I should see the \"([^\"]*)\" text message computer page$")
    public void iShouldSeeTheTextMessageComputerPage(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
