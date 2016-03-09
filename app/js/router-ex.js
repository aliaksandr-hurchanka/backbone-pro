(function() {

    var TestModel = Backbone.Model.extend({
        name: 'Alex',
        sayHello: function() {
            console.log('Hello ' + this.name);
        }
    });

    var TestRouter = Backbone.Router.extend ({
        routes: {
            '': 'home',
            'test': 'testRoute'
        },
        home: function () {
            console.log('Home');
            Backbone.Events.trigger('showPage');
        },
        testRoute: function () {
            console.log('Test route');
            Backbone.Events.trigger('showPageTwo');
        }
    });

    var expTpl = _.template($("#tpl").html());

    var TestView = Backbone.View.extend({
        el: '#test-holder',
        template: expTpl,
        events: {
            "click input[type=button]" : "addTask"
        },
        initialize: function() {
            console.log(Backbone.Events);
            this.listenTo(Backbone.Events, 'showPage', this.fnTest);
            this.listenTo(Backbone.Events, 'showPageTwo', this.fnTestTwo);
            //this.render();
        },
        fnTest: function () {
            console.log('ok')
            this.render();
        },
        fnTestTwo: function () {
            console.log('ok2')
            this.$el.html('hi');
        },

        render: function() {
            console.log(this.el);
            this.$el.html(this.template());
            return this;
        },
        addTask: function() {

            //alert('Hello!');
        }
    });


    new TestRouter();
    var testView = new TestView();
    Backbone.history.start();

})();
