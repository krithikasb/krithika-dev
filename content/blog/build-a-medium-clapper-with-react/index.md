---
slug: "/posts/build-a-medium-clapper-with-react/"
date: 2019-02-21
title: "Build a Medium clapper with React"
draft: false
description: "In this post, we’ll build a simple Medium clapper with React. But before we get to the clapper, let’s go over some basic concepts of React.."
categories: ["professional"]
keywords: [JavaScript,React,Clapper,Introduction]
canonical_url: "https://krithika.dev/build-a-medium-clapper-with-react"
---

In this post, we’ll build a simple Medium clapper with React. But before we get to the clapper, let’s go over some basic concepts of React: `props`, `state`, and `setState`.

<figure>

![](images2/build-a-medium-clapper-with-react-featured.png)

<figcaption>Photo by <a href="https://unsplash.com/@clemhlrdt?utm_source=medium&utm_medium=referral" class="figcaption-link">Clément H</a> on <a href="https://unsplash.com?utm_source=medium&utm_medium=referral" class="figcaption-link">Unsplash</a></figcaption></figure>

### What is React?

React is a JavaScript library with which you can build user interfaces. Each React Component must implement a `render()` method that returns what to display. A React Component can also take input data, which the `render()` method can access via `this.props`.

<iframe src="https://codesandbox.io/embed/react-intro-1-mxoey" width="1032" height="516" frameborder="0" scrolling="no"></iframe>

In this example, we pass the beverage as props to the App component (on line 17), and the App component displays “Hello, would you like a {beverage}?” in its `render()` method. Fork the sandbox above and try changing the beverage!

### Maintaining state

When we need a component to maintain and change an internal state, we can use `this.state`.

For instance, we can let our user refuse and choose another beverage. To add `chosenBeverage` to state, we add a constructor to our component, and set our initial value of `chosenBeverage` to a blank line. We display this in our `render()` method like, “No, I’d prefer some {chosenBeverage}.”

<iframe src="https://codesandbox.io/embed/react-intro-2-gu72y" width="1032" height="516" frameborder="0" scrolling="no"></iframe>

To let our user pick a beverage, let’s add a few buttons for different kinds of beverages. When the user clicks a button, we need to change our state to reflect the change in `chosenBeverage`. We can do this using a `chooseBeverage()` function, which takes the chosen beverage as a parameter. Since we need to change state, we call the `setState()` function, that takes an object which React will merge into state.

We add `onClick` parameters to our buttons to call the `chooseBeverage()` function when clicked.

Try it out for yourself here:

<iframe src="https://codesandbox.io/embed/react-intro-3-knc7x" width="1032" height="800" frameborder="0" scrolling="no"></iframe>

### Making a medium clapper

Now that we know how to use `props`, `state` and `setState`, let’s make our medium clapper!

To keep track of the number of claps, we set our initial value of `claps` to 0 and display the number of claps in the `render()` method:

<iframe src="https://codesandbox.io/embed/react-intro-4-1nvyw" width="1032" height="800" frameborder="0" scrolling="no"></iframe>

We add a function called `incrementClaps()`. This function calls `setState()` to increment the number of claps. Since we’re calculating the state based on our previous state, we use another version of `setState()`, one that takes an updater function as a parameter. The updater function takes the previous state and current props as input and returns an object that needs to be merged with state.

We add a clap button which has an `onClick` parameter to call the `incrementClaps()` function when clicked.

<iframe src="https://codesandbox.io/embed/react-intro-5-w6eoe" width="1032" height="1032" frameborder="0" scrolling="no"></iframe>

And there you have it! A simple medium clapper with React!
