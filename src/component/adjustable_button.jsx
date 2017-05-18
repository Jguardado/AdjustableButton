import React, { PropTypes } from 'react';
import './button.css';

class AdjustableButton extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnClick = this._handleOnClick.bind(this);
  }
  _handleOnClick() {
    const { handleClick } = this.props;

    console.log('button clicked');
    handleClick();
  }
  render() {
    const { columns, value } = this.props;
    let styles;

    if (columns <= 2) {
      styles = {
        'width': '100%'
      };
    }

    if (columns === 2) {
      styles = {
        'width': '45%',
        'margin-right': '3px'
      };
    }

    if (columns === 3) {
      styles = {
        'width': '32%',
        'margin-right': '3px'
      };
    }

    if (columns === 4) {
      styles = {
        'width': '23%',
        'margin-right': '3px'
      };
    }

    return (
      <div>
        <button
          style={styles}
          onClick={this._handleOnClick}
          className="button-style">{value}
        </button>
      </div>
    );
  }
}

AdjustableButton.defaultProps = {
  value: 'yo',
  onClick: () => {}
};

AdjustableButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default AdjustableButton;
