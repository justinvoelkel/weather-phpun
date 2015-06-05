/**
 * Created by justinvoelkel on 6/3/15.
 */
var search = angular.module('SearchCtrl',[]);

    search.controller('SearchProvider',['$scope', 'GeoLocator', 'Weather', function($scope, GeoLocator, Weather){
        //method to accept query and implement search
        $scope.fireSearch = function (search){
            //push multiple results for selection
            $scope.multiple = [];
            $scope.result = [];

            var request = GeoLocator.search(search);
                request.then(function(payload){
                    if(payload.data.results.length > 1) {
                        for(var i=0; i < payload.data.results.length; i++){
                           $scope.multiple.push(payload.data.results[i].formatted_address);
                        }
                    } else {
                        $scope.multiple = null;

                        var geocode = {
                            lat:payload.data.results[0].geometry.location.lat,
                            lng:payload.data.results[0].geometry.location.lng
                        };

    $('body').css('background-image','url(https://maps.googleapis.com/maps/api/staticmap?center='+geocode.lat+'+'+geocode.lng+'&zoom=13&size=3000x3000&scale=2)').fadeIn();

                        request = Weather.request(geocode);
                        request.then(function(response){
                            $scope.result = response.data;
                        });
                    }
                });
        }
    }]);