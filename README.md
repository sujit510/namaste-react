## Namaste React Course - Session 13 - Time to test - 05/02/2023
- TDD: Test Driven Development - This helps to write quality, non-breaking code. Nut its time consuming.
- Different types of testing:
    - Manual Testing
    - Automated testing - Code to test the code
        - Selenium
    - E2E Testing
    - Unit testing
    - Integration testing

- Unit testing and Integration testing are CORE RESPONSIBILITIES of a developer
- React Testing Library - its a part of Testing Library and its replacement of Enzyme
    - React Testing Library relies on JEST which is a JS testing framework
    - So we need to install both
    ```npm i -D ß@testing-library/react jest```
    - Next we need to initialise and configure jest using following:
    (npx because we need to use it only once)
    ```npx jest --init```
    - Answer as following:
        - TS: No
        - Env: jsdom
        - Coverage Report: yes
        - Provider for coverage: babel
        - Auto-clear  mock call?: yes
    - In package.json we need to set "test" script to run "jest" if its not already.
    - If we run ```npm run test```, it gives error as follows:
    ```As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.```
    - Now if we run ```npm run test```, it says it did not find any test case
    ```No tests found, exiting with code 1```
    - Lets add a test case:
        - Create a folder ```__tests__``` inside ```components``` folder
            - Because Jest by default automatically tracks and picks files under ```__tests__``` folder to run for testing
        - Inside ```__tests__``` add a file named as ```sum.test.js```
        - Add a file named as sum.js in components and add follwing simple function to it:
        ```
        const sum = (num1, num2) => num1 + num2;
        export default sum;
        ```
        - define the test case with ```test``` and ```expect``` statements.
            - ```test``` accepts 2 things:
                - summary: Some string summary about test case
                - callback: A function inside which we define actual test case using various ascertions like expect, toBe, etc.
            - So we define a test case as follows:
            ```
            test("Check sum of 2 positive numbers", () => {
                expect(sum(2, 5)).toBe(7)
            });
            ```
        - When we run the test, we will see error as follows:
        ```SyntaxError: Cannot use import statement outside a module```
        - This means we will need to install ```babel``` dependencies to make our code undertsnd ```import```
        ```npm i -D babel-jest @babel/core @babel/preset-env```
        - Create ```.babelrc``` file if not already to add few configurations:
        ```
        {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "targets": {
                            "node": "current"
                        }
                    }
                ]
            ]
        }
        ```