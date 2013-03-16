var app = app || {};

app.BookView = Backbone.View.extend({
	tagName: 'div',
	className: 'bookContainer',
	template: $('#bookTemplate').html(),

	events: {
		'click .delete': 'deleteBook'
	},

	render: function() {
		// console.log('book view: render');

		//tmpl is a function that takes a JSON object and returns html
		var tmpl = _.template(this.template);

		// console.log(this.model.toJSON());

		//this.el is what we defined in tagName. use $el to get access to jQuery html() function
		this.$el.html(tmpl(this.model.toJSON()));

		return this;
	},

	deleteBook: function() {
		//delete model
		this.model.destroy();

		// delete View
		this.remove();
	}
});