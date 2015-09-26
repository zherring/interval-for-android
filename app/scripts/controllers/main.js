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
        function ($scope, $interval, $timeout  ) {

            $scope.running = true;
            $scope.toggleRunning = function() {
            $scope.running = $scope.running === false ? true: false;
          };

        $scope.intervalTitles = { 1: "warm-up", 2: "speedup", 3: "slowdown", 4: "cool-down" }

        $scope.appSets = {
                0: {type: 1, duration: 720 },
                1: {type: 2, duration: 180 },
                2: {type: 4, duration: 720 }
                }

        $scope.userSets = {
            0: {type: 3, duration: 180 }
            
            }



        $scope.setSubtract = function() {
            var latestDuration;
            var checked = $scope.userSets[Object.keys($scope.userSets)[Object.keys($scope.userSets).length - 1]]

            console.log("Fired!", latestDuration, checked, (checked == undefined));



//            console.log(latestDuration);
            }

        $scope.setAdd = function() {
            $scope.set = $scope.set + 1;
//            return $scope.getSet($scope.set);
            }





    //    console.log("It's working!", moment().unix());

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
