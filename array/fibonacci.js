  var fibonacci = []; //{1}
  fibonacci[1] = 1; //{2}
  fibonacci[2] = 1; //{3}
  
  for (var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; ////{4}
  }
  for (var i = 1; i < fibonacci.length; i++) { //{5}
    console.log(fibonacci[i]); //{6}
  }
