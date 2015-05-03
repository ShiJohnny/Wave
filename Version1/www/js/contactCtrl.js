angular.module("contactCtrl",[] )
    .controller('ContactCtrl' , [ '$scope' , function($scope) {


        $scope.physicalAdress =
        {
            title : "Main Office" ,
            info: "Forden Station 505 Cando St. Wilmington, NC 28405 "
           , show: false
        };

       $scope.mailingAdresss =
       {
           title : "Mailing Address",
           info:"P.O. Box 12630 Wilmington, NC 28405 "
           , show: false
       };

        $scope.phone =
        {
            title: "Telephone Number",
            info: "(910) 343-0106"
            , show: false
        };


        $scope.fax =
        {
            title:"Fax Number",
            info: " (910) 343-8317"
            , show: false
        };

        $scope.email =
        {
            title: "Email Address",
            info:"wavetransit@wavetransit.com"
            , show: false
        };


        $scope.reveal = (
            function(item)
            {

                if (item.show)
                {
                    item.show = false;
                }
                else
                {  item.show = true;}
                return item.show;
            }


        );





    }]
);

