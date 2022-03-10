export function fibonacci(number = 1) {
    console.log('Fibonacci RE-INIT');

    let a = 1;
    let b = 0;
    let temp;

    while (number >= 0){
        temp = a;
        a = a + b;
        b = temp;
        number--;
    }

    return b;
}
