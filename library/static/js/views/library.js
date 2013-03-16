var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: $('#books'),

	events: {
		'click #add': 'addBook'
	},

	initialize: function(initialBooks) {
		// console.log('library view: initialize');
		this.collection = new app.Library();
		this.collection.fetch();
		this.render();

		this.collection.on('add', this.renderBook, this);
		this.collection.on('reset', this.render, this);
	},

	render: function() {
		// console.log('library view: render each book');
		_.each(this.collection.models, function(item){
			this.renderBook(item);
		}, this);
	},

	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		});

		this.$el.append(bookView.render().el);
	},

	addBook: function(e) {
		e.preventDefault();

		var formData = {};
		$('#addBook div').children('input').each(function(i, el){
			if ($(el).val() !== '') {
				formData[el.id] = $(el).val();
			}
		});
		console.log(formData);
		this.collection.create(formData);
	}
});