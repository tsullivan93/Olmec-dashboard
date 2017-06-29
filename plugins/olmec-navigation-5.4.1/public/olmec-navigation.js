// Include the angular controller
require('plugins/olmec-navigation/olmec-navigation-Controller');

// The provider function, which must return our new visualization type
function olmecnavigationProvider(Private) {
	var TemplateVisType = Private(require('ui/template_vis_type/template_vis_type'));
	// Include the Schemas class, which will be used to define schemas
	var Schemas = Private(require('ui/vis/schemas'));
    
	// Describe our visualization
	return new TemplateVisType({
		name: 'olmec-navigation', // The internal id of the visualization (must be unique)
		title: 'Olmec Navigation', // The title of the visualization, shown to the user
		description: 'A custom plugin to navigate from host to host in the Olmec system easier.', // The description of this vis
		icon: 'fa-rebel', // The font awesome icon of this visualization
		template: require('plugins/olmec-navigation/olmec-navigation.html'), // The template, that will be rendered for this visualization
		// Define the aggregation your visualization accepts
		schemas: new Schemas([
				{
					group: 'metrics',
					name: 'tagsize',
					title: 'Tagsize',
					min: 1,
					max: 1,
					aggFilter: ['count']
				},
				{
					group: 'buckets',
					name: 'tags',
					title: 'Tags',
					min: 1,
					max: 1,
					aggFilter: '!geohash_grid'
				}
			]),
        params: {
				editor: require('plugins/olmec-navigation/olmec-navigation-editor.html'), // Use this HTML as an options editor for this vis
				defaults: { // Set default values for paramters (that can be configured in the editor)
					format: 'Please enter the dashboard-id this will be on'
				}
			}
	});
}

require('ui/registry/vis_types').register(olmecnavigationProvider);
