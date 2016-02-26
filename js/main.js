"use strict";

var object = {};
var objectTwo = {};

_.extend(object, Backbone.Events);
_.extend(objectTwo, Backbone.Events);

// Событие
object.on("alert", function(msg) {
  console.log("Сработало " + msg);
});

objectTwo.listenTo(object, 'alert', function(){
    console.log('object выполнил событие... ')
});

// Отвязать событие
//object.off("alert");

// Вызов события
object.trigger("alert", "событие");

// ----------------------------------------------------------

// var Sidebar = Backbone.Model.extend({
//   promptColor: function() {
//     var cssColor = prompt("Пожалуйста, введите CSS-цвет:");
//     this.set({color: cssColor});
//   }
// });

// window.sidebar = new Sidebar;

// sidebar.on('change:color', function(model, color) {
//   $('#sidebar').css({background: color});
// });

// sidebar.set({color: 'white'});

// sidebar.promptColor();

// console.log(window)

// -----------------------------------------------------------

var Library = Backbone.Model.extend({
  constructor: function() {
    this.books = new Books();
    Backbone.Model.apply(this, arguments);
  },
  parse: function(data, options) {
    this.books.reset(data.books);
    return data.library;
  }
});

// -------------------------------------------------------

// var Person = function (  ) {
//     this.name = config.name;
//     this.age = config.age;
//     this.job = config.job;
// }

// Person.prototype.walk = function () {
//     return this.name + ' is walking';
// }

// var nick = new Person ({name: 'Nick', age: '24', job: 'Front-end developer'});

// -------------------------------------------------------

// First model
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

// var person = new Person({'name':'Andrey', 'age':27});
// console.log(person.name);
// console.log(person.get('name'));
// console.log(person.set('name', 'Alex'));
// console.log(person.walk());
// console.log(person.toJSON());

// Валидация модели

// при создании модели валидации не происходит
var personSecond = new Person({
    name: 'Nickolay',
    job: 'Dev',
    age: 40
});

personSecond.on("invalid", function(model, error) {
  console.log(" Нельзя " + error);
});

personSecond.set('age', -25, {validate: true});
// с новой версией, валидация по умолчанию включена только для .save
// теперь событие которое срабатывает при валидации называется 'invalid'
console.log(personSecond.toJSON());


// ------------------------------------------------------------------------

// View
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










