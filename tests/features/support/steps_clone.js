// // Copying some da aloe steps
// const { When, Then, And, Given, After, AfterAll, setDefaultTimeout } = require('cucumber');
// const { expect } = require('chai');
// const puppeteer = require('puppeteer');
// const interviewConstants = require('../../interview-constants');
// const scope = require('./scope');

// /* Of Note:
// - We're using `*=` because sometimes da text has funny characters in it
//     that are hard to anticipate, so we allow people to just put in some of the text
// */


// // =========================
// // Contstants
// // =========================
// let ordinal_to_integer = {
//   first: 0, second: 1, third: 2, fourth: 3, fifth: 4,
//   sixth: 5, seventh: 6, eighth: 7, ninth: 8, tenth: 9,
//   '1st': 0, '2nd': 1, '3rd': 2, '4th': 3, '5th': 4,
//   '6th': 5, '7th': 6, '8th': 7, '9th': 8,'10th': 9,
// };
// let ordinal = '?(first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth)?';
// let click_with = { mobile: 'tap', pc: 'click', };
// //* non-capturing capturing group expression for single or double quotes?


// // =========================
// // Establishing
// // =========================
// //x @step(r'I spend at least ([0-9]+) seconds? on each page')
// //x @step(r'I want to store screenshots in the folder "([^"]+)"')


// // =========================
// // Start
// // =========================
// //x @step(r'I start the possibly error-producing interview "([^"]+)"')
// //x @step(r'I am using the server "([^"]+)"')
// //x @step(r'I log in with "([^"]+)" and "([^"]+)"')
// //x @step(r'I launch the interview "([^"]+)"')

// // @step(r'I start the interview "([^"]+)"')
// // I start the interview file "([^"]+)" on mobile
// // I open the interview file ?"?([^"]+)"?( on mobile/a phone/a computer/a pc/a tablet???)
// /I open the interview file ?"?([^"]+)"?[ on ]?(.*)/


// // =========================
// // Observational/Passive
// // =========================
// //x @step(r'I wait forever')
// //x @step(r'I should see "([^"]+)" as the title of the page')
// //x @step(r'I should see "([^"]+)" as the URL of the page')
// //x @step(r'I save a screenshot to "([^"]+)"')
// //x @step(r'I set the window size to ([0-9]+)x([0-9]+)')
// //x @step(r'I screenshot the page')

// // @step(r'I wait (\d+) seconds?')
// // Need to see if it's possible to remove the need for this on most occasions
// When(/I wait (\d\.?\d?+) seconds?/, async (seconds) => {
//   await scope.afterStep(scope, {waitForTimeout: (parseFloat(seconds) * 1000)});
// });

// /* Here to make writing tests more comfortable. */
// When("I do nothing", async () => { await scope.afterStep(scope); });

// // I should see the term "([^"]+)"

// Then(/I (should|should not) see the phrase "([^"]+)"/i, async (expectation, phrase) => {
//   /* Allows emphasis with capital letters. Note: In Chrome, this `innerText` gets only visible text */
//   const bodyText = await scope.page.$eval('body', elem => elem.innerText);
//   if ( expectation === 'should' ) { expect(bodyText).to.contain(phrase); }
//   else { expect(bodyText).not.to.contain(phrase); }

//   await scope.afterStep(scope);
// });

// // For things that have double quotes in them
// Then(/I (should|should not) see the phrase '([^']+)'/i, async (expectation, phrase) => {
//   /* Allows emphasis with capital letters.
//   *    Note: In Chrome, this `innerText` gets only visible text */
//   const bodyText = await scope.page.$eval('body', elem => elem.innerText);
//   if ( expectation === 'should' ) { expect(bodyText).to.contain(phrase); }
//   else { expect(bodyText).not.to.contain(phrase); }

//   await scope.afterStep(scope);
// });

// Then('the question id should be {string}', async (expected_id) => {
//   /* Looks for a santized version of the da question `id:` as
//   *     it's written in the .yml.
//   *     docassemble: re.sub(r'[^A-Za-z0-9]+', '-', interview_status.question.id.lower()) */
//   let clean_id = expected_id.toLowerCase().replace(/[^A-Za-z0-9]+/g, '-');
//   let expected_class = 'question-' + clean_id;
//   let elem_classes = await scope.page.$eval(`body.${ expected_class }`, (elem) => {elem.classList});
//   expect( elem_classes ).to.contain( expected_class );

