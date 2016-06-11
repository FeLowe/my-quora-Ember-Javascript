import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },

    saveQuestionCp() {
      var questionInput = {
        userQuestion: this.get('question'),
        questioner: this.get('user'),
        date: this.get('date')
      };
      this.set('addNewQuestion', false);

      this.sendAction('saveQuestionCp', questionInput);
    }
  }
});
