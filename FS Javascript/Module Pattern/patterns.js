//Pattern 1------------------------------------------------------
(function(){ //The most basic module pattern (this and end line)
    function foo() {
    console.log('foobar');
};

foo();
}()); //wrapped in closures



//Pattern 2------------------------------------------------------
+function(){ //use a plus sign instead of closures
    function foo() {
    console.log('foobar');
};

foo();
}(); 


//Pattern 3------------------------------------------------------
!function(){ //using bang instead of plus
    function foo() {
    console.log('foobar');
};

foo();
}(); 

//Pattern 4------------------------------------------------------
!function(underscore){ //import global stuff and namespace it. Reassigns underscore to _. Can use for extending
    underscore.someawesomenewmethod = "yay!!?";
    console.log(underscore.VERSION);
}(_); //note differing param name 