# CSS modules example.

## Running the application

```
yarn install
yarn build
open public/index.html
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

There are various ways to include CSS modules in Webpack build process. A very
basic example is given in this example.

### Explanation

[_webpack.config.js_](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/webpack.config.js)
specifies two loaders for `.css` files: 'style-loader' and 'css-loader'. The
first ones allows `import`-ing a CSS file in a JavaScript file and the latter
one allows using CSS imports.  There are other ways to output CSS with Webpack,
but importing the CSS file in the [top-level JavaScript
file](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_1/src/index.js)
suffices for this course.
