/**
 * Created by justinvoelkel on 6/3/15.
 */
var search = angular.module('SearchCtrl',[]);
    search.controller('SearchProvider',['$scope', 'GeoLocator', 'Weather', function($scope, GeoLocator, Weather){
        $scope.forecast = {days:0};
        //method to accept query and implement search
        $scope.fireSearch = function (search){
            if(!search){
                alert('Enter a search value');
            } else {
                var request = GeoLocator.search(search);
                request.then(function(payload){
                    if(payload.data.results.length > 1) {
                        $scope.multiple = [];
                        $scope.result = null;
                        for(var i=0; i < payload.data.results.length; i++){
                            $scope.multiple.push(payload.data.results[i].formatted_address);
                        }
                    } else {

                        $scope.multiple = null;
                        $scope.result = [];

                        var geocode = {
                            lat:payload.data.results[0].geometry.location.lat,
                            lng:payload.data.results[0].geometry.location.lng
                        };

                        //swap out the background for local
                        //todo - abstract out
                        $('body').
                            css('background-image','url(https://maps.googleapis.com/maps/api/staticmap?center='+geocode.lat+'+'+geocode.lng+'&zoom=13&size=3000x3000&scale=2)');

                        //request weather given lat/lng and forecast type
                        request = Weather.request(geocode,$scope.forecast.days);
                        request.then(function(response){
                            $scope.result = response.data;
                        });
                    }
                });

            }
        }
    }]);