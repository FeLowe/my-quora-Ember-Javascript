import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(questionSelected) {
      var questionUpdateInput = {
        userQuestion: this.get('questionUpdate'),
        questioner: this.get('questionerUpdate'),
        date: this.get('dateQuestionUpdate')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestionCp', questionSelected, questionUpdateInput);
    }
  }
});
