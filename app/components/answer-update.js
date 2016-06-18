import Ember from 'ember';

export default Ember.Component.extend({
  AnswerUpdateForm: false,
  actions: {
    AnswerUpdateForm() {
      this.set('AnswerUpdateForm', true);
    },
    update(currentVersionOfAnswer) {
      var answerUpdateInput = {
        userAnswer: this.get('userAnswerTest'),
        respondent: this.get('respondentTest'),
        date: this.get('dateTest'),
      };
      this.set('AnswerUpdateForm', false);
      this.sendAction('updateComp', currentVersionOfAnswer, answerUpdateInput);
    }
  }
});
