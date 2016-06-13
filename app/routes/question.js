import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

actions: {

  update(answer, answerUpdateInput) {
    Object.keys(answerUpdateInput).forEach(function(key) {
      if(answerUpdateInput[key]!==undefined) {
        answer.set(key,answerUpdateInput[key]);
    }
  });
    answer.save();
    this.transitionTo('index');
  },
  saveAnswerInsideQuestionRoute (answerInput) {
    var newAnswer = this.store.createRecord('answer', answerInput);
    var userQuestion = answerInput.userQuestion;
    userQuestion.get('answers').addObject(newAnswer);
    newAnswer.save().then(function() {
      return userQuestion.save();
    });
    this.transitionTo('question', answerInput.userQuestion);
  },

  destroyAnswerInsideQuestionRoute(answerToDelete) {
    // so this is where the delete problem is right now, we were getting undefined from userQuestion.get('answers')
    //because we are actually passing up the answer we want to delete, not the question. 
    var answer_deletions = answerToDelete.get('answers').map(function(answer) {
      return answer.destroyRecord();
    });
    Ember.RSVP.all(answer_deletions).then(function() {
      return answerToDelete.destroyRecord();
    });
    this.transitionTo('question');
    }
  }
});
