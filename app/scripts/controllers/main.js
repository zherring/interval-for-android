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
        function ($scope, $interval, $timeout) {

        var sectionMinutes = .1 ;
        var seconds = sectionMinutes * 60;
        var timerActive = true;
        var timerInterval;

        // TimerRunning? We shall see
        $scope.timerRunning = true;

        $scope.toggleTimer = function() {
            $scope.timerRunning = $scope.timerRunning === false ? true: false;
            };


        $scope.helloWorld = "Hello World!";
        $scope.time = 3;

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
