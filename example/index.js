import React from 'react';
import ReactDOM from 'react-dom';
import { setContext, getContext } from '../src/main.js';

// store everything you will ever need in context
const App = () =>
  setContext({ foo: 'bar' }, <MyApp/>);

const MyApp = () =>
  <div>
    <Comp/>
  </div>

// get your data whenever you want. it's like globals, but way better
const Comp = () =>
  getContext(({ foo }) =>
    <h1>{foo}</h1>
  )

ReactDOM.render(<App/>, document.getElementById('content'));

window.React = React;
