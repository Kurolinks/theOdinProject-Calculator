# **_The [Odin Project's](https://www.theodinproject.com/lessons/foundations-calculator) Calculator Project_**
1. Your calculator is going to contain functions for all of the basic math operators you typically find on calculators.
    - add
    - subtract
    - multiply
    - divide

2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5.

3. Create a new function "operate" that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

4. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
    - There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
    - Add a “clear” button.

5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

6. Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
    - You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
    - This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them.

7. Gotchas: watch out for and fix these bugs if they show up in your code:
    - Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).

    - You should round answers with long decimals so that they don’t overflow the screen.
    - Pressing “clear” should wipe out any existing data. Make sure the user is really starting fresh after pressing “clear”
    - Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

## **_Extra credit_**
+ Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display).
+ Add a “backspace” button, so the user can undo if they click the wrong number.

## **_Built  With_**
+ HTML
+ CSS
+ JavaScript
