---
slug: "/posts/notes-on-ydkjs/"
date: 2019-04-03
title: "Notes on Kyle Simspon's YDKJS"
draft: false
description: "When I was in college, I mostly stuck to programming in C and C++, apart from occasional fiddling with Java, C#, and Python. I got a job as a Python programmer, and I read this book called Think…"
categories: ["professional"]
keywords: [JavaScript,Introduction,Programming,Front End Development]
canonical_url: "https://krithika.dev/notes-on-ydkjs"
---

When I was in college, I mostly stuck to programming in C and C++, apart from occasional fiddling with Java, C#, and Python. I got a job as a Python programmer, and I read this book called Think Python, which had practice exercises that were really fun to work on. This solidified my understanding of Python.

I worked on a web application using Flask, but a web application needs to have a user interface. Thankfully, my colleague had worked on a web app with a similar user interface, and I copied her JavaScript code and made as few changes to it as possible. I would dread every time I needed to make a change to the JavaScript, and try to put it off for as long as possible. The JavaScript code was like a fire that I would kindle from a distance and not actually get close to.

When I started working at Orangescape, my manager asked me if I’d be okay with working on the front end. I was okay with trying despite not knowing any React or JavaScript, because, why not! I learnt React from the [ReactJS docs](https://reactjs.org/docs/getting-started.html), and the ReactJS docs recommended MDN’s “[A reintroduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)”, and that’s as much JavaScript I learnt!

So when a colleague told me about this series of books called “You Don’t Know JS” by [Kyle Simpson (getify)](https://twitter.com/@getify) I was like, well, I _actually_ don’t know JS, and it sounds like a great idea to read this series!

The preface describes the general tendency of JavaScript developers to learn just enough JavaScript to get by and consider the rest of it “weird JS behaviour”. JavaScript is called a weird language and is ‘meme’d about a lot, and we do tend to stay within the “safe” parts of JavaScript.

<figure>

![](images2/notes-on-ykdjs-featured.png)

</figure>

But the author says we’re missing out.

> If at every point that you encounter a surprise or frustration in JavaScript, your response is to add it to the blacklist, as some are accustomed to doing, you soon will be relegated to a hollow shell of the richness of JavaScript.

The book is about understanding all parts of JavaScript, and learning how and why JavaScript behaves the way it does. It’s about the specific core parts of JavaScript that are most misunderstood and not understood well enough.

The first chapter is called “Into Programming”. I could’ve skipped this, because it introduced programming concepts that I’m already familiar with. My favourite part of this chapter was a discussion about the assignment operator. When we write, say, `a = 10`, we mean, assign the value `10` to the variable `a`. The author says this could be confusing or non-intuitive for people who are new to programming. He says using a different syntax, say, `10 -> a` is better to indicate that the value `10` is assigned to the variable `a`. I’m used to syntax like `a = 10`, because I read it as “`a` equals `10`”. But I remember thinking about this when I was programming on an 8086 in college: the syntax for a move is `mov ax, 10h`, which means move the value `10h` to the register `ax`, and I wonder if syntax like `mov 10h, ax` makes it more understandable (to me).

The second chapter was called “Into JavaScript”, which introduced a few JavaScript concepts. Quite a few sections in this chapter seemed very incomplete, and had me going “Wait what?”, but the chapter was peppered with suggestions that I refer to the other parts of this series for a deeper understanding of the concepts explained. Here are a few things from the chapter that got me thinking:

1.  Loose equals: I used to think of loose-equals as something to be used only when I’m sure the values on both sides are the same type. I’ve even read styleguides that tell you to completely avoid loose-equals. The author explains that loose-equals is equality with coercion allowed, and links to the [ES5 specification for loose equals](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3). This turns out to be an easily readable algorithm for something that I thought was “weird”. I even found a really cool visualisation of the algorithm on [https://nem035.github.io/js-equality-algorithms/](https://nem035.github.io/js-equality-algorithms/)
2.  Hoisting: I had no idea that I could declare `var`s after I use them, even though I was pretty comfortable with declaring functions after I use them. The author says we can think of `var` declarations as conceptually being moved to the top of the scope, making the `var` available throughout the scope. However, he says we should not rely on hoisting to declare variables later, because that’d make it confusing.
3.  Closures: This section has an enlightening example that shows how closures can access a function’s variables even after the function has been executed. This reminds me of [Dan Abramov](https://twitter.com/dan_abramov)’s blog on [the difference between function and class components](https://overreacted.io/how-are-function-components-different-from-classes/) where he says function components “capture” props. I think I’ll need to understand closures well before I can understand this blog post.
4.  `this`: The `this` identifier does not refer to the function in which it appears! There are examples of the four ways in which `this` is set, and I’m told to refer to “this and Object Prototypes” for more info.
5.  Prototypes: When I look up array or object methods on MDN, the headings are of the type “Array.prototype.filter()”. I have a vague idea that a prototype is where the object’s default properties and methods are declared, and this chapter has an example illustrating how prototype linkage works, and suggests that I read chapters 4–6 of the title “this and Object Prototypes”.

The third chapter is titled “Into YDKJS” and it’s a summary of the rest of the titles in the series:

1.  In Scope and Closures, he says JavaScript actually gets compiled, not interpreted!
2.  In this and Object Prototypes, he takes a stance against JS developers using object Prototypes to emulate classes and inheritance, and suggests we follow a pattern that he calls “behaviour delegation”.
3.  In Types and Coercion, he suggests that type coercion is an underestimated tool that _we should be using in code_! This is a stance against the lint rules that throw errors whenever I use loose-equals.
4.  In Async and Performance, he says asynchrony is required for high performance, and describes why callbacks are insufficient for asynchronous programming. He introduces promises and generators to fill this gap.
5.  In ES6 and Beyond, he lists exciting ES6 things to look forward to.

The last chapter was difficult for me to read, because I wanted concrete explanations for everything he said. I’m looking forward to reading the other titles of You Don’t Know JS!
