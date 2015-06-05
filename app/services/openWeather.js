/**
 * Created by justinvoelkel on 6/3/15.
 */
var openWeather = angular.module('OpenWeatherSrvc',[]);

openWeather.factory('Weather', ['$http', function($http){
    return {
        request: function(geocode) {
            var request = "http://api.openweathermap.org/data/2.5/weather?lat="+geocode.lat+"&lon="+geocode.lng+"&units=imperial";
            var request = $http.get(request);
            return request;
        }
    };
}]);
