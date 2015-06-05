/**
 * Created by justinvoelkel on 6/3/15.
 */
var openWeather = angular.module('OpenWeatherSrvc',[]);

openWeather.factory('Weather', ['$http', function($http){
    return {
        request: function(geocode,length) {

            var request = "http://api.openweathermap.org/data/2.5/";
            //form request based on forecast length
            if(length>0){
                request = request+"forecast/daily?lat="+geocode.lat+"&lon="+geocode.lng+"&cnt="+length+"&mode=json";
            } else {
                request = request+"weather?lat="+geocode.lat+"&lon="+geocode.lng;
            }
            //set correct unit of measure
            request = request+"&units=imperial";
            var request = $http.get(request);
            return request;
        }
    };
}]);
