'use strict';

var React = require('react/addons');
var ReactDOM = require('react-dom');
var Playground = require('component-playground');

var Button = require('./src/component/adjustable_button');
var componentExample = require("raw!./examples/button.example");

var Index = React.createClass({
  render() {
    return (
      <div className="component-documentation">
        <Playground codeText={componentExample} scope={{React: React, Button: Button}}/>
      </div>
    );
  }
});

ReactDOM.render(<Index/>, document.getElementById('root'));
