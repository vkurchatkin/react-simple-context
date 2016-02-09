# react-simple-context

React's context API is made hard to use, so that developers would be discouraged
to use it unless absolutely necessary. This API makes using context easy! With
`react-simple-context` you will never have to use props again. Just use context!

## API

`setContext(context: object, el: ReactElement): ReactElement`

`getContext(fn: (context: object) => ReactElement): ReactElement`

## Example

```js


// store everything you will ever need in context
const App = () =>
  setContext({ foo: 'bar' }, <MyApp/>);

// get your data whenever you want. it's like globals, but way better
const MyApp = () =>
  <div>
    {getContext(({ foo }) =>
      <h1>{foo}</h1>
    )}
  </div>
```
