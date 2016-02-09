import React from 'react';
import ContextWrapper from './ContextWrapper.js';
import ContextUnwrapper from './ContextUnwrapper.js';

export function setContext(context, el) {
  return <ContextWrapper {...{context, el}}/>;
}

export function getContext(fn) {
  return <ContextUnwrapper {...{fn}}/>
}
