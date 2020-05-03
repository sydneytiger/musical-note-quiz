import React, { Component } from 'react'
import SingleNote from './SingleNote'

export default class SingleQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: ''
    }
  }

  handleChange = e => {
    this.setState({
      userAnswer: e.target.value
    });

    this.props.quiz.setUserAnswer(e.target.value);
  }

  render() {
    const { quiz } = this.props;
    const { userAnswer } = this.state;

    return (
      <div>
        <SingleNote quiz={quiz}></SingleNote>
        <input 
          type="text"
          placeholder="your answer..."
          value={userAnswer}
          onChange={this.handleChange}
          ></input>
      </div>
    )
  }
}

