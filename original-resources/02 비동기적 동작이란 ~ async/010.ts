//tsc 010 -lib esnext,dom

function pm010(ms){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve(ms);
    },ms)
  })
};


(async function(){
  const ms = await Promise.race([
    pm010(1000),
    pm010(2000),
    pm010(3000)
  ])
  console.log(ms)
  console.log('밀리초의 경과시간을 가진 프로미스가 먼저 종료되었습니다.')
  console.log('')
})();


(async function(){
  const ms = await Promise.all([
    pm010(1000),
    pm010(2000),
    pm010(3000)
  ])
  console.log(ms)
  console.log('밀리초의 경과시간을 가진 3개 프로미스가 모두 실행되었습니다.')
})();
