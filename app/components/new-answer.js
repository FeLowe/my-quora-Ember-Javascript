import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },
    saveAnswerInsideQuestionCp() {
      var answerInput = {
        userAnswer: this.get('answer'),
        respondent: this.get('user'),
        date: this.get('date'),
        userQuestion: this.get ('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswerInsideQuestionCp', answerInput);
    }
  }
});
