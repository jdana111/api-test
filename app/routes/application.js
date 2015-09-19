import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			properties: this.store.findAll('property'),
			newProperty: this.store.createRecord('property')
		};
	},

	actions: {
		saveNewProperty: function(newProperty) {
			console.log(newProperty.get('name'));
			newProperty.save();
		}
	}
});
