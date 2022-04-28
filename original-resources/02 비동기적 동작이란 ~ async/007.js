//tsc 007 -lib esnext,dom
function pm007() {
    return new Promise(function (resolve, reject) {
        //reject(new Error('reason'));
        setTimeout(function () {
            resolve('초 후에 fullfilled 되었습니다.');
        }, 1000);
    });
}
;
pm007()["catch"](function (error) {
    console.log(error + '\n작업이 종료되었습니다.');
})
    .then(function (msg) {
    console.log('1' + msg);
    return pm007();
})
    .then(function (msg) {
    console.log('2' + msg);
    return pm007();
})
    .then(function (msg) {
    console.log('3' + msg);
    return pm007();
})
    .then(function (msg) {
    console.log('4' + msg);
    return pm007();
})
    .then(function (msg) {
    console.log('5' + msg + '\n작업이 종료되었습니다.');
});
console.log('다른 작업이 있는지 확인합니다.');
