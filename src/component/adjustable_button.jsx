import React, { Component } from "react";
import "./button.css";

class AdjustableButton extends Component {
  render() {
    const { columns } = this.props;
    let styles;

    if(columns <= 2) {
      styles = {
        "width": "100%"
      }
    }

    if(columns === 2) {
      styles = {
        "width": "45%",
        "margin-right": "3px"
      }
    }

    if(columns === 3) {
      styles = {
        "width": "32%",
        "margin-right": "3px"
      }
    }

    if(columns === 4) {
      styles = {
        "width": "23%",
        "margin-right": "3px"
      }

    }

    return (
      <div>
        <button style={styles} placeholder="your button content" className="button-style">{columns}</button>
      </div>
    )
  }

}

export default AdjustableButton;
