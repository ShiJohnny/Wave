angular.module("tripCtrl",[] )
    .controller('TripCtrl' , [ '$scope' , '$state', 'requestService', function($scope  , $state ,requestService) {

        $scope.param = {}; // istore request param


        $scope.items = [
            { id: 1, name: 'Departure Time'},
            { id: 2, name: 'Arrival Time'}];


        $scope.clear = function()
        {
            $scope.param  = {};
        };



        $scope.searchRoute = function() {

            // $scope.mapObj = $scope.mapObj.concat($scope.param.start.split(/\s+/).join('+'))

            //  .concat('&daddr=').concat($scope.param.end.split(/\s+/).join('+'))
            // .concat('&dirflg=r&output=embed');

            var month = $scope.param.date.getMonth();//$scope.param.date.getMonth();
            var year = $scope.param.date.getFullYear();
            var day = $scope.param.date.getDate();

            var hours = $scope.param.time.getHours();
            var minutes = $scope.param.time.getMinutes();


            var newDate = new Date(year, month, day, hours, minutes, 0, 0);


            var request;


            if ($scope.param.dir.id == 2) {
                request = {
                    origin: $scope.param.start.concat(" Wilmington, Nc"),  // to specifiy in wilmington nc
                    destination: $scope.param.end.concat(" Wilmington, Nc"),
                    travelMode: google.maps.TravelMode.TRANSIT,

                    transitOptions: {
                        arrivalTime: new Date(newDate.valueOf()),
                        modes: [google.maps.TransitMode.BUS]

                    }


                };
            }
            else {



                request =
                {
                    origin: $scope.param.start.concat(" Wilmington, Nc"),
                    destination: $scope.param.end.concat(" Wilmington, Nc"),
                    travelMode: google.maps.TravelMode.TRANSIT,
                    transitOptions: {
                        departureTime: new Date(newDate.valueOf()),
                        modes: [google.maps.TransitMode.BUS]

                    }


                };


            }




            //passes the request to google map
            requestService.set(request);
            $state.go('app.tab.directionView');
            // $scope.mapObj= 'http://www.google.com/maps?ie=UTF8&f=d&saddr=';


        };







    }]
);
