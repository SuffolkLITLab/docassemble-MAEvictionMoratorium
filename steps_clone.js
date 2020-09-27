// Copying some da aloe steps
const { When, Then, And, Given, After, AfterAll, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
const puppeteer = require('puppeteer');
const interviewConstants = require('../../interview-constants');
const scope = require('./scope');

/* Of Note:
- We're using `*=` because sometimes da text has funny characters in it
    that are hard to anticipate, so we allow people to just put in some of the text
*/


// =========================
// Contstants
// =========================
//* ordinal_to_integer = {first: 1, ...}
//* decriptor = '?"?(?:the (first|second|[^"]+))"?' //(approximately)
//* non-capturing capturing group expression for single or double quotes?
//* {pc: 'click', mobile: 'tap'}


// =========================
// Establishing
// =========================
//x @step(r'I spend at least ([0-9]+) seconds? on each page')
//x @step(r'I want to store screenshots in the folder "([^"]+)"')


// =========================
// Start
// =========================
//x @step(r'I start the possibly error-producing interview "([^"]+)"')
//x @step(r'I am using the server "([^"]+)"')
//x @step(r'I log in with "([^"]+)" and "([^"]+)"')
//x @step(r'I launch the interview "([^"]+)"')

// @step(r'I start the interview "([^"]+)"')
// I start the interview file "([^"]+)" on mobile
// I go to "([^"]*)" on mobile/a phone/a computer/a pc/a tablet???


// =========================
// Observational
// =========================
//x @step(r'I wait forever')
//x @step(r'I should see "([^"]+)" as the title of the page')
//x @step(r'I should see "([^"]+)" as the URL of the page')
//x @step(r'I save a screenshot to "([^"]+)"')
//x @step(r'I set the window size to ([0-9]+)x([0-9]+)')
//x @step(r'I screenshot the page')

// @step(r'I wait (\d+) seconds?')

// the term "([^"]+)" exists

// @step(r'I should see the phrase "([^"]+)"')

// @step(r'I should not see the phrase "([^"]+)"')

// For things that have double quotes in them
// @step("I should see the phrase '([^']+)'")

// @step("I should not see the phrase '([^']+)'")


// =========================
// Navigational
// =========================
// @step(r'If I see it, I will tap the link "([^"]+)"')
// I tap the ${ description } link "([^"]+)"


// =========================
// Interactive
// =========================
//x @step(r'I upload the file "([^"]*)"')
//x @step(r'I reload the screen')
//x @step(r'I tap the back button')
//x @step(r'I tap the question back button')
//x @step(r'I tap the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) link "([^"]+)"')
//x @step(r'I tap the final link "([^"]+)"')

// @step(r'I tap inside the signature area')
// (I|They) sign

// @step(r'I set the text area to "([^"]*)"')
// I type "([^"]*)" in the ${ description } textarea

//* I clear the textarea?

// @step(r'I tap the button "([^"]+)"')
// I tap "([^"]+)" (can this be a button or link or anything?) (Include 1st, 2nd, etc?)

// @step(r'I tap the "([^"]+)" button')
// @step(r'I tap the link "([^"]+)"')
//* Maybe go with 'I tap'? Is that possible? Maybe we should stick to the script.

// @step(r'I select "([^"]+)" from the menu')
// @step(r'I go to the help screen')
// Still 'I tap'? A possible alterntive to it if someone's really struggling to make the text match?

// @step(r'I go back to the question screen')

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

// @step(r'I exit by taping "([^"]+)"')

// @step(r'I unfocus')  //* Not sure of this one
// I tap somewhere else?




