import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../src/index.js';

class Index extends React.Component {
  render() {
    return (
      <div className="component-documentation">
        <legend>Example of button</legend>
        <Button
          handleClick={() => { console.log('passed check func');}}
          columns={5}
          />
      </div>
    );
  };
};

ReactDOM.render(<Index/>, document.getElementById('content'));
