import Ember from 'ember';

export default Ember.Route.extend({
  // The `model` hook is like a before_action in Rails - it runs when the route
  // is loaded.
  model: function(){
    return this.store.findAll('contact');
  }
});
