// Copying some da aloe steps


//* descriptor = {first: 1, ...}
//* non-capturing capturing group expression for single or double quotes?


// @step(r'I spend at least ([0-9]+) seconds? on each page')
// @step(r'I tap inside the signature area')
// (I|They) sign


// @step(r'I am using the server "([^"]+)"')
// @step(r'I log in with "([^"]+)" and "([^"]+)"')
// @step(r'I upload the file "([^"]*)"')
// @step(r'I set the text area to "([^"]*)"')
// I type "([^"]*)" in the ${ description } textarea

//* I clear the textarea?

// @step(r'If I see it, I will tap the link "([^"]+)"')
// I tap the ${ description } link "([^"]+)"

// the term "([^"]+)" exists

// @step(r'I wait forever')
// @step(r'I launch the interview "([^"]+)"')
// @step(r'I start the interview "([^"]+)"')
// I start the interview file "([^"]+)" on mobile
// I go to "([^"]*)" on mobile/a phone/a computer/a pc/a tablet???

// @step(r'I start the possibly error-producing interview "([^"]+)"')
// @step(r'I reload the screen')
// @step(r'I tap the back button')
// @step(r'I tap the question back button')
// @step(r'I tap the button "([^"]+)"')
// I tap "([^"]+)" (can this be a button or link or anything?) (Include 1st, 2nd, etc?)

// @step(r'I tap the "([^"]+)" button')
// @step(r'I tap the link "([^"]+)"')
//* Maybe go with 'I tap'? Is that possible? Maybe we should stick to the script.

// @step(r'I select "([^"]+)" from the menu')
// @step(r'I go to the help screen')
// Still 'I tap'? A possible alterntive to it if someone's really struggling to make the text match?

// @step(r'I go back to the question screen')

// @step(r'I tap the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) link "([^"]+)"')
// @step(r'I should see the phrase "([^"]+)"')

// @step(r'I should not see the phrase "([^"]+)"')

// For things that have double quotes in them
// @step("I should see the phrase '([^']+)'")

// @step("I should not see the phrase '([^']+)'")

// Combine these two
// @step(r'I set "([^"]+)" to "([^"]*)"')
// @step(r'I set the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) "([^"]+)" to "([^"]*)"')

// @step(r'I select "([^"]+)" in the combobox')

// @step(r'I set the combobox text to "([^"]*)"')

// I set the "([^"]*)" dropdown to "([^"]*)"

// These could be better differentiated
// @step(r'I select "([^"]+)" as the "([^"]+)"')  //* options
// @step(r'I select "([^"]+)" as the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) "([^"]+)"')
//* All could be combined with regex?
// I pick?

// @step(r'I choose "([^"]+)"')  //* dropdown
// I choose "([^"]+)" from the ${ descriptor } dropdown

// @step(r'I wait (\d+) seconds?')

// @step(r'I should see that "([^"]+)" is "([^"]+)"')  //* What do? Anything with label

// @step(r'I set the text box to "([^"]*)"')
// @step(r'I set text box ([0-9]+) to "([^"]*)"')  //* combined with above
// I type "([^"]*)" ?(?:in)? (?:the)? ?("([^"]*)")? (?:text box)?

// I clear the textbox

//* Radio buttons or checkboxes
// @step(r'I tap the "([^"]+)" option under "([^"]+)"')
// @step(r'I tap the "([^"]+)" option')
// @step(r'I tap the option "([^"]+)" under "([^"]+)"')
// @step(r'I tap the option "([^"]+)"')

// @step(r'I should see "([^"]+)" as the title of the page')
// @step(r'I should see "([^"]+)" as the URL of the page')
// @step(r'I exit by taping "([^"]+)"')

// @step(r'I save a screenshot to "([^"]+)"')
// @step(r'I set the window size to ([0-9]+)x([0-9]+)')
// @step(r'I unfocus')  //* Not sure of this one
// I tap somewhere else?

// @step(r'I tap the final link "([^"]+)"')
// @step(r'I screenshot the page')
// @step(r'I want to store screenshots in the folder "([^"]+)"')

