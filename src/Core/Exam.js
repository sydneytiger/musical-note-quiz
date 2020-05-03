import QuizFactory from './QuizFactory';

export default class Exam {
  constructor(name, numberOfQuiz) {
    this.name = name;
    const qf = new QuizFactory();
    this.Quizs = qf.generateQuiz(numberOfQuiz);
    this.numberOfQuiz = numberOfQuiz;
  }

  getTotalScore() {
    if(this.Quizs && this.Quizs.length > 0) {
      return this.Quizs.reduce((acc, quiz) => {
        acc += quiz.getScore();
        return acc;
      }, 0);
    }

    return 0;
  }
}