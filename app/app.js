/**
 * Created by justinvoelkel on 6/3/15.
 */
var weatherphpun = angular.module('weatherphpun', [
        'ngRoute',
        'GoogleMapSrvc',
        'OpenWeatherSrvc',
        'SearchCtrl'
    ]
);

weatherphpun.config(

    /**
     * Routing
     * @param $routeProvider
     */
    function ($routeProvider) {

        $routeProvider.when('/',{
            templateUrl: 'app/templates/index.html',
            controller: 'SearchProvider'
        }).
        otherwise({
            redirectTo:'/'
        });

    }
);