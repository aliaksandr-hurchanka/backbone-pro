var Person = Backbone.Model.extend({
    // данные по умолчанию
    defaults: {
        name: 'Aliaksandr',
        job: 'web developer',
        age: 26
    },
    validate: function (attrs) {
        console.log(attrs);
        if (attrs.age <= 0) {
            return 'Возраст должен быть положительным!';
        }
    },
    work: function () {
        return this.get('name') + ' is working!';
    }
});

// View
var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(' <%= name %> ( <%= age %> ) - <%= job %>'),
    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) )
    }

});

var person = new Person;
var personView = new PersonView({model: person}); 

console.log(personView.el);
