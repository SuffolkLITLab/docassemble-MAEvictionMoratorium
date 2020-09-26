Feature: Shortest successful path with all possible information

- [x] Take the shortest path, give most info possible, check for singulars

Think this is missing some kind of singluar check for the landlord

Scenario: Shortest successful path
  Given I start the interview
  When I tap the option with the text "I accept"
  When I tap the button "Next"
  When I tap the button "Next"
  Then I type "Ulli" in the "First Name" field
  Then I type "Umiddle" in the "Middle Name" field
  Then I type "User" in the "Last Name" field
  Then I select "Jr" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I tap the option with the text "I am filing this motion alone."
  Then I tap the button "Next"
  Then I tap the option with the text "No, I am not risking anyone’s health or safety"
  Then I tap the button "Next"
  Then I type "112 Southampton St" in the "Street address" field
  Then I type "1" in the "Unit" field
  Then I type "Boston" in the "City" field
  Then I select "Massachusetts" from the "State" dropdown
  Then I type "02118" in the "Zip" field
  Then I tap the button "Next"
  Then I type "101 555-1111" in the "Mobile number" field
  Then I type "102 555-2222" in the "Other phone number" field
  Then I type "user@example.com" in the "Email address" field
  Then I type "Semaphore" in the "Other ways to reach you" field
  Then I tap the button "Next"
  Then I do nothing
  Then I tap the button "Next"
  Then I should see the phrase "What is the plaintiff’s name?"
  Then I type "Landlord 1" in the unlabeled field
  Then I tap the button "Next"
  Then I select "Attleboro District Court" from the dropdown
  Then I tap the button "Next"
  Then I type "111" in the "Docket number" field
  Then I tap the button "Next"
  Then I choose "No"
  Then I tap the button "Next"
  Then I wait 2 seconds
  Then I tap the button "Next"
  Then I tap the button "This computer"
  Then I sign
  When I tap the button "Next"
  Then the question id should be "signature status"
