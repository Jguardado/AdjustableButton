'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/component/adjustable_button';

class Index extends Component {
  render() {
    return (
      <div className="component-documentation">
        <h4>Example of button</h4>
        <Button columns={3}/>
      </div>
    );
  }
};

console.log("this is button: ", Button);

ReactDOM.render(<Index/>, document.getElementById('content'));
