# Jest Study

# What is Jest Study

Here are a few questions from the study to explore:

* [What is testing?](#What-is-testing)
* [What is Jest?](#What-is-Jest)
* [](#)
* [](#)
* [](#)
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
Jest is a JavaScript testing library. Unlike Mocha (a test runner), chai (an assertion library), Jest runs tests but also is your assertion library which you can use to make sure one thing is equal to other things. Jest can also take snapshots of a component. Additionally, Jest is very fast Although the Jest library is well suited for the React library, it is not limited to that and can test any JavaScript code. Since the testing structure of Jest is already setup, to test a component you simply need to setup your component, setup your expectations for that component, and Jest will do the rest!

</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you think about Jest test structure?

<dl>
<dd>

## Think about how the function/component should be tested.
To figure out how the function/component should be tested, you need to think about the specific rules the problem needs to follow. For example, if the function were to test a fizz-buzz function,you could add tests for whether or not a given number is divisible by 3 is equal to "fizz", divisible by 5 is "buzz", etc. To verify that your rules are being followed, you would need to test the function over and over again to make sure that if a certain number appears, the result will be equal to your test results. 

## Create a basic table of tests.
This basic table of tests will have test inputs, expected outputs, and a description of what the test is performing. Below you have a number of tests. Each test has an input, a desired output, and a description of what the test is for. In normal circumstances, it is good to test the normal use cases. But it also important to test edge cases and even cases that you know will break.

| **Test**          |   **Input**      | **Output**      | **Description**         |
| ------------------| -----------------------------------| ------------------| --------------------------|
|   1               |  'a'             |   false         |   Is a string, must be a number.  |
|   2               |  3               |   true          |   Is divisible by 3 and will return "fizz".  |
|   3               |  -1              |   throw error   |   Only works for positive numbers.  |
|   4               |  4               |   false         |   Is NOT divisible by 3 or 5.  |


</dd>
</dl>

<br>
<br>
<br>
<br>