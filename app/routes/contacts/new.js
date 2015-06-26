import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('contact');
  },
  // "deactivate" event fires when you leave a route
  cleanUp: Ember.on('deactivate', function(){
    // currentModel is the model from the current route
    const contact = this.get('currentModel');
    if(!contact.get('isSaving') && contact.get('isNew')){
      contact.destroyRecord();
    }
  }),
  actions: {
    cancel: function(){
      this.transitionTo('contacts');
    },
    submit: function(){
      const contact = this.get('currentModel');
      contact.save().then(savedContact => {
        this.transitionTo('contacts.contact', savedContact);
      });
    },
  },
});
