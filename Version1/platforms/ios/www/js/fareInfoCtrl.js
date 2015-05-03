angular.module("fareInfoCtrl",[] )
    .controller('FareInfoCtrl' , [ '$scope' , function($scope ) {


        var c1 =
        {

            title:"Elderly fares available to passengers age " +
            "65 years or older. Red, white & blue Medicare card or" +
            " valid ID required. Disabled fares are available to passengers " +
            "showing a red, white & blue Medicare card or Wave disabled ID. "

        };

        var c2 =
        {

            title:"Transfers are used to provide continuous service" +
            " between two points not served by a single route. Transfers " +
            "are valid for seventy-five (75) minutes on weekdays, Saturdays and Sundays" +
            ", with the exception of Route 101.  Transfers are issued only for a one-way continuous" +
            " trip and are not valid for return trips. Transfers are issued " +
            "at time of boarding and are not issued to passengers using passes or transfers."

        };

        var c3 =
        {

            title:"Seven-day (7) passes are valid for seven (7) consecutive" +
            " days (ie. Monday- Sunday.  Holidays are considered as consecutive days, " +
            "although bus service may not be provided). The first day of the pass begins" +
            " when the passenger first uses the pass and is valid for the next seven (7) consecutive days " +
            "Passes can be bought from any bus operator or at Forden Station, 505 Cando St. "

        };
        var c4 =
        {

            title:"Thirty-one (31) day passes are valid for thirty-one (31) consecutive days (ie." +
            " Monday- Sunday.  Holidays are considered as consecutive days, although" +
            " bus service may not be provided). The first day of the pass begins when the" +
            " passenger first uses the pass and is valid for the next thirty-one (31) consecutive days. Passes" +
            " can be bought from any bus operator or at Forden Station, 505 Cando St."+
            "Ten (10) ride passes are valid for ten one way trips. They have no expiration and can be bought at Forden Station. "

        };
        var c5 =
        {

            title:"Daily passes are valid for twenty-four (24) continuous hours from t" +
            "he time the card is first used for transportation. Passes can be purchased" +
            " from any bus operator or at Forden Station, 505 Cando St."+
          "  Wave buses utilize the GFI® Odyssey® validating farebox. Passes are available on any Wave bus or at Forden Station."

        };
        var c6 =
        {

            title:"Children under age five (5) ride free with fare paying adult. Limit" +
            " three free children with each fare paying adult."

        };
        var c7 =
        {

            title:"For safety reasons, buses are allowed to stop only at stops designated by a Wave bus stop sign."+
            "Wave buses may be equipped with audio and video recording equipment.  Wave Transit passengers are subject "+
            "to having their voice and image recorded."

        };


        var c8 =
        {

            title:"Eating, drinking, smoking (including electronic cigarettes) and tobacco products, are prohibited on Wave buses."

        };


        var c9=
        {

            title:"Firearms are prohibited from Wave Transit vehicles and facilities." +
            " Animals are prohibited from boarding " +
            "Wave Transit vehicles with the exception of service animals."

        };


        var c10 =
        {

            title:"Items such as automotive batteries, gasoline or equipment that" +
            " contains gasoline, and any other item that may be hazardous are prohibited" +
            " from Wave vehicles. If you are unsure of an item you wish to" +
            " bring on the bus, please call 343-0106 for specific instructions."

        };

        var c11 =
        {
            title:"Service is not provided on the following recognized holidays: New Year's Day; Martin Luther King, Jr. Day;" +
            " Memorial Day; Independence Day; Labor Day; Easter; Thanksgiving; & Christmas."
        }
;

        var c12 =
        {
            title:"The Cape Fear Public Transportation Authority" +
            " (Wave Transit) is committed to ensuring that no person is excluded from participating in or denied the benefits of any of the Authority's services on the basis of race, color, national origin, sex, age, disability or socioeconomic status as protected by" +
            " Title VI or the Civil Rights Act of 1964 and the Executive Order on Environmental Justice.  "
        };

        $scope.items = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12];




    }]);
