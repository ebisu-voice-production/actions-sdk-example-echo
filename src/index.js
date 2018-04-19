const functions = require('firebase-functions');
const app = require('actions-on-google').actionssdk();

const mainIntent = conv => {
  conv.ask('Hi! Can you say something? You can finish this conversation to say bye.');
};
const subIntent = (conv, rawInput) => {
  if (rawInput === 'bye') {
    conv.close('Goodbye!');
  } else {
    conv.ask(`You said, ${rawInput}. Can you say something?`);
  }
};

app.intent('actions.intent.MAIN', mainIntent);
app.intent('actions.intent.TEXT', subIntent);

exports.echo = functions.https.onRequest(app);
