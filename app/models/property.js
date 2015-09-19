import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	category: DS.attr(), 
	street_name: DS.attr()
});
