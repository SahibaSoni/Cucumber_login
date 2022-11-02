$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios billing login functionality validation",
  "description": "",
  "id": "techfios-billing-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 1774462600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenrio1"
    },
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 701972000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_password_as(String)"
});
formatter.result({
  "duration": 56949900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_as(String)"
});
formatter.result({
  "duration": 72526300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 1369511500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 13616700,
  "status": "passed"
});
formatter.after({
  "duration": 692899900,
  "status": "passed"
});
formatter.before({
  "duration": 1164848400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should be able to login with invalid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Scenrio2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User enters username as \"demo2@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 628001200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_password_as(String)"
});
formatter.result({
  "duration": 54421800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo2@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_as(String)"
});
formatter.result({
  "duration": 71893900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 533549800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 3142800,
  "error_message": "junit.framework.ComparisonFailure: Page not found  expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginStepDefinations.user_should_land_on_Dashboard_page(LoginStepDefinations.java:57)\r\n\tat ✽.Then User should land on Dashboard page(features/TechFiosLogin.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 16822537300,
  "status": "passed"
});
formatter.before({
  "duration": 1164311900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to login with invalid credentials",
  "description": "",
  "id": "techfios-billing-login-functionality-validation;user-should-be-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@Scenrio3"
    },
    {
      "line": 20,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User enters password as \"abc1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User clicks on signin button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.User_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 674489200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_password_as(String)"
});
formatter.result({
  "duration": 69631000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_as(String)"
});
formatter.result({
  "duration": 63213300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 532181700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 3777900,
  "error_message": "junit.framework.ComparisonFailure: Page not found  expected:\u003c[Dashboard]- iBilling\u003e but was:\u003c[Login ]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat steps.LoginStepDefinations.user_should_land_on_Dashboard_page(LoginStepDefinations.java:57)\r\n\tat ✽.Then User should land on Dashboard page(features/TechFiosLogin.feature:26)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 16815812400,
  "status": "passed"
});
});