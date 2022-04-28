var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var dataArray = [
    { "id": 1, "first_name": "Ahmed", "last_name": "Brotherton", "english": "78", "math": "88", "history": "87" },
    { "id": 2, "first_name": "Mariellen", "last_name": "Phetteplace", "english": "77", "math": "64", "history": "64" },
    { "id": 3, "first_name": "Olympie", "last_name": "MacFadyen", "english": "69", "math": "94", "history": "88" },
    { "id": 4, "first_name": "Earl", "last_name": "Tennock", "english": "61", "math": "99", "history": "95" },
    { "id": 5, "first_name": "Hartley", "last_name": "Lippitt", "english": "52", "math": "81", "history": "100" }
];
console.log(dataArray);
console.log('여섯번째 사람을 추가합니다.');
var dataArrayCreated = __spreadArrays(dataArray, [
    { "id": 6, "first_name": "Arst", "last_name": "Narvik", "english": "87", "math": "54", "history": "75" }
]);
console.log(dataArrayCreated);
console.log('여섯번째 사람의 이름을 수정합니다.');
var dataArrayEdited = dataArrayCreated.map(function (item) { return ((item.id === 6)
    ? { "id": 6, "first_name": "Laidia", "last_name": "Narvik", "english": "87", "math": "54", "history": "75" }
    : item); });
console.log(dataArrayEdited);
console.log('여섯번째 사람을 삭제합니다.');
var dataArrayDeleted = dataArrayEdited.filter(function (item) { return (item.id !== 6); });
console.log(dataArrayDeleted);
