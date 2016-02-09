import React, { Component } from 'react';
import { CONTEXT_KEY } from './constants.js';

class ContextUnwrapper extends Component {
  render() {
    const fn = this.props.fn;
    return fn(this.context[CONTEXT_KEY]);
  }
}

ContextUnwrapper.contextTypes = {
  [CONTEXT_KEY]: React.PropTypes.object
};

ContextUnwrapper.propTypes = {
  fn: React.PropTypes.func
};

export default ContextUnwrapper;
