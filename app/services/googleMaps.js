/**
 * Created by justinvoelkel on 6/3/15.
 */
var googlemaps = angular.module('GoogleMapSrvc',[]);

    googlemaps.factory('GeoLocator', ['$http', function($http){
        return {
            search: function(query) {
                query = query.replace(/\s+/g, '+');
                return this.request(query);
            },
            request: function(query) {
                var request = "http://maps.googleapis.com/maps/api/geocode/json?address="+query+"&sensor=true";
                var request = $http.get(request);
                return request;
            },
            parse: function(data) {

            }
        };
    }]);

