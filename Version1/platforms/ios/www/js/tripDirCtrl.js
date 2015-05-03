angular.module("tripDirCtrl",[] )
    .controller('TripDirCtrl' , [ '$scope' ,  'requestService',function($scope  ,requestService) {

        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();



            directionsDisplay = new google.maps.DirectionsRenderer();
            var mapOptions = {
                zoom: 7

            };

            //Marker + infowindow + angularjs compiled ng-click




            directionsDisplay.setPanel(document.getElementById('directions-panel'))
            ;




            var  request = requestService.get(); //gets the trip request




            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });












    }])


;
