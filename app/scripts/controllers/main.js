'use strict';

/**
 * @ngdoc function
 * @name intervalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intervalApp

 */
angular.module('intervalApp')
    .controller('MainCtrl', ['$scope', '$interval', '$timeout',
        function ($scope, $interval, $timeout   ) {

            $scope.running = true;
            $scope.toggleRunning = function() {
            $scope.running = $scope.running === false ? true: false;
          };

          $scope.set = 4;
          $scope.getSet = function(num) {
            return new Array(num);
            };

        $scope.active = false;

        $scope.setSubtract = function() {
            $scope.set = $scope.set - 1;
            return $scope.getSet($scope.set);
            }

        $scope.setAdd = function() {
            $scope.set = $scope.set + 1;
            return $scope.getSet($scope.set);
            }



        //
        // var sectionMinutes = .1 ;
        // var seconds = sectionMinutes * 60;
        // var timerActive = true;
        // var timerInterval;
        //
        // // TimerRunning? We shall see
        // $scope.timerRunning = true;
        //
        // $scope.toggleTimer = function() {
        //     $scope.timerRunning = $scope.timerRunning === false ? true: false;
        //     };
        //
        //
        // $scope.helloWorld = "Hello World!";
        // $scope.time = 3;

//x        var timerFunction = function(e) {
            // while($scope.timeRunning) {
            //     --$scope.time;
            //     if($scope.time === 0) { $scope.timerRunning = false; }
            //     $timeout(timerFunction,1000);
            //     }
//            };


//        $interval(timerFunction, 1000);
    //
    // var secondsCountdown = function(e) {
    //     $scope.interval = setInterval(function() {
    //         $scope.time = e;
    //         console.log("this is inside interval", $scope.time);
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


}]);
