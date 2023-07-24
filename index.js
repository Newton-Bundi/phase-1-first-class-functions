function receivesAFunction(callback) {
    callback();
  }
  
function myCallback() {
    console.log("This is my callback function");
  }
  
receivesAFunction(myCallback);

function returnsANamedFunction(){
    return function myCallback() {
        console.log("This is my callback function");
      }
}
  
function returnsAnAnonymousFunction(){
    return function() {
        console.log("This is my callback function");
    }
}