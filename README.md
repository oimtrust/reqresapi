# Getting Started
## For Your Information
- For API test, we use mocha (https://mochajs.org/) and chai (https://www.chaijs.com/)

### Mocha
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

### Chai
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

## Development Preparation

### Clone Repo
- Clone from https://github.com/oimtrust/reqresapi (choose `main` branch)
- Copy Environment File with command `cp .env.example .env` and setup the value of variable in env file

### Setup Node, NPM, Yarn
For windows and mac user you can [download node](https://nodejs.org/en/) and install.
For linux user you can install with ppa the tutorial can be found [here](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04).

After node and npm installed, we recommend you to also install yarn, the tutorial can be found [here](https://classic.yarnpkg.com/en/docs/install).

### Package Installation
Before start development and running the test you need to install packages that needed for reqresapi. To install them, you need to do these step: 
- Go to your reqresapi repo directory in your local machine with your favorite terminal.
- and run `yarn` in your terminal
- wait, and done

# Code Rules

## Test Structure

- Use the `describe` function to create a group of test cases
- Use the `it` function to create a test
  - The test created with `it` should follow the test cases created in testlink.
- Example:
  ```js
   describe('As a guest, I want to register', () => {

      it('Should unsuccessful register when insert invalid data', async () => {
          const response = await ReqresAPI.register(data.INVALID_REGISTER)

          assert.equal(response.status, 400)
          assert.containsAllKeys(response.data, ["error"])
          assert.isString(response.data.error)
      });
      it('Should successfully register using valid data', async () => {
          const response = await ReqresAPI.register(data.VALID_REGISTER)

          assert.equal(response.status, 200);
          assert.containsAllKeys(response.data, ["id", "token"]);
          assert.isNumber(response.data.id);
          assert.isString(response.data.token);
      });
  });
  ```

## File Naming
- Use dot (`.`) to separete type file, example `login.data.js` and `login.test.js`.
- For scenario file, it should have `[name scenario].test.js`.
- For scenario file that has more than 1 word using "-", example: `payment-bca.test.js`

## Variable Naming
- All variables, files, functions names **SHOULD BE DECLARED IN ENGLISH!** Any Bahasa declaration will be rejected.
- Make all naming concise and clear.

# Folder Structure

- Data
  If we need use data (such as input from csv, or raw data), should be created here

- Helper
  If we need create function helper that can be used for steps, should be created here

- Page Elements
	This folder consist of file that mention all element object from each page, example: `login.page.js`.
  
- Scenario
  All scenario files that describe what/flow of testing should be created here, example: `login.test.js`.
 
# Run Test
You can run the test by run these command in your terminal:
`yarn run mocha:test`
