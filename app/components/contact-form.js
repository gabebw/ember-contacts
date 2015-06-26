import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit: function(){
      // Explicitly allow action to bubble up
      this.sendAction('submit');
    },
    cancel: function(){
      // Explicitly allow action to bubble up
      this.sendAction('cancel');
    }
  },
});
