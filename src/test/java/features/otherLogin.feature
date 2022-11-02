Feature: Techfios Other login functionality validation

  @OtherScenrio1
  Scenario: User should be able to login with valid credentials(other)
    Given User is on the techfios login page
    When User enters password as "abc123"
    When User enters username as "demo@techfios.com"
    And User clicks on signin button
    Then User should land on Dashboard page

  @OtherScenrio2
  Scenario: User should be able to login with invalid credentials(other)
    Given User is on the techfios login page
    When User enters password as "abc123"
    When User enters username as "demo2@techfios.com"
    And User clicks on signin button
    Then User should land on Dashboard page

  @OtherScenrio3   @Smoke
  Scenario: User should be able to login with invalid credentials(other)
    Given User is on the techfios login page
    When User enters password as "abc1234"
    When User enters username as "demo@techfios.com"
    And User clicks on signin button
    Then User should land on Dashboard page
