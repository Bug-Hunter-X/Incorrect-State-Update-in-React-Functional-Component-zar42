# Incorrect State Update in React Functional Component
This repository demonstrates a common error in React functional components when using the `useState` hook to manage component state.  The issue arises from attempting to directly mutate the state variable instead of using the setter function provided by `useState`.

## Bug
The `bug.js` file contains the erroneous code that directly assigns a new value to the `count` variable. This bypasses React's state management system, preventing the component from re-rendering with the updated value.

## Solution
The `bugSolution.js` file shows the correct approach.  The `setCount` function must be used to update the state, and the new state value must be derived from the previous state using the previous state value as an argument to `setCount`.  This ensures React correctly updates the component's UI.