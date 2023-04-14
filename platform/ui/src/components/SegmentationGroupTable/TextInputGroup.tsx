import React, { Component, useState } from 'react';
import SegmentItem from './SegmentationGroupSegment';
import Button from '../Button';

// TODO: Wo sind die areas abgelegt? -> Schreibe on click / on enter funktion die prompt damit abgleicht
// TODO: Default Text in Input sollte default angeklicktes aus SegmentationGroup sein
// TODO: SegmentItem Namen herausnehmen
// TODO: Scrollbar einfuegen
// BUG: Text aus Textarea auch bei mehrfachklicken des Buttons immer wieder anzeigen
// BUG: Text soll bestehen bleiben wenn dropdown minimalisiert wird

class TextInputGroup extends Component {
  constructor() {
    super();
    this.state = {
      textAreaValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({ textAreaValue: event.target.value });
  };

  // Get text prompt on click
  // TODO: Data base request
  handleClick = () => {
    console.log(this.state.textAreaValue);
  };

  setTextAccordingToClickedSegment = () => {};

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
