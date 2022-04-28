console.log(Date.now() + " 1\uBC88 \uC791\uC5C5 \uC2DC\uC791");
setTimeout(function () {
    var start = Date.now();
    console.log(start + " 1\uBC88 \uC791\uC5C5 \uC911");
    for (var i_1 = 0; i_1 < 100000000; i_1++) {
    }
    var end = Date.now();
    console.log("1\uBC88 \uC791\uC5C5 \uC885\uB8CC, \uACBD\uACFC \uC2DC\uAC04 : " + (end - start) + " ms");
});
console.log(Date.now() + " 2\uBC88 \uC791\uC5C5 \uC2DC\uC791");
