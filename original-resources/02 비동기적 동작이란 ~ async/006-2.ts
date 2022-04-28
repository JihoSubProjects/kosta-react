function pm0062(time) {
  console.log(`${time}초 후에 fullfilled 되었습니다.`);
}

setTimeout(() => {
  pm0062(1);
  setTimeout(() => {
    pm0062(2);
    setTimeout(() => {
      pm0062(3);
      setTimeout(() => {
        pm0062(4);
        setTimeout(() => {
          pm0062(5);
          console.log('작업이 종료되었습니다.')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}, 1000)

console.log('다른 작업이 있는지 확인합니다.');
