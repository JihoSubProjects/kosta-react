//tsc 008 -lib esnext,dom

function pm008() {
  return new Promise(function (resolve, reject) {
    // reject(new Error('reason'));
    setTimeout(() => {
      resolve('초 후에 fullfilled 되었습니다.');
    }, 1000)
  })
};

(async function () {
  try {
    const msg1 = await pm008();
    console.log('1' + msg1);

    const msg2 = await pm008();
    console.log('2' + msg2);

    const msg3 = await pm008();
    console.log('3' + msg3);

    const msg4 = await pm008();
    console.log('4' + msg4);

    const msg5 = await pm008();
    console.log('5' + msg5);

  } catch (error) {
    console.log(error)

  } finally {
    console.log('작업이 종료되었습니다.')
  }
})();



console.log('다른 작업이 있는지 확인합니다.')