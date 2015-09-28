module.service( 'intervalSets', ['$rootScope', 'localStorageService',
    function( $rootScope, localStorage ) {
    var service = {

        defaultAppSets: {
            0: {type: 1, duration: 720 },
            1: {type: 2, duration: 180 },
            2: {type: 4, duration: 720 }
            },

         defaultUserSets: {
            0: { rest: {type: 3, duration: 180}, run: { type: 2, duration: 180 } },
            1: { rest: {type: 3, duration: 180}, run: { type: 2, duration: 180 } }
            },

        getAppSets: localStorage.get("appSets"),
        getUserSets: localStorage.get("userSets"),

        }

//        console.log(service.getAppSets == null, service.getUserSets == null)

    if(service.getAppSets == null && service.getUserSets == null) {
        console.log("if was fired!");
        localStorage.clearAll(/^\d+$/);
            localStorage.set('appSets' , service.defaultAppSets)
            localStorage.set('userSets' , service.defaultUserSets)
        }


    return service;

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
