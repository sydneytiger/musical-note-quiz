export default class Quiz {
  constructor(clef, pitch, rhythm){
    this.clef = clef;
    this.pitch = pitch;
    this.rhythm = rhythm;
    this.rhythmTime = this._getRyhthmTime(rhythm);
    this.answer = null;
  }
    
  _getRyhthmTime(rhythm) {
    switch(rhythm) {
      case '/q':
        return '1/4';
      case '/8':
        return '1/8';
      case '/h':
        return '1/2';
      default:
        return '1/8'
    }
  }

  getScore() {
    return this.answer === this.pitch ? 1 : 0;
  }

  isCorrect() {
    return this.answer === this.pitch;
  }

  setUserAnswer(ans) {
    this.answer = ans;
  }

  getCorrectAnswer(){
    return this.pitch;
  }
}