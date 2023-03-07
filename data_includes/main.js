PennController.ResetPrefix(null); // Shorten command names (keep this line here)

// Enable debug for now
// Don't forget to disable this later
// PennController.DebugOff();

var counterOverride = 5;

// Do show progress bar
var showProgressBar = true;

var shuffleSequence = seq(
  'consent',
  'practice1',
  'practice2',
  'practice3',
  'shared-intro',
  sepWith("timeoutSep", rshuffle(startsWith("PREFGm"), startsWith("pozzi"), startsWith("filledgap"), startsWith("STIMPY"))),
  'debrief'
);

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedSentence';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Please wait. Your data are being sent to the server.";
var completionMessage = "Thank you for your participation. Your completion code is 592EE400. To complete this experiment, go to: https://app.prolific.co/submissions/complete?cc=592EE400";
var completionErrorMessage = "There was an error in sending your data to the server. You may still complete this experiment. Your completion code is 592EE400. Please go to: https://app.prolific.co/submissions/complete?cc=592EE400";

// Controller settings.
var defaults = [
  "Question", {
    hasCorrect: true,
    presentHorizontally: false
  },
  "EPDashedSentence", {
    mode: "speeded acceptability",
    display: "in place"
  }
];

// Items array.
var items = [

  ["consent", "Form", { consentRequired: true, html: { include: "consent.html" } }],
  ["intro", "Form", { consentRequired: true, html: { include: "intro.html" } }],
  ["debrief", "Form", { consentRequired: true, html: { include: "debrief.html" } }],

  ['shared-intro', "Form", { consentRequired: false, html: { include: "practice1.html" } }],
  ['shared-intro', "Form", { consentRequired: false, html: { include: "practice2.html" } }],
  ['shared-intro', "Form", { consentRequired: false, html: { include: "practice3.html" } }],


  ['shared-intro', Separator, { transfer: 1000, normalMessage: "", errorMessage: "Wrong answer. Please read slowly and carefully." }, DS, { s: "This sentence is to get you used to the reading style." }],
  ['shared-intro', Separator, { transfer: 1000, normalMessage: "", errorMessage: "Wrong answer. Please read slowly and carefully." }, DS, { s: "This is another sentence, which is a bit more complicated than the one that came before it." }],

  ['shared-intro', Message, {
    consentRequired: false,
    html: ["div",
      ["p", "How was that? It is important that you move through the sentence carefully and deliberately, making sure that you understand each word as you go."],
      ["p", "Let's try some more."]
    ]
  }],

  ['shared-intro', Separator, { transfer: 1000, normalMessage: "", errorMessage: "Not the answer we were expecting. Be sure to read carefully." }, DS, { s: "At the ball, the prince waltzed and slowly smiled at the princess." }, Question, { q: "On the prince's face was a ___.", as: ["smile", "grimace"] }],
  ['shared-intro', Separator, { transfer: 1000, normalMessage: "", errorMessage: "Not the answer we were expecting. Be sure to read carefully." }, DS, { s: "Without warning, Geoffrey turned and screamed at the waiter who had embarrassed him." }, Question, { q: "The waiter ___.", as: ["embarrassed Geoffrey", "felt embarrassed by Geoffrey"] }],
  ['shared-intro', Separator, { transfer: 1000, normalMessage: "", errorMessage: "Not the answer we were expecting. Be sure to read carefully." }, DS, { s: "The trainee talking to the barista lazily made a latte and didn't even try to make a design on top." }, Question, { q: "The trainee was probably ___.", as: ["not very attentive", "following procedure"] }],
  ['shared-intro', Separator, { transfer: 1000, normalMessage: "", errorMessage: "Not the answer we were expecting. Be sure to read carefully." }, DS, { s: "Madame de Plessy sat up all night worrying about her son who was on the front lines." }, Question, { q: "Madame de Plessy was concerned about ___.", as: ["her son", "her husband"] }],

  ['shared-intro', Message, {
    consentRequired: false,
    html: ["div",
      ["p", "Alright, that's it for practice! If you got any wrong, that's OK. Just be sure to read naturally but carefully, making sure you understand each word as you go. Press any key when you're ready to begin."]
    ]
  }],

  ['shared-intro', "Separator", { transfer: 4000, normalMessage: "Hands in place! Your first sentence of this block will start soon." }],

  ["timeoutSep", Separator, { transfer: 1000, normalMessage: "", errorMessage: "Not the answer we were expecting. Be sure to read carefully." }],

  //// Shared experimental items + fillers
  [["pozzi-gram-sg-sg", 1], DS, { s: "The gossip in the camp routinely angers the officer, because it would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-gram-pl-sg", 1], DS, { s: "The gossip in the camps routinely angers the officer, because it would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-ungr-sg-sg", 1], DS, { s: "The gossip in the camp routinely anger the officer, because it would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-ungr-pl-sg", 1], DS, { s: "The gossip in the camps routinely anger the officer, because it would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-gram-sg-pl", 1], DS, { s: "The gossip in the camp routinely angers the officer, because they would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-gram-pl-pl", 1], DS, { s: "The gossip in the camps routinely angers the officer, because they would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-ungr-sg-pl", 1], DS, { s: "The gossip in the camp routinely anger the officer, because they would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
  [["pozzi-ungr-pl-pl", 1], DS, { s: "The gossip in the camps routinely anger the officer, because they would often contain intentional inaccuracies." }, Question, { q: "The gossip was circulating ___.", as: ["in the camp", "at the police station"] }],
];