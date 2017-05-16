'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/index.js';

class Index extends Component {
  render() {
    return (
      <div className="component-documentation">
        <legend>Example of button</legend>
        <Button
          handleClick={()=> { console.log('passed down func')}}
          columns={5}
          />
      </div>
    );
  }
};

ReactDOM.render(<Index/>, document.getElementById('content'));
