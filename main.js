function(main){
  var n = readFloat("Enter your 'n' value (in decimal form): ");
  var k = readInt("Enter your 'k' value (whole numbers only): ");
  var r = readFloat("Enter your 'r' value: ");
  var theta = readFloat("Enter your theta value as a pi-less fraction: ")
  for (let i = 0; i < k; i++){
    var currentEquation = 1;
    while (currentEquation != k){
      var nrtr = Math.pow(r, k);
      var exp1 = (1 / n);
      var exp2 = (theta + (2*k*Math.PI));
      var exp3 = (exp1 * exp2);
      console.log("The exponent that corresponds to the " + i + " root is: " + exp3);
      currentEquation + 1;
    }
  }
}

main();
