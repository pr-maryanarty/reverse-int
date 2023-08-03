module.exports = function reverse(n) {
    if (n >= 0) {
        return n.toString().split("").reverse().join("");
    } else {
        let number = n * -1;
        return number.toString().split("").reverse().join("");
    }
};
