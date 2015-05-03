angular.module("priceCtrl",[] )
    .controller('PriceCtrl' , [ '$scope' , function($scope ) {


        var p1 =
        {
            title:"Adult cash",
            price:"$2.00"


        };

        var p2 =
        {
            title:" Reduced Senior Citizen 65 and older cash "+
           " (with medicare card or valid ID)",
            price:"$1.00"


        };
        var p3 =
        {
            title:"Reduced student Cash"+
            "(grades K thru 12 & local college students with valid ID)",
            price:"$1.00"


        };
        var p4 =
        {
            title:"UNCW Students ",
            price:"Free"


        };
        var p5 =
        {
            title:"Transfers",
            price:"Free"


        };
        var p6 =
        {
            title:"Adult one day pass"+
          "  (valid for 24 consecutive hours)",
            price:"$5.00"


        };
        var p7 =
        {
            title:"Reduced one day pass"+
          "  (valid for 24 consecutive hours)",
            price:"$2.50"


        };
        var p8 =
        {
            title:"Adult seven day pass"+
            "(valid for 7 consecutive calendar days)",
            price:"$20.00"


        };

        var p9 =
        {
            title:"Reduced seven day pass"+
          " (valid for 7 consecutive calendar days)",
            price:"$10.00"

        };

        var p10 =
        {
            title:"Adult thirty-one day pass"+
            "(valid for 31 consecutive calendar days)",
            price:"$80.00"

        };

        var p11 =
        {
            title:"Reduced thirty-one day pass"+
           "(valid for 31 consecutive calendar days)",
            price:"$40.00"

        };

        var p12 =
        {
            title:"Adult ten ride pass"+
            "(valid for 10 rides)",
            price:"$20.00"

        };
        var p13 =
        {
            title:"Reduced ten ride pass"+
            "(valid for 10 rides)",
            price:"$10.00"

        };
        var p14 =
        {
            title:"Complementary ADA Paratransit ticket"
            +"(DART service only) ",
            price:"$4.00"

        };

        var p15=
        {
            title: "Complementary ADA Paratransit ticket book"+
            "(valid for 10 rides DART service only)",
            price: "40.00"

        };

            $scope.allPrice=[p5,p1,p4,p2,p3,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15];




        $scope.reveal = (
            function(item)
            {

                if (item.show == true)
                {
                    item.show = false;
                }
                else
                    item.show = true
                return item.show;
            }


        );





    }
]
);
