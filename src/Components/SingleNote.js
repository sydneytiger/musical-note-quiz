import React, { Component } from 'react'
import MusicNoteFacotry from '../Core/MusicNoteFactory';

export default class SingleNote extends Component {
  constructor(props){
    super(props);
    this.elementId = `svg_${props.index}`;
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
