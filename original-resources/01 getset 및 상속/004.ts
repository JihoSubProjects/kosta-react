class C {
  cname:string;
  age:number;
  
  constructor(cname?:string,age?:number){
    this.cname = cname;
    this.age = age;
  }
}

console.log(new C('Mark',37));
console.log(new C('Mark'));
console.log(new C());
console.log(new C(undefined,37));









class Korea {

  constructor(public _tel:string, public _name:string, protected _level:string){
    this._tel = _tel;
    this._name = _name;
    this._level = _level;
  }

  public _country(){
    console.log('Hanguk');
  }
}


class Seoul extends Korea {
  bird:string;
  constructor(_tel, _name, _level){
    super(_tel, _name, _level);
    this.bird = 'Pigeon';
  }
};

class Gyeonggi extends Korea {
  tree:string;
  constructor(_tel, _name, _level){
    super(_tel, _name, _level);
    this.tree = 'Gingko';
  }
};

class Incheon extends Korea {
  port:string;
  constructor(_tel, _name, _level){
    super(_tel, _name, _level);
    this.port = 'Incheon-Bay';
  }
};

const S = new Seoul('02', 'Seoul', 'Si');
const G = new Gyeonggi('031', 'Gyeonggi', 'Do');
const I = new Incheon('032','Incheon','Si');

S._country();
console.log(S.bird, S._tel);
G._country();
console.log(G.tree, G._tel);
I._country();
console.log(I.port, I._tel);
