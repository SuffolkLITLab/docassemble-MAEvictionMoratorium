Feature: Get kicked out if evicted for harm

There's only one kickout in this interview.

Scenario: Single person gets kicked out for harm
  Given I start the interview
  When I tap the option with the text "I accept"
  When I tap the button "Next"
  When I tap the button "Next"
  Then I type "Ulli" in the "First Name" field
  Then I type "User" in the "Last Name" field
  Then I tap the button "Next"
  Then I tap the option with the text "I am filing this motion alone."
  Then I tap the button "Next"
  Then I tap the option with the text "Yes, I am risking someone’s health or safety"
  Then I tap the button "Next"
  Then I should NOT see the phrase "any of your codefendants"
  Then the question id should be "kick out"

Scenario: Multiple people gets kicked out for harm
  Given I start the interview
  When I tap the option with the text "I accept"
  When I tap the button "Next"
  When I tap the button "Next"
  Then I type "Ulli" in the "First Name" field
  Then I type "User" in the "Last Name" field
  Then I tap the button "Next"
  Then I tap the option with the text "I talked to them and at least one of them wants to file with me."
  Then I tap the button "Next"
  Then I type "Cod 1" in the "First Name" field
  Then I type "Codef" in the "Last Name" field
  Then I tap the button "Next"
  Then I tap the button "Next"
  Then I tap the option with the text "with me at the end"
  Then I tap the button "Next"
  Then I tap the button "No"
  Then I tap the option with the text "Yes, we are risking someone’s health or safety"
  When I tap the button "Next"
  Then the question id should be "kick out"
  Then I SHOULD see the phrase "any of your codefendants"

