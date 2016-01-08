'use strict';

module
.directive('intervalSet', ['$timeout', '$interval', function($timeout, $interval){

  return {
    restrict: 'E',
    replace: true,

    scope: {
      config: '=?',
      intervals: '=?',
      running: '=?'
    },

    controller: ['$scope', function($scope){
      $scope.test = $scope.config;
      var firstInterval = {
        title: 'Warm-Up',
        cssname: 'warm-up',
        active: true,
        duration: $scope.config.warmUpTime,
        remainingTime:  $scope.config.warmUpTime
      };
      var lastInterval = {
        title: 'Cool-Down',
        cssname: 'cool-down',
        active: false,
        duration: $scope.config.warmUpTime,
        remainingTime:  $scope.config.warmUpTime
      };

      var getIntervalSum = function(intervals){
        var sum = 0;
        _.each(intervals, function(interval){
          // window.console.log(interval.duration);
          sum += interval.duration;
        });
        return sum;
      };

      var generateIntervals = function(num){
        $scope.intervalsArray = [];

        _.times($scope.intervals, function(n){
          var d = 90;

          var sprint = {
            title: 'Sprint',
            cssname: 'speedup',
            active: false,
            duration: $scope.config.sprintTime,
            remainingTime: $scope.config.sprintTime
          };

          $scope.intervalsArray.push(sprint);

          if(n !== $scope.intervals-1) {
            var unsprint = {
              title: 'Unsprint',
              cssname: 'slowdown',
              active: false,
              duration: $scope.config.unsprintTime,
              remainingTime: $scope.config.unsprintTime
            };

            $scope.intervalsArray.push(unsprint);
          }
        });
        $scope.intervalsArray.unshift(firstInterval);
        $scope.intervalsArray.push(lastInterval);

        $scope.intervalSum = getIntervalSum($scope.intervalsArray);
      };

      generateIntervals($scope.intervals);

      $scope.$watch('intervals', function(val){
        generateIntervals(val);
      });

      // $scope.$watch('isRunning', function(val){
      // });

    }],

    templateUrl: 'views/templates/interval-set.html',

    link: function(scope, element, attr) {
      window.console.log(scope.test);

      var runner = null;
      // scope.time = moment();
      scope.time = 0;

      var manageInterval = function(count){
        window.console.log(scope.intervalSum);
      };

      var setActiveInterval = function(intervals, time){

        _.each(intervals, function(interval){
          if(time < interval.duration) {

          }
          // interval.duration
          // time
          // scope.intervalSum
          // compare time with interval duration
        });
      };

      // manageInterval(scope.time);
      var _startTimer = function () {
        runner = $interval(function () {
          scope.time++;
        }, 1000);
      };
      var _stopTimer = function () {
        if (angular.isDefined(runner)) {
          $interval.cancel(runner);
          // window.console.log('stop');
        }
      };

      // scope.mode = 'tell';
      scope.$watch('running', function(val){
        if(val) {
          _startTimer();
        } else {
          _stopTimer();
        }
      });

      scope.$watch('time', function(val){
        setActiveInterval(scope.intervalsArray, val);
      });
    }

  };

}]);
