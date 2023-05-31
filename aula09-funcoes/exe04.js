function fatorial(x) {
    let res = 1

    for (c = x; c != 1; c--) {
        res *= c
    }

    return res
}

console.log(fatorial(5))