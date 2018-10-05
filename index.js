var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to the concussion skill', 'Try saying hello');
  },

  'Hello': function () {
    this.emit(':tell', 'Hello there and goodbye!');
  },

  'AMAZON.FallbackIntent': function () {
      this.emit(':ask', `OK. Please speak another patient number`, `Please speak another patient number.`);
  },

  'AMAZON.StopIntent': function () {
      // State Automatically Saved with :tell
      this.emit(':tell', `Goodbye.`);
  },
  'AMAZON.CancelIntent': function () {
      // State Automatically Saved with :tell
      this.emit(':tell', `Goodbye.`);
  },

  'AMAZON.HelpIntent': function () {
      this.emit(':ask', `Welcome to the lab results skill. Use this skill to obtain a patient\'s blood work or diagnostic reports.`, `First, tell me the patient number.`);
  },

  'AMAZON.NavigateHomeIntent': function () {

      this.emit(':ask', 'Would you like a blood test or a diagnostic report?');

  },

  'Unhandled': function () {
      this.emitWithState('AMAZON.HelpIntent');
  }


};
