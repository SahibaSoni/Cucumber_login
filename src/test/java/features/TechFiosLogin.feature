@LoginFeature @Regression
Feature: Techfios billing login functionality validation

  @Scenrio1   @Smoke
  Scenario: User should be able to login with valid credentials
    Given User is on the techfios login page
    When User enters password as "abc123"
    When User enters username as "demo@techfios.com"
    And User clicks on signin button
    Then User should land on Dashboard page

  @Scenrio2
  Scenario: User should be able to login with invalid credentials
    Given User is on the techfios login page
    When User enters password as "abc123"
    When User enters username as "demo2@techfios.com"
    And User clicks on signin button
    Then User should land on Dashboard page

  @Scenrio3   @Smoke
  Scenario: User should be able to login with invalid credentials
    Given User is on the techfios login page
    When User enters password as "abc1234"
    When User enters username as "demo@techfios.com"
    And User clicks on signin button
    Then User should land on Dashboard page
    
    
