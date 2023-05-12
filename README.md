## INSTALLING CYPRESS
- Create a folder on your local machine where you want to install cypress
- Then, install cypress in that folder by running the following command in the terminal<br>
  ### "npm install cypress --save-dev" <br>
  _*(You should have node and npm installed already. If not, just download and install node and npm from https://nodejs.org/en/download)*_
- Open the folder in your preferred text editor (VS Code or any other of your choice)
- Now that we have Cypress installed, we can launch it with:
  ### "npx cypress open"
- Click on the “E2E Testing” button on the left to get started
- Select the browser you want to run the tests with and click "Start E2E Testing"<br>
_* NB: If this is your first time running Cypress, you should click create a new empty spec. This creates a sample test script for you that you can run to test that cypress works.<br>

## INSTALLING AXE
#### Axe is a plugin used in cypress to run accessibility checks on any webpage.
- To install Axe, run the following command on your terminal<br>
  ### "npm install --save-dev cypress-axe axe-core"<br>


## RUNNING THE TESTS
- There are some config files that necessary to run cypress and will be in the cypress folder by default. Replace the files _*"cypress.config.js"*_ and _*"e2e.js"*_ with the ones I have included in this zip folder
- Copy the _*"assessment.cy.js"*_ and _*"accessibility.cy.js"*_ files in this zip folder and paste them in the *e2e Folder* in the folder where you have installed cypress
- In your terminal run<br>
  ### "npx cypress open"
- Click on the “E2E Testing” button on the left to get started
- Select the browser you want to run the tests with and click "Start E2E Testing"
- On the next screen, click on the "assessment.cy.js" file and cypress will run the test
- When that is done, you can navigate back to the list of test cases on the cypress runner and click on "accessibility.cy.js" to run the accessibility test<br>

## INCLUDED VIDEO RECORDING
#### For this assessment, I have included a video recording showing how I run the tests on my machine. You can access the video using the link https://www.loom.com/share/117dc72625a041248dba5f6d2c980243
