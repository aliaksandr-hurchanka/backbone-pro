// Отделение шаблона от представления
// Модель человека
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
// Вид представления одного человека
var PersonView = Backbone.View.extend({
    tagName: 'li',
    // template: '#person-id',
    template: _.template( $('#person-id').html() ),
    initialize: function() {
        this.render();
    },

    render: function() {
        // var template = _.template($(this.template).html());
        this.$el.html( this.template( this.model.toJSON() ) )
    }

});

var person = new Person;
var personView = new PersonView({model: person});

var person2 = new Person({'name':'Andrey', 'age':27});
var personView2 = new PersonView({model: person2});

// Список людей
var PeopleCollection = Backbone.Collection.extend({
    model: Person
})

// Экземпляр коллекции
var peopleCollection = new PeopleCollection([
    {
        name: 'Ivan',
        age: 23,
        job: 'Taxist'

    },
    {
        name: 'Anna',
        age: 20,
        job: 'Student'
    },
    {
        name: 'Pavel',
        job: 'Builder'
    }

]);
// peopleCollection.add(person);
// peopleCollection.add(person2);

console.log(peopleCollection);
