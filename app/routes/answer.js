import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  },
  actions: {
    update(answer, answerUpdateInput) {
      Object.keys(answerUpdateInput).forEach(function(key) {
        if(answerUpdateInput[key]!==undefined) {
          answer.set(key, answerUpdateInput[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },
    delete(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    }
  }
});
