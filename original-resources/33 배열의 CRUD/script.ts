const dataArray = [
  {"id":1,"first_name":"Ahmed","last_name":"Brotherton","english":"78","math":"88","history":"87"},
  {"id":2,"first_name":"Mariellen","last_name":"Phetteplace","english":"77","math":"64","history":"64"},
  {"id":3,"first_name":"Olympie","last_name":"MacFadyen","english":"69","math":"94","history":"88"},
  {"id":4,"first_name":"Earl","last_name":"Tennock","english":"61","math":"99","history":"95"},
  {"id":5,"first_name":"Hartley","last_name":"Lippitt","english":"52","math":"81","history":"100"}
]

console.log(dataArray);



console.log('여섯번째 사람을 추가합니다.');

const dataArrayCreated = [
  ...dataArray,
  {"id":6,"first_name":"Arst","last_name":"Narvik","english":"87","math":"54","history":"75"}
]

console.log(dataArrayCreated);




console.log('여섯번째 사람의 이름을 수정합니다.');

const dataArrayEdited = dataArrayCreated.map(function(item){
  (item.id === 6) && (item.first_name = 'Laidia');
  return item;
})

console.log(dataArrayEdited);




console.log('여섯번째 사람을 삭제합니다.');

const dataArrayDeleted = dataArrayEdited.filter(function(item){return item.id !==6});

console.log(dataArrayDeleted);