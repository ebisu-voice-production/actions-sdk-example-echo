const ActionsSdkApp = require('actions-on-google').ActionsSdkApp;
const functions = require('firebase-functions');

const mainIntent = app => {
  app.ask('Hi! Can you say something? You can finish this conversation to say bye.');
};
const rawInput = app => {
  const rawInput = app.getRawInput();
  if (rawInput === 'bye') {
    app.tell('Goodbye!');
  } else {
    app.ask(`You said, ${rawInput}. Can you say something?`);
  }
};

exports.echo = functions.https.onRequest((request, response) => {
  const app = new ActionsSdkApp({ request, response });
  const actionMap = new Map();
  actionMap.set('actions.intent.MAIN', mainIntent);
  actionMap.set('actions.intent.TEXT', rawInput);
  app.handleRequest(actionMap);
});
