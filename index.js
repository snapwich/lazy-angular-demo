
var app = angular.module("app", ["ui.router"]);

require("./lib/common/styles.less").use();

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("index", {
            url: "/",
            template: "<div>Default stuff</div>"
        })
        .state("child1", {
            url: "/child1",
            templateProvider: function($q) {
                app.directive("counter", function($interval) {
                    return {
                        restrict: "E",
                        scope: { start: "@" },
                        template: "<span>{{ curr }}</span>",
                        link: function(scope) {
                            scope.curr = parseInt(scope.start, 10);

                            $interval(function() {
                                scope.curr += 1;
                            }, 1000);
                        }
                    }
                });
                return $q.when('<div> child 1 stuff <counter start="1"></counter></div>');
            }
        })

});

angular.bootstrap(document.body, ["app"]);