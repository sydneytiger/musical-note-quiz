import React, { Component } from 'react'
import SingleQuiz from './Components/SingleQuiz';
import Exam from './Core/Exam';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: 0
    }
    this.exam = new Exam('Emma Chen', 5);
  }

  onSubmit = () => {
    this.setState({
      totalScore: this.exam.getTotalScore()
    })
  }
  
  render() {
    return (
      <div className="App">
      <button 
        type="button" 
        id="btn"
        onClick={this.onSubmit}>
          Submit
      </button>
      <div>{this.state.totalScore}</div>
      {this.exam.Quizs.map((item, index) => <SingleQuiz key={index} quiz={item}></SingleQuiz>)}
    </div>
    )
  }
}

