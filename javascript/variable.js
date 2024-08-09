function exampleVar() {
    var x = 10; // => initialize
    if (true) {
        var x = 20; // Same variable x -> initialize
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20 -> never throught the function
  }
  
  // exampleVar(); // var function scoped or global scoped
  
  function exampleLet() {
    let y = 10; // => initialize
    if (true) {
        let y = 20; // Different variable  -> initialize - y
        console.log(y); // Output: 20
    } // end of y here (within the block)
    console.log(y); // Output: 10
  } // ==> end of the function y will die
  
  exampleLet();
  
  function exampleConst() {
    const z = 30;
    if (true) {
        const z = 40; // Different variable z
        console.log(z); // Output: 40
    }
    console.log(z); // Output: 30
  }
  
  exampleConst();
  
  // var function scoped
  // let, const are blocked scope
  
  
  //let, const difference
  
  // let we can re-assign, const we cannpt re-assgined
  // but arr, obj we add/remove/change for const