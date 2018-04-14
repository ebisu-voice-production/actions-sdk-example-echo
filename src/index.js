const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
const functions = require('firebase-functions');

const NO_INPUTS = ["I didn't hear that."];

exports.echo = functions.https.onRequest((request, response) => {
  const app = new ActionsSdkApp({ request, response });

  const mainIntent = (app) => {
    const inputPrompt = app.buildInputPrompt(
      true,
      '<speak>Hi!</speak>',
      NO_INPUTS
    );
    app.ask(inputPrompt);
  };

  const rawInput = (app) => {
    if (app.getRawInput() === 'bye') {
      app.tell('Goodbye!');
    } else {
      const inputPrompt = app.buildInputPrompt(
        true,
        `<speak>You said, ${app.getRawInput()}</speak>`,
        NO_INPUTS
      );
      app.ask(inputPrompt);
    }
  }

  const actionMap = new Map();
  actionMap.set('actions.intent.MAIN', mainIntent);
  actionMap.set('actions.intent.TEXT', rawInput);

  app.handleRequest(actionMap);
});
