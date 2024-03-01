Feature: test sample file


  Scenario: test sample website
    Given   I am on homepage
    When    I click on accept cookies
    And     I click on explore now button
    Then    I should verify "Explore our 9 travel styles below to begin your journey" title on travel style page