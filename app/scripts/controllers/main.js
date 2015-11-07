'use strict';

/**
 * @ngdoc function
 * @name intervalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the intervalApp

 */
angular.module('intervalApp')
    .controller('MainCtrl', ['$scope', '$interval', '$timeout', 'intervalSets', 'localStorageService', 
        function ($scope, $interval, $timeout, intervals, localStorage ) {

            $scope.running = true;
            $scope.toggleRunning = function() {
            $scope.running = $scope.running === false ? true: false;
          };

        $scope.intervalTitles = { 1: "warm-up", 2: "speedup", 3: "slowdown", 4: "cool-down" }

        $scope.appSets = intervals.getAppSets();
        // $scope.userSets = intervals.getUserSets();

        console.log(1, $scope.appSets);
        if(!$scope.appSets) {
            intervals.setIntervalSets();
            $scope.appSets = intervals.getAppSets();
            // $scope.userSets = intervals.getUserSets();
        }
        console.log(2, $scope.appSets)


        // $scope.setSubtract = function() {
        //     console.log("Before Delete:", $scope.userSets);
        //     var last = parseInt(Object.keys($scope.userSets)[Object.keys($scope.userSets).length - 1]);
        //     delete $scope.userSets[last];
        //     }
        //
        // $scope.setAdd = function() {
        //     var last = parseInt(Object.keys($scope.userSets)[Object.keys($scope.userSets).length - 1]);
        //     var newSet = $scope.userSets[last];
        //     if (newSet != undefined) { $scope.userSets[last + 1] = newSet; } else { $scope.userSets[0] = {rest: {type: 3, duration: $scope.appSets[1].duration}, run: { type: 2, duration: $scope.appSets[1].duration}} };
        //     }


/// REALLY SIMPLE IMPLEMENTATION OF WHAT YOU webkit-linear-gradient

var obj = {0: "first", 1: "second", 2: { "obj2" : "middleout", "again" : "again?"} }
var last = obj[Object.keys(obj)[Object.keys(obj).length - 1]];
obj[3] = last;


}]);
