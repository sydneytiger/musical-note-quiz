import Quiz from './Quiz';

export default class QuizFactory {
  constructor(){
    this.rhythms = ['/q', '/h', '/8'];
    this.clefs = ['bass', 'treble'];
    this.treblePitches = ['B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6'];
    this.bassPitches = ['E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4'];
  }
  
  generateQuiz(n) {
    const quizArray = [];
    for(let i = 0; i < n; i++) {
      const randomRhythm = this.rhythms[this._getRandomIndex(this.rhythms.length)];
      const randomclefs = this.clefs[this._getRandomIndex(this.clefs.length)]
      const randomPitch = randomclefs === 'treble'
        ? this.treblePitches[this._getRandomIndex(this.treblePitches.length)]
        : this.bassPitches[this._getRandomIndex(this.bassPitches.length)]
      
      quizArray.push(new Quiz(randomclefs, randomPitch, randomRhythm));
    }
    
    return quizArray;
  }
  
  _getRandomIndex(length) {
    return Math.floor(Math.random() * length)
  }
}