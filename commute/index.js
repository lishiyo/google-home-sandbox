/**
Get the current l train status.
**/

const Xray = require('x-ray');
const x = Xray();

// ==== API.AI actions ====

const L_TRAIN_STATUS = 'l.train.status';
const ACTION_REPEAT = 'Ltrain.Ltrain-repeat';

// ==== data sources
const SOURCE_ONE = 'http://www.isthelrunning.com/';

// API.AI Contexts/lifespans
const RETRY_CONTEXT = "LTrain-followup"
const DEFAULT_LIFESPAN = 2;
const END_LIFESPAN = 0;

// === DEFAULTS
const NO_INPUTS = [
  'I didn\'t hear that.',
  'If you\'re still there, say that again.',
  'We can stop here. See you soon.'
];

/**
* Scrape for L train from the site.
**/
function getLTrainStatus(app) {
  x(SOURCE_ONE, 'div#LTrainStatus', {
    status: 'span.TitlePlannedWork',
    detail: 'a.plannedWorkDetailLink'
  })(function(err, obj) {
    let resp;
    if (err) {
      resp = 'Oh shoot, something went wrong.'
      // Add retry/repeat context to outgoing context list
      app.setContext(RETRY_CONTEXT, DEFAULT_LIFESPAN, {});
      app.ask(resp + " Try again?", NO_INPUTS)
    } else {
      // Replace outgoing context with lifespan = 0 to end it
      app.setContext(RETRY_CONTEXT, END_LIFESPAN, {})
      resp = "Ok, MTA is saying: " + obj.status + ". " + obj.detail
    }

    app.tell(resp);
  })

  return;
}

module.exports = {
  L_TRAIN_STATUS: L_TRAIN_STATUS,
  getLTrainStatus: getLTrainStatus
}
