# Echo Example
## Set up
- Run `$ npm run firebase -- login`
- Run `$ npm run firebase -- use --add [YOUR_PROJECT]`
- Run `$ npm run deploy`
- Create `action.json` based on `action.template.json` (Replace LOCALE and YOUR_ENDPOINT_URL with yours)
- Run `$ PROJECT=[YOUR_PROJECT] npm run deploy-action`

## Debug
- Run `$ npm run start` to wake up `firebase functions:shell`
- Prepare a json file as request to test code, then run `firebase > echo({ method: 'POST', json: true, body: require("INPUT_JSON_FILE") })` in functions:shell (you can easily copy request parameter from  REQUEST tab of Actions on Google Simulator)
