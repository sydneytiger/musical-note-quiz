export default class Quiz {
  constructor(clef, pitch, rhythm){
    this.clef = clef;
    this.pitch = pitch;
    this.rhythm = rhythm;
    this.rhythmTime = this.getRyhthmTime(rhythm);
  }
    
   getRyhthmTime(rhythm) {
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
  
  getAnswer(){
    return this.pitch;
  }
}