'use strict';

/**
 * @ngdoc function
 * @name intervalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intervalApp

 */
angular.module('intervalApp')
    .controller('MainCtrl', ['$scope', '$interval', '$timeout', 'localStorageService',
        function ($scope, $interval, $timeout, localStorage ) {

            $scope.isRunning = false;

            $scope.toggleRunning = function() {
              $scope.isRunning = !$scope.isRunning;
            };

            $scope.intervalNum = 5;
            // $scope.intervalTitles = { 1: "warm-up", 2: "speedup", 3: "slowdown", 4: "cool-down" }   GOES INTO DIRECTIVE
            $scope.intervalDuration = { 1: 10, 2: 5, 3: 5};

            $scope.setSubtract = function() { if($scope.intervalNum > 1) { $scope.intervalNum = $scope.intervalNum - 1; }};
            $scope.setAdd = function() { $scope.intervalNum = $scope.intervalNum + 1; };


            var countDownClock;
            var reduceTime = function(e) { e = e -1; };

        //    var countDownClock = setInterval(reduceTime(e),1000);

            var startcountDownClock = function() {

            };




            // var reduceTime;
            //
            // function timerGo(e) {
            //     reduceTime = setInterval(myTimer(e), 1000);
            //     console.log("Started!");
            //     }
            //
            // function myTimer(e) {
            //     if(e > 0) { e = e-1; } else { clearInterval(reduceTime); }
            //     }
            //
            // $scope.active = function() {
            //     $scope.activeDuration = $scope.intervalDuration[0];
            //
            // }
            //

            $scope.intervalConfig = {
              warmUpTime: 300,
              sprintTime: 90,
              unsprintTime: 95
            };

}]);
