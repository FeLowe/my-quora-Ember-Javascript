import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestionIndexRoute(questionInput) {
      var newQuestion = this.store.createRecord('question', questionInput);
      newQuestion.save();
      this.transitionTo('index');
    },
    updateQuestionIndexRoute(questionSelected, questionUpdateInput) {
      Object.keys(questionUpdateInput).forEach(function(key) {
        if(questionUpdateInput[key]!==undefined) {
          questionSelected.set(key, questionUpdateInput[key]);
        }
      });
      questionSelected.save();
      this.transitionTo('index');
    }
  }
});
