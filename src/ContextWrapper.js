import React, { Component } from 'react';
import { CONTEXT_KEY } from './constants.js';

class ContextWrapper extends Component {
  getChildContext() {
    return {
      [CONTEXT_KEY]: this.props.context
    };
  }
  render() {
    return this.props.el;
  }
}

ContextWrapper.childContextTypes = {
  [CONTEXT_KEY]: React.PropTypes.object
};

ContextWrapper.propTypes = {
  context: React.PropTypes.object,
  el: React.PropTypes.element
};

export default ContextWrapper;
