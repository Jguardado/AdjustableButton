import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './button.css';

class AdjustableButton extends React.Component {
  constructor(props) {
    super(props);

    this._handleOnClick = this._handleOnClick.bind(this);
  }
  _handleOnClick() {
    const { handleClick } = this.props;

    handleClick();
  }
  render() {
    const { columns, value, addedClassName } = this.props;
    const numOfColumms = {
      1: 'single-column',
      2: 'two-columns',
      3: 'three-columns',
      4: 'four-columns'
    };
    const styles = classNames('ab-button-style', numOfColumms[columns], addedClassName);

    return (
      <div>
        <button
          styles={styles}
          onClick={this._handleOnClick}
          >
          {value}
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
