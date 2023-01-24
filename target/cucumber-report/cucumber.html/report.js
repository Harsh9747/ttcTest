$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ttc.feature");
formatter.feature({
  "line": 1,
  "name": "test sample file",
  "description": "",
  "id": "test-sample-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6716317700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "test sample website",
  "description": "",
  "id": "test-sample-file;test-sample-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on explore now button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should verify \"Explore our 9 travel styles below to begin your journey\" title on travel style page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 351667500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 165915400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnExploreNowButton()"
});
formatter.result({
  "duration": 5146887900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Explore our 9 travel styles below to begin your journey",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.iShouldVerifyTitleOnTravelStylePage(String)"
});
formatter.result({
  "duration": 265649000,
  "status": "passed"
});
formatter.after({
  "duration": 799751800,
  "status": "passed"
});
});