function(main){
  var n = readFloat("Enter your 'n' value (in decimal form): ");
  var k = readInt("Enter your 'k' value (whole numbers only): ");
  var r = readFloat("Enter your 'r' value: ");
  var theta = readFloat("Enter your theta value in radians (use 'Math.PI' instead of pi to ensure your theta value is communicated properly. For example, pi/4 would be Math.PI/4): ")
  for (let i = 0; i < k; i++){
    var currentEquation = 1;
    while (currentEquation != k){
      var nrtr = Math.pow(r, k);
      var exp1 = (1 / n);
      var exp2 = (theta + (2*k*Math.PI));
      var exp3 = (exp1 * exp2);
      console.log("The exponent that corresponds to the " + i + " root is: " + exp3);
      currentEquation++;
    }
  }
  console.log("All exponents should be computed. If any are improperly computed, then open an issue on the issue tracker at https://github.com/Jaro-29/jaro29site/issues");
  console.log("Make sure your issue hasn't already been logged!");
}

main();
