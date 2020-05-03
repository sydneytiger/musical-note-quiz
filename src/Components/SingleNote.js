import React, { Component } from 'react'
import MusicNoteFacotry from '../Core/MusicNoteFactory';

export default class SingleNote extends Component {
  constructor(props){
    super(props);
    const index = props.index 
      ? props.index 
      : (+ new Date()) + (Math.random() + '').substring(2, 5);
    this.elementId = `svg_${index}`;
  }

  componentDidMount() {
    const mnf = new MusicNoteFacotry(this.elementId)
    mnf.generateSingleNote(this.props.quiz);
  }
    
  render() {
    return (
      <div className="music-render" id={this.elementId}></div>
    )
  }
}
