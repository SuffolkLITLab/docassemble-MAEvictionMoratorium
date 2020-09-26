Feature: Multiple codefendants and landlords signing in
different ways with different info. Excludes codefendants
signing on their own devices.

- [x] Multiple codefendants
- [x] Multiple landlords
- [x] Two codefendants sign on user's device
- [x] User signs for two codefendants
- [x] Two codefendants will sign on paper
- [x] Codefendants each have all info and different info

Scenario: Shortest successful path
  Given I start the interview
  When I tap the option with the text "I accept"
  When I tap the button "Next"
  Then I do nothing
  Then I tap the button "Next"
  Then I type "Ulli" in the "First Name" field
  Then I type "Umiddle" in the "Middle Name" field
  Then I type "User" in the "Last Name" field
  Then I select "Jr" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I tap the option with the text "wants to file with me"
  Then I tap the button "Next"

  Then I type "C1" in the "First Name" field
  Then I type "Coda" in the "Middle Name" field
  Then I type "Codef" in the "Last Name" field
  Then I select "Jr" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I type "111-111-1111" in the "Mobile number" field
  Then I type "111-111-2222" in the "Other phone number" field
  Then I type "c1@example.com" in the "Email address" field
  Then I tap the button "Next"
  Then I tap the option with the text "sign their name for them"
  Then I tap the button "Next"
  Then I tap the button "Yes"

  Then I type "C2" in the "First Name" field
  Then I type "Coda" in the "Middle Name" field
  Then I type "Codef" in the "Last Name" field
  Then I select "II" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I type "222-222-1111" in the "Mobile number" field
  Then I type "222-222-2222" in the "Other phone number" field
  Then I type "c2@example.com" in the "Email address" field
  Then I tap the button "Next"
  Then I tap the option with the text "sign their name for them"
  Then I tap the button "Next"
  Then I tap the button "Yes"

  Then I type "C3" in the "First Name" field
  Then I type "Coda" in the "Middle Name" field
  Then I type "Codef" in the "Last Name" field
  Then I select "III" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I type "333-333-1111" in the "Mobile number" field
  Then I type "333-333-2222" in the "Other phone number" field
  Then I type "c3@example.com" in the "Email address" field
  Then I tap the button "Next"
  Then I tap the option with the text "sign with me"
  Then I tap the button "Next"
  Then I tap the button "Yes"

  Then I type "C4" in the "First Name" field
  Then I type "Coda" in the "Middle Name" field
  Then I type "Codef" in the "Last Name" field
  Then I select "IV" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I type "444-444-1111" in the "Mobile number" field
  Then I type "444-444-2222" in the "Other phone number" field
  Then I type "c4@example.com" in the "Email address" field
  Then I tap the button "Next"
  Then I tap the option with the text "sign with me"
  Then I tap the button "Next"
  Then I tap the button "Yes"

  Then I type "C5" in the "First Name" field
  Then I type "Coda" in the "Middle Name" field
  Then I type "Codef" in the "Last Name" field
  Then I select "V" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I type "555-555-1111" in the "Mobile number" field
  Then I type "555-555-2222" in the "Other phone number" field
  Then I type "c5@example.com" in the "Email address" field
  Then I tap the button "Next"
  Then I tap the option with the text "paper"
  Then I tap the button "Next"
  Then I tap the button "Yes"

  Then I type "C6" in the "First Name" field
  Then I type "Coda" in the "Middle Name" field
  Then I type "Codef" in the "Last Name" field
  Then I select "VI" from the "Suffix" dropdown
  Then I tap the button "Next"
  Then I type "666-666-1111" in the "Mobile number" field
  Then I type "666-666-2222" in the "Other phone number" field
  Then I type "c6@example.com" in the "Email address" field
  Then I tap the button "Next"
  Then I tap the option with the text "paper"
  Then I tap the button "Next"
  Then I tap the button "No"

  Then I tap the option with the text "we are not risking"
  Then I tap the button "Next"
  Then I type "112 Southampton St" in the "Street address" field
  Then I type "1" in the "Unit" field
  Then I type "Boston" in the "City" field
  Then I select "Massachusetts" from the "State" dropdown
  Then I type "02118" in the "Zip" field
  Then I tap the button "Next"
  Then I type "201 555-1111" in the "Mobile number" field
  Then I type "202 555-2222" in the "Other phone number" field
  Then I type "user@example.com" in the "Email address" field
  Then I type "Semaphore" in the "Other ways to reach you" field
  Then I tap the button "Next"

  Then I type "2" in the unlabeled field
  Then I tap the button "Next"
  Then I type "Landlord 1" in the unlabeled field
  Then I tap the button "Next"
  Then I type "Landlord 2" in the unlabeled field
  Then I tap the button "Next"
  Then I select "Attleboro District Court" from the dropdown
  Then I tap the button "Next"
  Then I type "111" in the "Docket number" field
  Then I tap the button "Next"
  Then I tap the option with the text "No"
  Then I tap the button "Next"
  Then I do nothing
  Then I tap the button "Next"
  Then I tap the button "This computer"
  Then I sign
  When I tap the button "Next"
  Then I sign
  When I tap the button "Next"
  Then I sign
  When I tap the button "Next"
  Then I sign
  When I tap the button "Next"
  Then I sign
  When I tap the button "Next"
  Then I should see the phrase "C1 C. Codef Jr, C2 C. Codef II, C3 C. Codef III, and C4 C. Codef IV have signed"
  Then I should see the phrase "C5 C. Codef IV will sign"
  Then I should see the phrase "C6 C. Codef VI will sign"
