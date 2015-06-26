import Ember from 'ember';

export default Ember.Component.extend({
  // `query` is an arbitrary name
  query: '',

  // If query changes, recompute this property, AND
  // if any of the contacts' fullNames change, recompute as well
  filteredContacts: Ember.computed(
    'query',
    'contacts.@each.fullName',
    function(){
      const query = this.get('query');
      const contacts = this.get('contacts');
      // turn the query into a case-insensitive query
      const caseInsensitiveQuery = new RegExp(query, "i");

      return contacts.filter(function(contact){
        return contact.get('fullName').match(caseInsensitiveQuery);
      });
    }
  ),
});