//   await scope.afterStep(scope);
// });

// Then('I will be told an answer is invalid', async () => {
//   // Wait for animation of invalid messages. Do we need to wait for page to reload too?
//   await scope.page.waitFor( 500 );

//   let error_message_elem = await scope.page.$(`.alert-danger`);
//   if ( !error_message_elem ) {
//     error_message_elem = await scope.page.$(`.da-has-error`);
//   }
//   expect( error_message_elem ).to.exist;

//   await scope.afterStep(scope);
// });

// // "" is selected/picked?
// // "the first "blah" checkbox is checked"
// let the_checkbox_is_as_expected = new RegExp(`the ${ specified } checkbox is (checked|unchecked)`);
// Then(the_checkbox_is_as_expected, async (label_text, expected_status) => {
//   /* Sees if the specified, or first, "checkbox" label "containing"
//   *    `label text` has the expected status.
//   * This does not allow for `the first "They are a minor" checkbox is checked`, etc.
//   */
//   let descriptor = label_text;
//   let selector = `#daform label[role="checkbox"]`;

//   // Possibly abstract
//   let elem = null;
//   if (descriptor in ordinal_to_integer) {
//     let elems = await scope.page.$$( selector );
//     elem = elems[ ordinal_to_integer[ descriptor ]];

//   } else if ( descriptor ) {
//     // Comes back as plain old node instead of ElementHandle
//     elem = await scope.page.$$eval(selector, (elems, descriptor) => {
//       for ( let one_elem of elems ) {
//         if (( one_elem.textContent).includes( descriptor )) { return elem; }
//       }
//       return null;
//     }, descriptor);
  
//   // The first label
//   } else { [elem] = await scope.page.$$( selector ); }

//   if (!elem) { throw `The ${descriptor} element doesn't exist.` }
//   // Do we need the `if`? Can we just do it?
//   // If this is just a plain old node
//   else if ( !elem.constructor.name === 'ElementHandle' ) {
//     elem = await scope.page.evaluateHandle((elem)=>elem, elem);
//   }

//   let is_checked = await elem.evaluate((elem) => {
//     return elem.getAttribute('aria-checked') === 'true';
//   });

//   // let checked_elems = await scope.page.$$( `label[aria-checked="true"]` );
//   // let is_checked = await scope.page.evaluate( async(elems, label_text) => {
//   //   for ( let elem of checked_elems ) {
//   //     if ( elem.getAttribute(`aria-label`).includes( label_text ) ) { return true }
//   //   }
//   //   return false;
//   // }, checked_elems, label_text );

//   let what_it_should_be = expected_status === 'checked';
//   expect( is_checked ).to.equal( what_it_should_be );

//   await scope.afterStep(scope);
// });


// // `the first "blah" checkbox in "" is checked`
// // `the ordinal "blah" in "blah" is checked`
// // Haven't figured out ordinal for container yet
// let the_checkbox_is_as_expected = new RegExp(`the ${ ordinal } ?(?:"([^"]+)")? checkbox ?(?:in "([^"]+)")? is (checked|unchecked)`);
// Then(the_checkbox_is_as_expected, async (ordinal=`first`, label_text='', where='', expected_status) => {
  
//   let index = ordinal_to_integer[ ordinal ];

//   // If possible, get the group to which this checkbox belongs
//   let group_identifier_elem = null;
//   if ( where ) {
//     let identifier_xpath = `//*[@id="daform"]//label[contains(text(), ${ where })][1]`;
//     [group_identifier_elem] [group_identifier_elem] = await scope.page.$x( identifier_xpath );
//   }
//   if (where && !group_id_elem) { throw `I did not find "${ where }"`; }

//   // Get the element itself
//   let group_name = await group_id_elem.evaluate(( elem ) => elem.getAttribute('for'));
//   let label_xpath = `//*[@id="daform"]//label`;
//   if ( where ) { label_xpath += `[@name="${ group_name }"]`; }
//   if ( label_text ) { label_xpath += `[contains(text(), ${ label_text })]`; }
//   label_xpath += `[${ index + 1 }]`;
//   let [elem] = await scope.page.$x( label_xpath );


