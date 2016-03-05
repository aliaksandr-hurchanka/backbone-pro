(function () {
    window.App = {
        Views: {},
        Models: {},
        Collections: {},
        Router: {}
    };
    
    // шаблон
    window.template = function(id) {
        return _.template( $('#' + id).hmtl() );
    }
    
    App.Router = Backbone.Router.extend({
        routes: {
            ''                  : 'index',
            'page/:id'          : 'page',
            'search/:query'     : 'search',
            '*other'            : 'default'
            
        },
        index: function () {
            console.log('Index');
        },
        page: function (id) {
            console.log('Router number ' + id);
        },
        default: function (other) {
            alert('Error 404 > ' + other);
        }
    });
    
    new App.Router();
    Backbone.history.start();
    
})();
