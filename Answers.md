# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

        1. ReactJS is a JavaScript library that offers tools to make development more streamlined, reusable, and manageable. It is component based, with a unidirectional data flow. This makes debugging much easier, because you can follow a problem down the line and fix it in its individual component. It also helps us to work with the DOM in a much more efficient manner, utilizing what’s known as the virtual DOM, which only updates what it needs to, not the entire page every time something changes.

1. What does it mean to think in react?

        2. To think in React is to see everything as a component of something else. Each piece is compartmentalized and individualized. The whole is made up of the parts.

1. Describe state.

        3. State is like a current status, such as true or false, or a number value, etc.

1. Describe props.

        4. Props are data that is passed down through components by means of “prop drilling.” Sub components receive props and don’t need to know what it is beforehand. You just tell it “You’re going to receive some data, use it in this way.”

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

        5. Side-effects are things that happen outside of our component, such as an api call. They are unpredictable in nature, so we use the useEffect hook that React provides us with to better control its behavior. We can “subscribe” to specific props or state changes by adding them as an array as a second parameter in our useEffect function.
