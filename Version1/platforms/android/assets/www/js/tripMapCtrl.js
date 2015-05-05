angular.module("tripMapCtrl",[] )
    .controller('TripMapCtrl' , [ '$scope' ,  'requestService',function($scope  ,requestService) {
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        var map;



            directionsDisplay = new google.maps.DirectionsRenderer();
            var mapOptions = {
                zoom: 10,
                center: new google.maps.LatLng( 34.225988, -77.869913)
            };
            map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            //Marker + infowindow + angularjs compiled ng-click



            directionsDisplay.setMap(map);





            var request = requestService.get(); //gets the trip request


            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }

            });




        // used to hide or show the map / direction view





    }])


;
