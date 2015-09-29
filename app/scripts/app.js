'use strict';

/**
 * @ngdoc overview
 * @name intervalApp
 * @description
 * # intervalApp
 *
 * Main module of the application.
 */
var module = angular
  .module('intervalApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
])


  .config(function ($routeProvider, localStorageServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })

      .when('/settime', {
        templateUrl: 'views/settime.html',
        controller: 'setTimeCtrl',
        controllerAs: 'setTime'
      })

      .otherwise({
        redirectTo: '/'
      });

    localStorageServiceProvider
        .setPrefix('intervalApp');

  });

// function Timer(minutes) {
//     this.thing = "thing";
    //this.seconds = 0;
    //this.secFlat = parseInt(this.seconds % 60, 10);
    //this.minute = parseInt(this.seconds / 60, 10);
//}

// var sectionMinutes = .1 ;
// var seconds = sectionMinutes * 60;
// var timerActive = true;
// var timerInterval;
//
//
// var secondsCountdown = function(e) {
//     timerInterval = setInterval(function() {
//         console.log(e);
//         --e;
//         if (e === 0) {
//             clearInterval(timerInterval)
//             console.log("finished!")
//             };
//     }
//     , 1000);
// }
//
// console.log(secondsCountdown(seconds));
//
//var Interval = null;

// var Interval = setInterval(function(){
//     console.log(minute);
//     --seconds;
//     if(seconds == 0) { console.log("zeroed!"); clearInterval(Interval); }
// },1000);



// setInterval(function() {
//     console.log("late", seconds);
// }, 6000);
// while(second > 0) {
// setInterval(function(){
//     var minutes = parseInt(second / 60);
//     var seconds = second % 60;
//     console.log(minutes,":", seconds);
//     second = second--;
//         }, 1000)
//     }
