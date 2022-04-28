//tsc 009 -lib esnext,dom
function pm009(ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(ms);
        }, ms);
    });
}
Promise.race([
    pm009(1000),
    pm009(2000),
    pm009(3000)
])
    .then(function (ms) {
    console.log(ms);
    console.log('밀리초의 경과시간을 가진 프로미스가 먼저 종료되었습니다.');
    console.log('');
});
Promise.all([
    pm009(1000),
    pm009(2000),
    pm009(3000)
])
    .then(function (ms) {
    console.log(ms);
    console.log('밀리초의 경과시간을 가진 3개 프로미스가 모두 실행되었습니다.');
});
