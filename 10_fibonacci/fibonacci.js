const fibonacci = function(count) {
    let fib = [0, 1]; // Initialize array!
    
    for (i = 2; i <= count; i++) {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i - 2] + fib[i - 1];
    };
    
    return (count < 0 ? "OOPS" : fib[count]);

};

// Do not edit below this line
module.exports = fibonacci;
