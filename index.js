function qz_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = qz_random;