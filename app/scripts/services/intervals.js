module.service( 'intervalSets', ['$rootScope', 'localStorageService',
    function( $rootScope, localStorage ) {

        var _defaultAppSets = [
            {type: 1, duration: 720, default: true},
            {type: 2, duration: 180, default: true},
            {type: 3, duration: 180},
            {type: 2, duration: 180 },
            {type: 3, duration: 180},
            {type: 2, duration: 180 },
            {type: 4, duration: 720, default: true}
        ];

        // var _defaultUserSets = [
        //     { rest: {type: 3, duration: 180}, run: { type: 2, duration: 180 } },
        //     { rest: {type: 3, duration: 180}, run: { type: 2, duration: 180 } }
        // ];

        var getAppSets = function() {
            var appSets = localStorage.get("appSets");
            return appSets;
        };

        // var getUserSets = function() {
        //     var userSets = localStorage.get("userSets");
        //     return userSets;
        // };

        var setIntervalSets = function(appSets) {
            console.log("fired!");
            appSets = appSets || _defaultAppSets;
            // userSets = userSets || _defaultUserSets;

            localStorage.set('appSets' , appSets);
            // localStorage.set('userSets' , userSets);
        };

        return {
            getAppSets: getAppSets,
            // getUserSets: getUserSets,
            setIntervalSets: setIntervalSets
        };

}]);


//
// module.service( 'Book', [ '$rootScope', function( $rootScope ) {
//     var service = {
//         books: [
//            { title: "Magician", author: "Raymond E. Feist" },
//            { title: "The Hobbit", author: "J.R.R Tolkien" }
//          ],
//
//          addBook: function ( book ) {
//            service.books.push( book );
//            $rootScope.$broadcast( 'books.update' );
//          }
//    }
//
//    return service;


 //
 //
 // module.service( 'Book', [ '$rootScope', function( $rootScope ) {
 //  2   var service = {
 //  3     books: [
 //  4       { title: "Magician", author: "Raymond E. Feist" },
 //  5       { title: "The Hobbit", author: "J.R.R Tolkien" }
 //  6     ],
 //  7
 //  8     addBook: function ( book ) {
 //  9       service.books.push( book );
 // 10       $rootScope.$broadcast( 'books.update' );
 // 11     }
 // 12   }
 // 13
 // 14   return service;
 // 15 }]);
