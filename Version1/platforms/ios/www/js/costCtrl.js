angular.module("costCtrl",[] )
    .controller('CostCtrl' , [ '$scope' ,"$ionicPopup", function($scope , $ionicPopup) {







        $scope.items = [
            { id: 1, name: 'Small Car' ,cost: .0453},
            { id: 2, name: 'Medium Car'   ,cost: .0552   },
            { id: 3, name: 'Large Car'  ,cost: .0584 },
            { id: 4   , name: 'Mini Van'  ,cost: .0543},
            { id: 5, name: 'SUV'  ,cost: .0640 }];

        $scope.info  = {};


        $scope.clear = function()
        {
            $scope.info = {};

            $scope.toshow= false;
        };


        $scope.calculateCost = function()
        {

            var gasDaily = ( $scope.info.gasPrice * ($scope.info.milesRT/$scope.info.gasMPG));

            var totalGasDaily = gasDaily + $scope.info.parking;



            var gasYear = (240 * totalGasDaily);
            var wearcost = $scope.info.carSize.cost;

            var wearDaily= $scope.info.milesRT * wearcost;


            var wearYearly = (240 * wearDaily);


            var gasTotalRaw = wearYearly + gasYear;


            $scope.info.vechileCost = gasTotalRaw.toFixed(2);







            $scope.info.waveCost = $scope.info.roundTrip * 240;
            $scope.info.savecost =      $scope.info.vechileCost -   $scope.info.waveCost;
            $scope.toshow= true;




            ////////////////////
            var myPopup = $ionicPopup.alert({
                template: ' Annual cost of commuting in your vehicle: <br>  ${{info.vechileCost}}<br>  Annual cost of commuting on Wave Transit: <br>  ${{info.waveCost}} <br>By riding Wave Transit you save: <br>  ${{info.savecost}}',
                scope: $scope,
                title:"Total Saving",
                buttons: [
                    { text: 'Done' }
                ]
            });





        };

    }]);