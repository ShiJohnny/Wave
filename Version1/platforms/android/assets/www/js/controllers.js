angular.module('starter.controllers', ["tripCtrl",'tripMapCtrl',"tripDirCtrl","contactCtrl",
    "fareInfoCtrl","priceCtrl","faqCtrl","costCtrl"])



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    }
)


    .controller('MissAndHistoryCtrl',["$scope",function($scope)
    {
        $scope.missionStatement = "    The mission of the Cape Fear Public Transportation Authority " +
        "(Wave Transit) is to develop and maintain an effective, efficient, and safe system of " +
        "public transportation services within Southeastern North Carolina which is responsive to " +
        "the mobility needs of the community. Transportation services provided shall be designed to" +
        " maintain and encourage the use of public transportation and shall contribute to the " +
        "economic vitality of the community, the conservation of natural resources and the protection of the environment.";


        var p1 = "    Created in 1974, the Wilmington Transit Authority (WTA) was initially implemented to provide public" +
            " transportation to the citizens of the Wilmington area.";
            var p2 = "    In December 2002, the WTA adopted the name Wave, as well as a new logo and color scheme for the Authority. " +
                "This change reflected a new vision for public transportation in Wilmington. Capitalizing on our coastal environment," +
                " the name Wave allowed greater" +
                " name recognition throughout the area and positively represented public transportation throughout the region.";
                var p3 = "    Rapid sprawl and rising traffic congestion throughout the region led the City of Wilmington and New Hanover County to enter into an historic agreement in June 2003. The city and county merged the WTA and New Hanover Transportation Services to form the Wilmington/New Hanover Transportation Agency (WNHTA). This agreement merged" +
                    " the respective organizations for one year, in order" +
                    " to provide oversight of both agencies under one public" +
                    " transportation authority.";
        var p4 = "    In July of 2004 the WNHTA, the WTA and NHTS were dissolved and a new transportation authority was created. The merged entity" +
            "officially became the Cape Fear Public Transportation Authority, but kept the name Wave Transit.";
        var p5 = "    In an effort to better serve the community, Wave Transit has restructured all fixed routes " +
            "in the region. The new routes are based on a modern transfer facility, Forden Station, which is centrally" +
            " located within the service area.  A new maintenance and operations facility off MLK Parkway is under construction. Construction is expected to be complete in the fall of 2014. A downtown multimodal transportation center " +
            "is also in the early planning phase. ";

        $scope.history =[p1,p2,p3,p4,p5];





    }



    ]

)



    .controller('GoalCtrl',["$scope", function($scope) {



        $scope.items = [{
            goal:" Expand public transportation to new areas of the community as demand estimates and population " +
            "densities indicate that service will be sufficiently utilized within established service standards. The " +
            "Goals of the Cape Fear Public Transportation Authority will be reviewed and revised, as needed, during the budget" +
            " development process. These goals and objectives" +
            " will guide the development of capital and operating budgets, service planning, and operation of transit services."
        }, {
            goal: "Provide cost effective transportation " +
            "services which optimize the utilization of personnel," +
            " vehicles, and other resources and which are operated with a minimum of public subsidy"+
            " and up-to-date information on services available and aggressively marketing the transit system."
        }, {
            goal:" Provide transportation services which meet the mobility needs of the " +
            "community, within available financial resources."+
            " and up-to-date information on services available and aggressively marketing the transit system."
        }, {
            goal:"Develop funding options which assure the continued stable operation of transportation services at a public subsidy " +
            "level accept  able to the community."+
            " and up-to-date information on services available and aggressively marketing the transit system."
        }, {
            goal: " Expand public transportation to new areas of the community as demand estimates and population " +
            "densities indicate that service will be sufficiently utilized within established service standards. The " +
            "Goals of the Cape Fear Public Transportation Authority will be reviewed and revised, as needed, during the budget" +
            " development process. These goals and objectives" +
            " will guide the development of capital and operating budgets, service planning, and operation of transit services."
        }];

    }])


    .controller("BusRouteCtrl",[ "$scope", '$state', function($scope,$state){

        $scope.single = function() {

            $state.go("app.singleView");
        };


        $scope.eta = function() {

            $state.go("app.etaTable");
        };

        $scope.all = function() {

            $state.go("app.allBusView");
        };

        $scope.uncw = function() {

            $state.go("app.UNCWBus");
        };



    }]);




