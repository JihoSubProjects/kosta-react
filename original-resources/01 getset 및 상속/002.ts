const rgb:{
  _name:string;
  rgbName:string;
} = {
  _name:'red',
  get rgbName(){
    return this._name;
  },
  set rgbName(newName:string){
    const rgb2 = ['red','green','blue'];
    if(rgb2.indexOf(newName) >= 0){
      this._name = newName;
      console.log('값이 변경되었습니다.');
    } else {
      console.log('잘못된 값이 들어왔습니다.');
    }
  }
}

// _name을 직접적으로 변경하지 않습니다.

console.log(rgb.rgbName);
rgb.rgbName = 'black';
console.log(rgb.rgbName);
rgb.rgbName = 'green';
console.log(rgb.rgbName);
