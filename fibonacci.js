function fibonacci(num) {
    // Set start value of fibonacci number
    let buffer = [];
    let value;
    let value0 = 0;
    let value1 = 1;
    // When num, output value of buffer[num]
    for (let i = 0; i <= num; i++) {
        buffer.push(value0);
        value = value0 + value1;
        value0 = value1;
        value1 = value;
    }
    console.log(buffer[num]);
}

fibonacci(0);
fibonacci(1);
fibonacci(4);
fibonacci(6);