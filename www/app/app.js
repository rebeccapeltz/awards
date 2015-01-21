// Show/hide menu toggle
$('#btn-menu').click(function () {
    if ($('#container').hasClass('offset')) {
        $('#container').removeClass('offset');
    } else {
        $('#container').addClass('offset');
    }
    return false;
});

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/', {
            title: 'Dashboard 1',
            templateUrl: 'partials/dashboard1.html'
        })
            .when('/dashboard1', {
                title: 'Dashboard 1',
                templateUrl: 'partials/dashboard1.html'
            })
            .when('/dashboard2', {
                title: 'Dashboard 2',
                templateUrl: 'partials/dashboard2.html'
            })
            .when('/dashboard3', {
                title: 'Dashboard 3',
                templateUrl: 'partials/dashboard3.html'
            })
            .when('/dashboard4', {
                title: 'Dashboard 2',
                templateUrl: 'partials/dashboard4.html'
            })
            .otherwise({
                redirectTo: '/'
            });
}]);
app.run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
}]);