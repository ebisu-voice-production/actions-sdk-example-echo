# Echo Example
You need `gactions cli` to set up your project. If you do not have the environment to use gactions, you can install [here](https://developers.google.com/actions/tools/gactions-cli).
## Set up
- Run `$ npm run firebase -- login`
- Run `$ npm run firebase -- use --add [YOUR_PROJECT]` (If you already set a project, just run `$ npm run firebase -- use [YOUR_PROJECT]`)
- Run `$ npm run deploy`
- Create `action.json` based on `action.template.json` (Replace LOCALE and YOUR_ENDPOINT_URL with yours)
- Run `deploy-action` script
  - Mac OS, Linux
    - `$ PROJECT=[YOUR_PROJECT] npm run deploy-action`
  - Windows
    - `$ gactions update --action_package action.json --project [YOUR_PROJECT]`

## Debug
- Run `$ npm run start` to wake up `firebase functions:shell`
- Prepare a json file as request to test code, then run `firebase > echo({ method: 'POST', json: true, body: require("INPUT_JSON_FILE") })` in functions:shell (you can easily copy request parameter from  REQUEST tab of Actions on Google Simulator)