//   // // let elems = await scope.page.$$( selector );
//   // // if ( label_text ) {
//   // //   elems = await scope.page.$$eval( selector, function (elems, scope, label_text) {

//   // //     let label_matchers = [];
//   // //     for ( let elem of elems ) {
//   // //       if ( (elem.textContent).includes( label_text ) ) {
//   // //         // Ensure elem is a puppeteer ElementHandle
//   // //         let handle = await scope.page.evaluateHandle((elem) => elem, elem);
//   // //         label_matchers.push( handle );
//   // //       }
//   // //     }  // end for matching elems
//   // //     return label_matchers;

//   // //   }, scope, label_text);
//   // // }

//   // // if ( !elems ) {
//   // //   throw `I can't find the ${ordinal + ' '}${label_text + ' '}checkbox in ${where || 'an unnamed container'}`;
//   // // }

//   // // let elem = elems[ index ];

//   // let is_checked = await elem.evaluate((elem) => {
//   //   return elem.getAttribute('aria-checked') === 'true';
//   // });
//   // let what_it_should_be = expected_status === 'checked';
//   // expect( is_checked ).to.equal( what_it_should_be );

//   await scope.afterStep(scope);
// });


// // =========================
// // Navigational
// // =========================
// // @step(r'If I see it, I will tap the link "([^"]+)"')
// // I tap the ${ specified } link "([^"]+)"

// // Also sometimes not navigational
// // @step(r'I tap the button "([^"]+)"')
// // I tap "([^"]+)" (can this be a button or link or anything?) (Include 1st, 2nd, etc?)

// // @step(r'I tap the "([^"]+)" button')
// // @step(r'I tap the link "([^"]+)"')
// //* Maybe go with 'I tap'? Is that possible? Maybe we should stick to the script.


// // =========================
// // Interactive
// // =========================
// //x @step(r'I upload the file "([^"]*)"')
// //x @step(r'I reload the screen')
// //x @step(r'I tap the back button')
// //x @step(r'I tap the question back button')
// //x @step(r'I tap the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) link "([^"]+)"')
// //x @step(r'I tap the final link "([^"]+)"')

// // @step(r'I tap inside the signature area')
// // (I|They) sign

// // @step(r'I set the text area to "([^"]*)"')
// // I type "([^"]*)" in the ${ specified } textarea

// //* I clear the textarea?

// // @step(r'I select "([^"]+)" from the menu')
// // @step(r'I go to the help screen')
// // Still 'I tap'? A possible alterntive to it if someone's really struggling to make the text match?

// // @step(r'I go back to the question screen')

// // Combine these two
// // @step(r'I set "([^"]+)" to "([^"]*)"')
// // @step(r'I set the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) "([^"]+)" to "([^"]*)"')

// // @step(r'I select "([^"]+)" in the combobox')

// // @step(r'I set the combobox text to "([^"]*)"')

// // I set the "([^"]*)" dropdown to "([^"]*)"

// // These could be better differentiated
// // @step(r'I select "([^"]+)" as the "([^"]+)"')  //* options
// // @step(r'I select "([^"]+)" as the (first|second|third|fourth|fifth|sixth|seventh|eighth|ninth|tenth) "([^"]+)"')
// //* All could be combined with regex?
// // I pick?

// // @step(r'I choose "([^"]+)"')  //* dropdown
// // I choose "([^"]+)" from the ${ descriptor } dropdown

// // @step(r'I should see that "([^"]+)" is "([^"]+)"')  //* What do? Anything with label

// // @step(r'I set the text box to "([^"]*)"')
// // @step(r'I set text box ([0-9]+) to "([^"]*)"')  //* combined with above
// // I type "([^"]*)" ?(?:in)? (?:the)? ?("([^"]*)")? (?:text box)?

// // I clear the textbox

// //* Radio buttons or checkboxes
// // @step(r'I tap the "([^"]+)" option under "([^"]+)"')
// // @step(r'I tap the "([^"]+)" option')
// // @step(r'I tap the option "([^"]+)" under "([^"]+)"')
// // @step(r'I tap the option "([^"]+)"')

// // @step(r'I exit by taping "([^"]+)"')

// // @step(r'I unfocus')  //* Not sure of this one
// // I tap somewhere else?




