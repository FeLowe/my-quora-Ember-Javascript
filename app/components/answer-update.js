import Ember from 'ember';

export default Ember.Component.extend({
  AnswerUpdateForm: false,
  actions: {
    AnswerUpdateForm() {
      this.set('AnswerUpdateForm', true);
    },
    update(answer) {
      var answerUpdateInput = {
        userAnswer: this.get('answer'),
        respondent: this.get('user'),
        date: this.get('date'),
      };
      this.set('AnswerUpdateForm', false);
      this.sendAction('update', answer, answerUpdateInput);
    }
  }
});
