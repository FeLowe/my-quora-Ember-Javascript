import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  // userAnswer: DS.belongsTo('question', { async: true }),
  respondent: DS.attr(),
  date: DS.attr(),
});
