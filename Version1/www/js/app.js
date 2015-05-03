// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


    .config(function( $ionicConfigProvider,$stateProvider, $urlRouterProvider) {

        $ionicConfigProvider.tabs.style('standard');
        $ionicConfigProvider.tabs.position('bottom');
        $ionicConfigProvider.views.transition('ios');
        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.navBar.positionPrimaryButtons('left');
        $ionicConfigProvider.navBar.positionSecondaryButtons('right');
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

      .state('app.busRoute', {
          url: "/busRoute",
          views: {
              'menuContent': {
                  templateUrl: "templates/BusRoute/busRoute.html",
                  controller:"BusRouteCtrl"
              }
          }
      })


      .state('app.singleView', {
          url: "/singleView",
          views: {
              'menuContent': {
                  templateUrl: "templates/BusRoute/singleView.html"
              }
          }
      })

      .state('app.start', {
          url: "/start",
          views: {
              'menuContent': {
                  templateUrl: "templates/Start.html"
              }
          }
      })


      .state('app.tripPlanner', {
          url: "/tripPlanner",
          views: {
              'menuContent': {
                  templateUrl: "templates/TripPlanner/tripPlanner.html",
                  controller: "TripCtrl"
              }
          }
      })

      .state('app.etaTable', {
          url: "/etaTable",
          views: {
              'menuContent': {
                  templateUrl: "templates/BusRoute/etaTable.html"
              }
          }
      })
      .state('app.allBusView', {
          url: "/allBusView",
          views: {
              'menuContent': {
                  templateUrl: "templates/BusRoute/allBusView.html"
              }
          }
      })
      .state('app.UNCWBus', {
          url: "/UNCWBus",
          views: {
              'menuContent': {
                  templateUrl: "templates/BusRoute/UNCWBus.html"
              }
          }
      })

      .state('app.tab', {
          url: "/tab",
          abstract: true,
          views: {
              'menuContent' :{
                  templateUrl: "templates/TripPlanner/tab.html"
              }
      }})

      .state('app.tab.map', {
          url: "/map",
          views: {
              'mapTab': {
                  templateUrl: "templates/map.html",
                  controller: "TripMapCtrl"
              }
          }
      })

      .state('app.tab.directionView', {
          url: "/directionView",
          views: {
              'dirTab': {
                  templateUrl: "templates/direction.html",
                  controller: "TripDirCtrl"
              }
          }
      })

      ////contact tab

      .state('app.contact', {
          url: "/contact",
          views: {
              'menuContent': {
                  templateUrl: "templates/Contact/contact.html",
                  controller: "ContactCtrl"
              }
          }
      })

      ////////////////////////////////////////////end trip tab

      .state('app.about', {
          url: "/about",
          abstract: true,
          views: {
              'menuContent' :{
                  templateUrl: "templates/AboutUs/aboutTab.html"
              }
          }})

      .state('app.about.history', {
          url: "/history",
          views: {
              'historyTab': {
                  templateUrl: "templates/AboutUs/history.html"
                  ,controller: "MissAndHistoryCtrl"  ////this ctrl is in controller.js
              }
          }
      })
      .state('app.about.mission', {
          url: "/mission",
          views: {
              'missionTab': {
                  templateUrl: "templates/AboutUs/mission.html",
                  controller: "MissAndHistoryCtrl"
                  ////this ctrl is in controller.js

              }
          }
      })
      .state('app.about.goals', {
          url: "/goals",
          views: {
              'goalsTab': {
                  templateUrl: "templates/AboutUs/goal.html",
                  controller:"GoalCtrl"


              }
          }
      }


  )



///////////////////////////////////// end of aboutus tab


        ////fare tab
            .state('app.fare', {
                url: "/fare",
                abstract: true,
                views: {
                    'menuContent' :{
                        templateUrl: "templates/Fare/fareTab.html"
                    }
                }})


      .state('app.fare.info', {
          url: "/info",
          views: {
              'fareInfoTab': {
                  templateUrl: "templates/Fare/fareinfo.html"
                  ,controller: "FareInfoCtrl"

              }
          }
      }


  )
      .state('app.fare.price', {
          url: "/price",
          views: {
              'priceTab': {
                  templateUrl: "templates/Fare/price.html"
                  ,controller: "PriceCtrl"

              }
          }
      })


      .state('app.fare.Saving', {
          url: "/Saving",
          views: {
              'costTab': {
                  templateUrl: "templates/Fare/Saving.html"
                  ,controller: "CostCtrl"

              }
          }
      })
  /////////////////////end app fare


      .state('app.faq', {
          url: "/faq",
          views: {
              'menuContent': {
                  templateUrl: "templates/faq/faq.html"
                  ,controller: "FaqCtrl"

              }
          }
      })

  ;





        // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
});
