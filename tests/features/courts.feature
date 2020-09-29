Feature: Court picking

Things to test for:
- [x] All of (and only) BMC, District, Housing, and Superior courts appear
- [x] Correct court shows for in-state defendant
- [x] Correct court shows for out-of-state defendant

TODO:
- [ ] Update court finder questin id when it's updated to match basic questions id

Notes:
- Does not test showing/hiding/required features. That's planned for a different test.

Scenario: In-state defendant
  Given I start the interview
  When I tap the option with the text "I accept"
  When I tap the button "Next"
  When I tap the button "Next"
  Then I type "Ulli" in the "First Name" field
  Then I type "User" in the "Last Name" field
  Then I tap the button "Next"
  Then I tap the option with the text "I am filing this motion alone."
  Then I tap the button "Next"
  Then I tap the option with the text "No, I am not risking anyone’s health or safety"
  Then I tap the button "Next"
  Then I type "112 Southampton St" in the "Street address" field
  Then I type "Boston" in the "City" field
  Then I select "Massachusetts" from the "State" dropdown
  Then I type "02118" in the "Zip" field
  Then I tap the button "Next"
  Then I type "Semaphore" in the "Other ways to reach you" field
  Then I tap the button "Next"
  Then I do nothing
  Then I tap the button "Next"
  Then I type "Other party 1" in the unlabeled field
  
  Then I tap the button "Next"
  Then the question id should be "matching courts choose a court no map"
  Then I SHOULD see the phrase "District Court"
  Then I SHOULD see the phrase "Boston Municipal Court"
  Then I SHOULD see the phrase "Housing Court"
  Then I SHOULD see the phrase "Superior Court"
  Then I should NOT see the phrase "Juvenile Court"
  Then I should NOT see the phrase "Land Court"
  Then I should NOT see the phrase "Probate and Family Court"

Scenario: Out-of-state defendant
  Given I start the interview
  When I tap the option with the text "I accept"
  When I tap the button "Next"
  When I tap the button "Next"
  Then I type "Ulli" in the "First Name" field
  Then I type "User" in the "Last Name" field
  Then I tap the button "Next"
  Then I tap the option with the text "I am filing this motion alone."
  Then I tap the button "Next"
  Then I tap the option with the text "No, I am not risking anyone’s health or safety"
  Then I tap the button "Next"
  Then I type "1600 Pennsylvania Avenue" in the "Street address" field
  Then I type "Washington" in the "City" field
  Then I select "District of Columbia" from the "State" dropdown
  Then I type "20500" in the "Zip" field
  Then I tap the button "Next"
  Then I type "Semaphore" in the "Other ways to reach you" field
  Then I tap the button "Next"
  Then I do nothing
  Then I tap the button "Next"
  Then I type "Other party 1" in the unlabeled field
  
  Then I tap the button "Next"
  Then the question id should be "empty matches choose a court no map"

