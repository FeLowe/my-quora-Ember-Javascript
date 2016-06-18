import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },

    saveQuestionInputCp() {
      var questionInput = {
        userQuestion: this.get('questionField'),
        questioner: this.get('user'),
        date: this.get('date')
      };
      this.set('addNewQuestion', false);

      this.sendAction('saveQuestionInputCp', questionInput);
    }
  }
});
