// module.service( 'intervalSets', ['$rootScope', 'localStorageService',
//     function( $rootScope, localStorage ) {
//
//         var _defaultAppSets = [
//             {type: 1, duration: 720, default: true},
//             {type: 2, duration: 180, default: true},
//             {type: 3, duration: 180},
//             {type: 2, duration: 180 },
//             {type: 4, duration: 720, default: true}
//         ];
//
//         var getAppSets = function() {
//             var appSets = localStorage.get("appSets");
//             return appSets;
//         };
//
//         var setIntervalSets = function(appSets) {
//             console.log("fired!");
//             appSets = appSets || _defaultAppSets;
//
//             localStorage.set('appSets' , appSets);
//         };
//
//         return {
//             getAppSets: getAppSets,
//             setIntervalSets: setIntervalSets
//         };
//
// }]);
