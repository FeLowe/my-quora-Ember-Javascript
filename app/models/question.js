import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  userQuestion: DS.attr(),
  questioner: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
