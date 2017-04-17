var awesomeNewModule = (function(){
    var exports = {
        foo: 5,
        bar: 10
    };
    exports.helloMars = function() {
        console.log("Hello Mars!");
    };
    exports.goodbye = function() {
        console.log("Goodbye!");
    };
    return exports
}());


//Loose Augmentation 
// var awesomeNewModule = (function(exports){
//     var exports = {
//         foo: 5,
//         bar: 10
//     };
//     exports.helloMars = function() {
//         console.log("Hello Mars!");
//     };
//     exports.goodbye = function() {
//         console.log("Goodbye!");
//     };
//     return exports
// }(awesomeNewModule || {}));


//Create sub module
// var awesomeNewModule2.sub = (function(exports){
//     var exports = {
//         foo: 5,
//         bar: 10
//     };
//     exports.helloMars = function() {
//         console.log("Hello Mars!");
//     };
//     exports.goodbye = function() {
//         console.log("Goodbye!");
//     };
//     return exports
// }(awesomeNewModule || {}));

