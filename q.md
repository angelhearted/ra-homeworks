# Programming questions and answers

## Programming languages

#### Declarative and imperative PL

## JS

* `this` value in classes and functions?

`this` is set during function call. When calling a function, it's undefined. When a method of a class, it's the caller class. When `new Class`, it's the caller class again. In a class method, it's the class once again. In a lambda, `this` is not affected and retains it's value as if there is no lambad function.

**!** `this` is set at the moment the function is called. If you pass `this.func` as a function reference, `this` is not carried through the call. Which means inside the function body `this` will be `undefined`. If you want to pass it with the reference, you need to use `this.func.bind(this)` or use the .

#### ES6 (2015) features

* Property shorthand

No key needed in object creation when assigning variable with identical key name.

```
const name = 'Kurt';
const age = 27;
const personData = {name, age};
// is same as
const personDataCopy = {name: name, age: age};
```

## React

How **ref**s work?

## Abbreviations

**PL** - programming language
