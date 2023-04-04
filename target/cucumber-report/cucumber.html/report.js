$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ttc.feature");
formatter.feature({
  "line": 1,
  "name": "test sample file",
  "description": "",
  "id": "test-sample-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 28513331200,
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
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 399077900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 198095700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnExploreNowButton()"
});
formatter.result({
  "duration": 2766826400,
  "status": "passed"
});
formatter.after({
  "duration": 1194447400,
  "status": "passed"
});
});