'use strict';

(function initLoop() {
  function doLoop(x) {
    console.log('loop:', x);
  }
  
  for (let i = 0; i < 10; i++) {
    doLoop(i + 1);
  }
})();


//Let gives you 'block level scoping' it only exists in the context of the function it was created in

