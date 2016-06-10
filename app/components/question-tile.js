import Ember from 'ember';

export default Ember.Component.extend({
  areDetailsShowing: false,
  actions: {
    showDetails: function(){
      console.log("showDetails");
      this.set('areDetailsShowing', true);
    },
    hideDetails: function() {
      this.set('areDetailsShowing', false);
    }
    // delete(question) {
    //   if (confirm('Are you sure you want to delete this question?')) {
    //     this.sendAction('destroyQuestionComp', question);
    //   }
    // }
  }
});
