import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    saveAnswerInsideQuestionRoute (answerInput) {
      var newAnswer = this.store.createRecord('answer', answerInput);
      var userQuestion = answerInput.userQuestion;
      userQuestion.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return userQuestion.save();
    });
    this.transitionTo('question', answerInput.userQuestion);
  },
    updateRoute(currentVersionOfAnswer, answerUpdateInput) {
      Object.keys(answerUpdateInput).forEach(function(key) {
        if(answerUpdateInput[key]!==undefined) {
          currentVersionOfAnswer.set(key, answerUpdateInput[key]);
        }
      });
      currentVersionOfAnswer.save();
      this.transitionTo('question');
    },
    destroyAnswerRoute(answer) {
      answer.destroyRecord();
      this.transitionTo('index');
    },
    destroyQuestionLinkedToAnswer(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('question');
    }
  }
});
