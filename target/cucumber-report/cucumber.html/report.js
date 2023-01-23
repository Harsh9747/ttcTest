$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("comp.feature");
formatter.feature({
  "line": 1,
  "name": "test sample file",
  "description": "",
  "id": "test-sample-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8328681700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "test sample website",
  "description": "",
  "id": "test-sample-file;test-sample-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 148942800,
  "status": "passed"
});
formatter.after({
  "duration": 768939900,
  "status": "passed"
});
});