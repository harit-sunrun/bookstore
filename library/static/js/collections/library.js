var app = app || {};

app.Library = Backbone.Collection.extend({
	model: app.Book,
	url: '/api/book',

	initialize: function() {
		// console.log('collection: url:' + this.url);
	},

	parse: function(response) {
		// console.log('in parse: ' + response);
		return response.objects;
	}
});