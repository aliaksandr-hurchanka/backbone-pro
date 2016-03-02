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
            ''      : 'index',
            'read'  : 'read'
            
        },
        index: function () {
            console.log('Index');
        },
        read: function () {
            console.log('Read');
        }
    });
    
    new App.Router();
    Backbone.history.start();
    
})();