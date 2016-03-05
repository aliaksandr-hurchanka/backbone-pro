// View

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

var PersonView = Backbone.View.extend({
    initialize: function () {
        console.log('Экземпляр класса создан!');
    },
    tagName: 'li',
    render: function () {
        console.log('Hello!');
        // антипаттерн, так не рекомендуется, нужны шаблонизаторы
        this.$el.html(this.model.get('name'));
    },
    className: 'person'
});

var person = new Person;
var personView = new PersonView({model: person}); // сразу указывает какая модель привязана

//var PersonView = new PersonView;

//console.log(PersonView); // el улемент - каждых вид, 
                         // в любой момент времени привязан к какому 
                         // то элементу, по умолчанию это div

console.log(personView);
console.log(personView.render());
console.log(personView.el);