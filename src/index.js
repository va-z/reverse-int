module.exports = function reverse(n) {
    if (n < 0) n *= -1;
    let result = 0;

    while (n !== 0) {
        result *= 10;
        result += n % 10;
        n = (n / 10) | 0;
    }
    return result;
};
