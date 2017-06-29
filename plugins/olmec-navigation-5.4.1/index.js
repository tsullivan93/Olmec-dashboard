module.exports = function(kibana) {
	return new kibana.Plugin({
		uiExports: {
			visTypes: ['plugins/olmec-navigation/olmec-navigation']
		}
	});
};