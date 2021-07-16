# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

The Context API allows developers to consume state at any level of sub-component that has been provided at a level above it. This eliminates the need to pass un-needed parts of state through one or more intermediate-level components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store represents the state. It is immutable, and may only be replaced in whole by a new version of state that has been acted upon by a reducer through a defined action. An action is an object with a type property which describes the purpose of the action. It may contain other properties, such as a data payload, which are needed in order to complete the action. A reducer is a function that takes as parameters the current state and an action object. It returns a new replacement for state that has been processed according to the action object property type.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

"redux-thunk" is middleware that allows us to invoke a function (a "thunk") instead of directly dispatching an action. This allows us to dispatch asynchrouns actions, for example, or allows us to evaluate other state to modify or cancel an action before dispatching it.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I am most comfortable with props. Seems very straightforward, and we haven't yet encountered projects with enough complexity to demonstrate problems using them. We also haven't discussed the resource demand consequences of any of the systems we have learned, which would have some influence on my choice.

 Having said that, I really like the idea of reducers and the of having immutable state with defined actions. That entralizes all your stateful logic in one place, with only known and explicit means of making changes, making bugs and unexpected state changes easier to track down.