
var app = require("lazy-angular").module("app");

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

var style = require("./child1.less");

app.controller("child1Ctrl", function($scope) {
    style.use();
    $scope.$on("$destroy", function() {
        style.unuse();
    })
});