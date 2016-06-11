import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestionRoute(questionInput) {
      var newQuestion = this.store.createRecord('question', questionInput);
      newQuestion.save();
      this.transitionTo('index');
    },
    destroyQuestionRouter(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
  }
});
