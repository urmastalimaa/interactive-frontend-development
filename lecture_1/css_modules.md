# CSS modules example.

## Running the application

```
yarn install
yarn build:watch
open localhost:10001
```

#### Expected behaviour

* A title in the center of a greenish background is seen on the page

## CSS

Cascading Style Sheets are used in web browsers to define how HTML is rendered
visually: the color and font of text, alignment of different sections etc.

This course will not focus on how to build maintainable CSS.

However as with JavaScript files an important part of any source code is the
ability to split it into manageable chunks.  This can be achieved in CSS via
CSS modules.

### CSS modules

CSS modules, similarly to modules in JavaScript, cannot be resolved by the web
browser runtime. The modules must be resolved by the build tool.

There are various ways to include CSS modules into a build process. A very
basic example is given in this example.

### Explanation

[_rollup.config.js_](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/rollup.config.js)
uses [`postcss`][postcss] to process CSS files. Most notably, it uses the
`postcss-import` PostCSS plugin to allow `import`-ing one CSS file in another.

There are other methods to define and output CSS e.g. [css-in-js][css-in-js],
but the given example suffices for this course.

[postcss]: https://github.com/postcss/postcss
[css-in-js]: https://cssinjs.org
