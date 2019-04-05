# Higher-Order components

## Running the application

```
yarn install && yarn start
```

Open _Higher-Order components_ subpage.


## Higher-Order Components

[Higher-Order functions][0] take either functions as arguments or return
functions as a result.

[Higher-Order components][1] take React components as arguments and return new,
enhanced React components. This is a standard pattern which is present in most
contexts that deal with composable objects.

Check out [HigherOrderComponentsExample](https://github.com/urmastalimaa/interactive-frontend-development/lecture_4/src/higher_order_components/HigherOrderComponentsExample.js).

## Higher-Order Components vs Hooks

Custom React Hooks allow reusing cross-cutting functionality similarly to
higher-order components. Note that Hooks can only be used with function
components. Higher-Order Components are however more flexible and can be used
do achieve *anything* while Hooks are somewhat limited. This is both a pro
**and** a con of Higher-Order Components.

[0]: https://en.wikipedia.org/wiki/Higher-order_function
[1]: https://reactjs.org/docs/higher-order-components.html
