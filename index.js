
var app = require("lazy-angular").module("app", ["ui.router"]);

require("./lib/common/styles.less").use();

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    app
        .route("index", {
            url: "/",
            template: "<div>Default Stuff</div>"
        })
        .route("child1", {
            url: "/child1"
        }, function(loadTemplate) {
             require([
                 "./lib/child1/child1.tpl.html",
                 "./lib/child1/child1.js"
             ], function(template) {
                loadTemplate(template);
             });
        });

});

angular.bootstrap(document.body, ["app"]);