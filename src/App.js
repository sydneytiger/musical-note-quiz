import React from 'react';
import SingleNote from './Components/SingleNote';
import QuieFactory from './Core/QuizFactory';
import './App.css';

function App() {
  const qf = new QuieFactory();
  const quizArr = qf.generateQuiz(10);

  return (
    <div className="App">
      {quizArr.map((item, index) => <SingleNote key={index} index={index} quiz={item}></SingleNote>)}
    </div>
  );
}

export default App;
