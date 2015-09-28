'use strict';

/**
 * @ngdoc function
 * @name intervalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intervalApp

 */
angular.module('intervalApp')
    .controller('MainCtrl', ['$scope', '$interval', '$timeout', 'intervalSets',
        function ($scope, $interval, $timeout, intervals  ) {

            $scope.running = true;
            $scope.toggleRunning = function() {
            $scope.running = $scope.running === false ? true: false;
          };

        $scope.intervalTitles = { 1: "warm-up", 2: "speedup", 3: "slowdown", 4: "cool-down" }

        $scope.appSets = intervals.appSets;
        $scope.userSets = intervals.userSets;

        console.log("Logging shit",intervals.appSets, $scope.userSets);
        // $scope.appSets = {
        //         0: {type: 1, duration: 720 },
        //         1: {type: 2, duration: 180 },
        //         2: {type: 4, duration: 720 }
        //         }
        //
        // $scope.userSets = {
        //     0: { rest: {type: 3, duration: 180}, run: { type: 2, duration: 180 } },
        //     1: { rest: {type: 3, duration: 180}, run: { type: 2, duration: 180 } }
        //     }
        //
//            console.log("Before Button:", $scope.userSets);

        $scope.setSubtract = function() {
            console.log("Before Delete:", $scope.userSets);
            var last = parseInt(Object.keys($scope.userSets)[Object.keys($scope.userSets).length - 1]);
            delete $scope.userSets[last];
    //        console.log("After Delete:", $scope.userSets);
            }

        $scope.setAdd = function() {
            var last = parseInt(Object.keys($scope.userSets)[Object.keys($scope.userSets).length - 1]);
            var newSet = $scope.userSets[last];
            if (newSet != undefined) { $scope.userSets[last + 1] = newSet; } else { $scope.userSets[0] = {rest: {type: 3, duration: $scope.appSets[1].duration}, run: { type: 2, duration: $scope.appSets[1].duration}} };
//            console.log("After Button:", $scope.userSets);
//            return $scope.getSet($scope.set);
            }



/// REALLY SIMPLE IMPLEMENTATION OF WHAT YOU webkit-linear-gradient

var obj = {0: "first", 1: "second", 2: { "obj2" : "middleout", "again" : "again?"} }
var last = obj[Object.keys(obj)[Object.keys(obj).length - 1]];
obj[3] = last;
//console.log(obj, "breaker", obj[3]);



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
