function pm0062(time) {
    console.log(time + "\uCD08 \uD6C4\uC5D0 fullfilled \uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
}
setTimeout(function () {
    pm0062(1);
    setTimeout(function () {
        pm0062(2);
        setTimeout(function () {
            pm0062(3);
            setTimeout(function () {
                pm0062(4);
                setTimeout(function () {
                    pm0062(5);
                    console.log('작업이 종료되었습니다.');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
console.log('다른 작업이 있는지 확인합니다.');
