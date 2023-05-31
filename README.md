# TestYou_Cypress

# Making for assessment for TESTYOU

# CYPRESS BASED TESTYOU AUTOMATION

Test automation project for UI end-to-end testing of TESTYOU. It uses [Cypress.io](https://cypress.io) library (that has Mocha test runner and Chai assertions built in)


## Installation

1. Install node.js:
https://nodejs.org/en/

2. Install dependencies:
Run the following command on terminal, in the root directory of the project -> 'Cypress-Web-Automation'

```bash
cd Cypress-Web-Automation
```

3. Run command `npm -i init` and follow walk through steps on terminal.

4. Run the following command to `npm install cypress`:


## How to run tests

1. Run the following command on terminal, in the root directory of the project-
```bash
npx cypress open
```

2. It will open the cypress UI. (wait for few minutes)

3. Select E2E testing on cypress open

4. Now, Choose a browser(chrome) and it's open new browser window

4. It's shown all test files and now select the file which you want to run (login.cy.js).


## For Report Generation
- Run command on terminal npx cypress run --spec cypress\e2e\login\login.cy.js
    Its run tests on headless mode and create a html report under project report folder

## GitHub integration
- Insatll visual code editor

- Open the command palette with the key combination of Ctrl + Shift + P.

- At the command palette prompt, enter git clone, select the Git: Clone command, then select Clone from GitHub and press Enter.

- When prompted for the Repository URL, select clone from GitHub, then press Enter.

- If you are asked to sign into GitHub, complete the sign-in process.

- Select (TestYou_cypress) the local directory into which you want to clone the project from main branch.