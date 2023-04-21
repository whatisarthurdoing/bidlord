import React, { Component, useState } from 'react';
import Button from '../Button';

// TODO: Wo sind die areas abgelegt? -> Schreibe on click / on enter funktion die prompt damit abgleicht
// TODO: Default Text in Input sollte default angeklicktes aus SegmentationGroup sein
// TODO: Scrollbar einfuegen
// BUG: Text soll bestehen bleiben wenn dropdown minimalisiert wird

class TextInputGroup extends Component {
  constructor(label: string) {
    super(label);
    this.state = {
      textAreaValue: { label },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ textAreaValue: event.target.value });
  };

  handleClick = () => {
    console.log(this.state.textAreaValue);
  };

  render() {
    return (
      <div>
        <label style={{ color: '#99E1E1' }}>
          Type in a prompt to get the according area highlighted
        </label>
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
        />
        <Button rounded="large" onClick={this.handleClick}>
          Get area
        </Button>
      </div>
    );
  }
}
export default TextInputGroup;
