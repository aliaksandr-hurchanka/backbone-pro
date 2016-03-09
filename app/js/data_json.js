var Films = {
    Views: {},
    Models: {},
    Templates: {},
    Collections: {}
}

// Model
Films.Models.Movie = Backbone.Model.extend({})
Films.Collections.Movies = Backbone.Collection.extend({
    model: Films.Models.Movie,
    url: "/data",
    initialize: function(){
        console.log("Movies initialize")
    }
});


// Template
Films.Templates.movies = _.template($("#tmplt-Movies").html())

// View
Films.Views.Movies = Backbone.View.extend({
    el: $("#mainContainer"),
    template: Films.Templates.movies,

    initialize: function () {
        this.collection.bind("reset", this.render, this);
        this.collection.bind("add", this.addOne, this);
        var view = this;
        view.render();
    },

    render: function () {
        console.log("render")
        console.log(this.collection.length);
        $(this.el).html(this.template());
        this.addAll();
    },

    addAll: function () {
        console.log("addAll")
        this.collection.each(this.addOne);
    },

    addOne: function (model) {
        console.log("addOne")
        view = new Films.Views.Movie({ model: model });
        $("ul", this.el).append(view.render());
    }

})

// Template
Films.Templates.movie = _.template($("#tmplt-Movie").html())

// View
Films.Views.Movie = Backbone.View.extend({
    tagName: "li",
    template: Films.Templates.movie,
    //events: { "click .delete": "test" },

    initialize: function () {
        //_.bindAll(this, 'render', 'test');
        this.model.bind('destroy', this.destroyItem, this);
        this.model.bind('remove', this.removeItem, this);
    },

    render: function () {
        return $(this.el).append(this.template(this.model.toJSON())) ;
    },

    removeItem: function (model) {
        console.log("Remove - " + model.get("Name"))
        this.remove();
    }
})

// Router
Films.Router = Backbone.Router.extend({
    routes: {
        "": "defaultRoute"
    },

    defaultRoute: function () {
        console.log("defaultRoute");
        Films.movies = new Films.Collections.Movies()
        new Films.Views.Movies({ collection: Films.movies });
        Films.movies.fetch();
        console.log(Films.movies.length)
    }
})

var appRouter = new Films.Router();
Backbone.history.start();

$("#butAddItem").click(null, function () {
    var movie = new Films.Models.Movie(
        {
            "Id": "BVP3s",
            "Name": "Lord of the Rings",
            "AverageRating": 4.3,
            "ReleaseYear": 2003,
            "Url": "http://",
            "Rating": "PG-13"
        }
    )

    Films.movies.add(movie);
    console.log(Films.movies.length)
})
