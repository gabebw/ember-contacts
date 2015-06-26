import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('contact');
  },
  // "deactivate" event fires when you leave a route
  cleanUp: Ember.on('deactivate', function(){
    // currentModel is the model from the current route
    this.get('currentModel').destroyRecord();
  }),
  actions: {
    cancel: function(){
      this.transitionTo('contacts');
    },
  },
});
