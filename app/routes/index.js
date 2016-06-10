import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('question');
},
  actions: {
    destroyQuestionRouter(question) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
