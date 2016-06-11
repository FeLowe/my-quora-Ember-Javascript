import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestionRoute(questionInput) {
      var newQuestion = this.store.createRecord('question', questionInput);
      newQuestion.save();
      this.transitionTo('index');
    },
    destroyQuestionRouter(question) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
