
# Google Home Sandbox

WIP. Random Google Actions I find useful for my own Google Home :) 

---

## Actions

*L train status*:
- Returns Real time status of the L train.
- **Triggers:** "L train status", "Is the L running?", "Is the L up?" 
- To use, in your API.AI project console -> go to Integrations -> Enter as "Additional triggering intents":
    * L train

## To run

https://developers.google.com/actions/get-started/deploy-fulfillment

Local testing:
- `npm run startem` - starts local cloud functions emulator
- `ngrok http 8010` -> get ngrok url (will be of form https://{random}.ngrok.io)
- in API.ai, change fulfillment url to: https://{random}.ngrok.io/factsAboutGoogle/us-central1/startSandbox

Deploy: 
- `npm run deploy` -> get `httpsTrigger url` 
- in API.ai, change fulfillment url to the `httpsTrigger url`
  - https://us-central1-factsapp-98181.cloudfunctions.net/startSandbox

## Setup Instructions

See the developer guide and release notes at [https://developers.google.com/actions/](https://developers.google.com/actions/) for more details.

1. Use the [Actions on Google Console](https://console.actions.google.com) to add a new project with a name of your choosing.
1. Click "Use API.AI" and then "Create Actions on API.AI".
1. Click "Save" to save the project.
1. Click on the gear icon to see the project settings.
1. Select "Export and Import".
1. Select "Restore from zip". Follow the directions to restore from the Sandbox.zip in this repo.
1. Deploy the fulfillment webhook to your preferred hosting environment
(we recommend [Google Cloud Functions](https://cloud.google.com/functions/docs/tutorials/http)).
1. In the Fulfillment page of the API.AI console, enable Webhook, set the URL to the hosting URL, then save.
1. In the quit_facts intent, check "End Conversation" for Actions on Google.
1. Open API.AI's Integrations page, open the Settings menu for Actions on Google.
1. Enter the following intents as "Additional triggering intents"
    * L train
1. Click Test.
1. Click View to open the Actions on Google simulator.
1. Type "Talk to my test app" in the simulator, or say "OK Google, talk to my test app" to any Actions on Google enabled device signed into your developer account.

For more detailed information on deployment, see the [documentation](https://developers.google.com/actions/samples/).

---

#### Base App: FactsAboutGoogle - Actions on Google Facts about Google Sample using Node.js

This is a knowledgable Assistant app that shares interesting facts about Google.
The sample introduces advanced features like custom entities, contexts,
and deep links. Use this app and you might see that it even knows about a
subject other than Google!

#### References and How to report bugs
* Actions on Google documentation: [https://developers.google.com/actions/](https://developers.google.com/actions/).
* If you find any issues, please open a bug here on GitHub.
* Questions are answered on [StackOverflow](https://stackoverflow.com/questions/tagged/actions-on-google).

