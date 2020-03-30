# Jest Study

# What is Jest Study

Here are a few questions from the study to explore:

* [What is testing?](#What-is-testing)
* [What is Jest?](#What-is-Jest)
* [What should you consider before writing Jest tests?](#What-should-you-consider-before-writing-Jest-tests)
* [How do you create a Basic Jest test?](#How-do-you-create-a-Basic-Jest-test)
* [How do you test React Components with Jest?](#How-do-you-test-React-Components-with-Jest)
* [How do you create a smoke test?](#How-do-you-create-a-smoke-test)
* [What is Snapshot testing?](#What-is-Snapshot-testing)
* [How do you implement a test suite?](#How-do-you-implement-a-test-suite)
* [](#)

<br>
<br>
<br>
<br>

# What is testing?

<dl>
<dd>

## Testing ensures that something is working.
**Testing is a way we know that something is safe and working as intended.** Components need to be tested as well. Tests are a routine that runs the subject under test (i.e. the testing code) and determines if the code tested conforms to expectations. You want to include tests in all of your projects because it serves as documentation that illustrates the way code should be used and provides a quick way to check if any new features that have been added break your existing code (i.e. regression).

## A "Unit Test" tests isolated peices of code.
**Testing individual components is called a "unit" test.** When we perform a unit test, we test small, isolated peices of code. Although Unit testing can be useful for testing functions or block of code, but doesnt really have any networking or database operations. Tests that involve components are usually done in isolation so that you know that each component is working as expected. In React, a unit is taken to be a component since it has a clearly defined purpose and its behavior is clearly understood. When you test a component, you are ensuring that the component is functioning as expected under normal circumstances.

## An "Integration Test" tests multiple components together.
When two or more units are combined, they form an interface, and when two or more interfaces are combined they form a component. When we want to test whether or not there are any bugs in those components when they are put together that we need to perfom an integration test. An integration test determines if independently developed units work correctly when they are connected to one another. Integration tests also help identify problems that occur at the interface level. Additionally, integration tests also ensures that the functional, performance, and reliability between units are integrated and working properly. A Systems Test tests how the entire app behaves and so on.

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is Jest?

<dl>
<dd>

## Jest is a library to test JavaScript code.
**Jest is a powerful JavaScript testing framework installed and configured on create-react-app.** Unlike Mocha (a test runner), chai (an assertion library), Jest runs tests but also functions as your assertion library (which you can use to make sure one thing is equal to other things). Jest can also take snapshots of a component. Additionally, Jest is very fast. Although the Jest library is well suited for the React library, it is not limited to that and can test any JavaScript code. Since the testing structure of Jest is already setup, to test a component you simply need to setup your component, setup your expectations for that component, and Jest will do the rest!

</dd>
</dl>

<br>
<br>
<br>
<br>

# What should you consider before writing Jest tests?

<dl>
<dd>

## Think about how the function/component should be tested.
**To figure out how the function/component should be tested, you need to think about the specific rules the problem needs to follow.** For example, if the function were to test a fizz-buzz function,you could add tests for whether or not a given number is divisible by 3 is equal to "fizz", divisible by 5 is "buzz", etc. To verify that your rules are being followed, you would need to test the function over and over again to make sure that if a certain number appears, the result will be equal to your test results. 

<br>

## Create a basic table of tests before you start coding.
**This basic table of tests will have test inputs, expected outputs, and a description of what the test is performing.** Below you have a number of tests. Each test has an input, a desired output, and a description of what the test is for. In normal circumstances, it is good to test the normal use cases. But it also important to test edge cases and even cases that you know will break.

| **Test**          |   **Input**      | **Output**      | **Description**         |
| ------------------| -----------------------------------| ------------------| --------------------------|
|   1               |  'a'             |   false         |   Is a string, must be a number.  |
|   2               |  3               |   true          |   Is divisible by 3 and will return "fizz".  |
|   3               |  -1              |   throw error   |   Only works for positive numbers.  |
|   4               |  4               |   false         |   Is NOT divisible by 3 or 5.  |

<br>

## Test Code is seperate from the actual code source.
When you create tests, you create seperate ```.test.js``` files from the source file. For example, is you had a function called "addItUp", in order to test that function you would need to create a seperate file called ```addItUp.text.js``` and then import content of the file (e.g. ```import addItUp  from './addItUp';```).

<br>

## All scaffolding for running code is provided by Jest.
When you run ```create-react-app```, everything that you need to utilize Jest testing is including and fully functioning. In test files, Jest will see ```it``` functions and know that it can invoke it.


</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you create a Basic Jest test?

<dl>
<dd>

## Have a file to test.
**Your test file can be anything from a simple JavaScript function to a complex React component.** In this case, we have a function ```isDivisible``` that tests to see if the input is divisible by 5. Note that if you are testing vanilla JavaScript, you still need to export that function so that it is accessible to Jest and other modules.

<br>

## Create a .test.js file.
**To create a test, you first need to create a ```.test.js``` file.** Ideally, you want to keep your test file in the same location as the file you wish to test. When you run your test, Jest (which comes configured when you run ```create-react-app```) will automatically look for files with ".test.js" or ".spec.js" and run them.
```
  src  >  myProgramFolder  >  index.test.js                                       // uses "test".
  src  >  myProgramFolder  >  index.spec.js                                       // uses "spec".
```

<br>

## Create a test suite for your test.
**A test suite helps organize the tens, hundreds, or even thousands of tests you write for your program.** Before you write your tests, it's best practice to first create a test suite to wrap around all of your associated tests. Because of this, output can become difficult to read for many tests, so you need to organize them into suites. Each suite focuses on a single component or functional area. In other words, all test cases in a single suite are related.
```JavaScript
  describe('Divisible by 5', function() {
    // test cases go in here.
  });
```

<br>

## Add a test function with expectations and matchers.
**The test function invokes the function to be tested with the input for for which you know the output and then compared the actual output to the expected output.** First, you need to use ```it``` to invoke Jest. The "it" function takes TWO parameters... a description of the test and the function itself. The description should be clear and unambiguous as it will help describe and identify the test. In the body, you can write the test code, including expected inputs, expected outputs, and actual outputs. At the end of your test, you need to use "expect" which essentially says "when you run this code, expect X". In Jest, the "expect" function provides [Jest Matchers](https://jestjs.io/docs/en/using-matchers) like ".toBe" to check the input. If it matches, the test will pass. If it does not match, then the test will fail.
```JavaScript
  describe('Divisible by 5', function() {
    it('Should NOT be possible to divide 24 by 5', function() {                   // The "it" function takes two parameters, the description and the function.
      const input = 24                                                            // Tested input value (the inserted parameter for the test).
      const expectedOutput = false;                                               // The expected output from this test (in this case false).
      const actualOutput = myFunction(input)                                      // The actual output is the tested function wth the input passed to it.
      expect(actualOutput).toBe(expectedOutput);                                  // The result of myFunction(25) is expected to be FALSE.
    });
  });
```
 
**You can add mutliple tests to your test suite.** This can be in the form of multiple individual test functions for each and every test or other tests grouped in seperate test suites.
```JavaScript
  describe('Divisible by 5', function() {
    it('Should NOT be possible to divide 4 by 5', function() {     
      expect(4).toBe(false);                                                      // expect 4 to be false.
    });
    it('Should be possible to divide 5 by 5', function() {    
      expect(5).toBe(true);                                                       // expect 5 to be true.
    });
    it('Should Not be possible to divide 5 by 5', function() {     
      expect(6).toBe(false);                                                      // expect 6 to be false.
    });
  });
```

<br>

## Run your test via npm test.
**When you are ready to test your code, you simply need to run ```npm test```.** If the test FAILS, then that means that there is an issue in your code that you need to address in order pass the test. Note that when you run the tests, it will continue to watch for changes, so you can chnage or modify your code and the tests will automatically run again.
```
    FAIL src/isDivisible/index.test.js                                            // "FAIL" notfication for failed test file.
      × Should NOT be possible to divide 24 by 5 (6ms)                            // Name of the test that failed.

      ● Should NOT be possible to divide 24 by 5                                  // Name of test.

        expect(received).toBe(expected) // Object.is equality                     // The test expected comparing two 2 values for equality.

        Expected: false                                                           // The expected value of the test should be FALSE.
        Received: true                                                            // HOWEVER, the value returns TRUE (so test fails).

          4 |   const input = 24;
          5 |   const expectedOutput = false;
        > 6 |   expect(leapYear(input)).toBe(expectedOutput);                     // The point of failure for the test.
            |                           ^
          7 | });

          at Object.<anonymous>.it (src/isDivisible/index.test.js:6:27)

    Test Suites: 1 failed, 1 total                                                // Summary of the tests which pass, fail, etc.
    Tests:       1 failed, 1 total
    Snapshots:   0 total
    Time:        1.952s, estimated 2s
    Ran all test suites related to changed files.
```

If the test passes (or you fix the issue that caused to test to fail), you will get a passing test.
```
    PASS src/isDivisible/index.test.js                                            // "PASS" notfication for passsing test file.       
      √ Should NOT be possible to divide 24 by 5 (4ms)

    Test Suites: 1 passed, 1 total                                                // Number of test suites tested.
    Tests:       1 passed, 1 total                                                // Number of tests tested.
    Snapshots:   0 total
    Time:        1.932s, estimated 2s
    Ran all test suites related to changed files.
```


</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you test React Components with Jest?

<dl>
<dd>

##  React testing tests exisiting UI
**A React component represents a single unit of code built to accomplish a single task.** Components are just like JavaScript code, so testing them is simply an extension of testing JavaScript functions. However, React components differe in a few ways. For example, when a react component is mounted on a browsers DOM when it is rendered so the component needs to be tested to work in that kind of environment. And since React is concerned with the "view" layer of the UI, you want to make sure no unexpected changes happen to the UI. React components can be simple or complex, so tests should cover every aspect of the components behavior including props, user events, and rendering.

<br>

## Testing components ensures that they behave as expected.
First test that ensures component renders to beging with (useful as a base to build on when your component heirarchy grows such as when a nested component breaks). Testing deeply nested components is refered to as a "smoke test". Second, "snapshot testing" compares the UI to a saved version  of the UI and informs you is the UI changed at all. If you did not intend to change the UI, you can address the code.


</dd>
</dl>

<br>
<br>
<br>
<br>

# What is a smoke test?

<dl>
<dd>

## A smoke test tests primary functionality before further testing.
**A smoke test, sometimes called "build verifcation testing", verifies that the most important functionality is working.** For example, a smoke test for a ecommerce application might involve signing in, adding something to a shopping cart, and checking out. Smoke tests are not intended to cover every permutation and edge case. Instead, they check that your application isnt broken so that additional testing isnt a waste of time


</dd>
</dl>

<br>
<br>
<br>
<br>

# What is Snapshot testing?

<dl>
<dd>

## Snapshots are saved versions of the UI rendered by the React component.
**Snapshots are a tool you can use when you want to make sure your UI does not chnage unexpectedly.** Snapshots in Jest use another package named react-test-renderer to get a snapshot of the component which can then be saved to a file for future use.

For example, a UI component is rendered, takes a snapshot, and then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match. When the test fails, either the change is unexpected or the reference snapshot needs to be updated to the new version of the UI component.

</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you perfom snapshot testing?

<dl>
<dd>

## Install the react-test-renderer package.
**Snapshots in Jest use another package named react-test-renderer to get a snapshot of the rendered output of the component which can then be saved to a file for future use.** To begin snapshot testing, you first need to install the ```react-test-renderer``` package. Also note that you need to add the -D falg which tells npm to install as a development dependency which will NOT be bundled with production code.
```
  npm install react-test-renderer -D
```

<br>

## Import react-test-renderer to your test file.
Of course, you will need to import the ```react-test-renderer``` file to your test file so that you can utilize it.
```JavaScript
  import renderer from 'react-test-renderer';
```

<br>

## Create your test case with snapshot functionality
**The test case will use the renderer method to create snapshot in JSON and then match the snapshot with an exisiting one.** Although you do not need to dedicate an entire test suite to testing a snapshot, in the example below, we'll test the ```MyComponent``` custom component.  

First, you need to call ```renderer``` and call the ```create``` method that takes the component to be rendered (e.g. ```Mycomponent```) and performs a render on it. Then, add the ```.toJSON``` method to creat a human-readable JSON file. Then when you expect what you made above, add the ```.toMatchSnapshot``` to perfom the snapshot comparison.
```JavaScript
    describe('Snapshot of MyComponent', function() {
    it('Should match previous snapshot', function() {   
      const myVar = renderer.create(<MyComponent />).toJSON();
      expect(myVar).toMatchSnapshot();
    });
  });
```

<br>

## 








</dd>
</dl>

<br>
<br>
<br>
<br>


