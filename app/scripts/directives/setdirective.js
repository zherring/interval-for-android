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

      $scope.timer = 0;
      // currently not working
      var run = function(isRunning) {
        if(isRunning) {
          window.console.log('run timer');
          $interval(function() {
            $scope.timer++;
          }, 1000);
        }
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
      };

      generateIntervals($scope.intervals);

      $scope.$watch('intervals', function(val){
        generateIntervals(val);
      });

      $scope.$watch('isRunning', function(val){
        run(val);
      });

    }],

    templateUrl: 'views/templates/interval-set.html',

    link: function(scope, element, attr) {
      window.console.log(scope.test);
    }

  };

}]);
