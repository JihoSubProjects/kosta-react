console.log(`${Date.now()} 1번 작업 시작`)

setTimeout(() => {
    const start = Date.now();
    console.log(`${start} 1번 작업 중`);
    for (let i = 0; i < 100000000; i++) {

    }
    const end = Date.now();

    console.log(`1번 작업 종료, 경과 시간 : ${end-start} ms`)
  })


console.log(`${Date.now()} 2번 작업 시작`)
