import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contacts', { path: '/' }, function() {
    this.route('contact', { path: '/:contact_id' });
    this.route('new');
    this.route('edit', { path: '/:contact_id/edit' });
  });
});

export default Router;
