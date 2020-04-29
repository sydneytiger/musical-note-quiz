import Vex from 'vexflow'

export default class MusicNoteFactory {
  constructor(elemId) {
    this.vf = new Vex.Flow.Factory({
      renderer: {
        elementId: elemId,
        width: 80, 
        height: 150,
        backend: 3
      }
    });
   this.score = this.vf.EasyScore();
   this.system = this.vf.System();
  }
  
  generateSingleNote(quiz) {
    this.score.set({time: quiz.rhythmTime})
    this.system.addStave({
      voices: [this.score.voice(this.score.notes(quiz.pitch + quiz.rhythm, {clef: quiz.clef}))]
    }).addClef(quiz.clef);
    this.vf.draw();
  }
}