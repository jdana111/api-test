import Ember from 'ember';

export default Ember.Component.extend({
	property: null,
	isEditing: false,

	actions: {	
		edit: function() {
			this.set('isEditing', true);
		},

		update: function() {
			this.get('property').save().then(() => {
				this.set('isEditing', false);
			});
		},

		delete: function() {
			this.get('property').deleteRecord().save();
		}
	}
});
