import DS from 'ember-data';

export default DS.Model.extend({
  nameFirst: DS.attr('string'),
  nameLast: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
});
