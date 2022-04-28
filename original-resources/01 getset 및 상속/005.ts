const spectrumRGB:string[] = ['red','green','blue'];
const spectrum5:string[] = [...spectrumRGB, 'yellow', 'purple'];

console.log(spectrumRGB);
console.log(spectrum5);






const Korea = {
  _country(){
    console.log('Hanguk');
  }
}

const Seoul = {
  ...Korea,
  _tel : '02',
  _name : 'Seoul',
  _level : 'Si',
  bird : 'Pigeon'
}

const Gyeonggi = {
  ...Korea,
  _tel : '031',
  _name : 'Gyeonggi',
  _level : 'Do',
  tree : 'Gingko'
}

const Incheon = {
  ...Korea,
  _tel : '032',
  _name : 'Incheon',
  _level : 'Si',
  port : 'Incheon-Bay'
}

const S = {...Seoul};
const G = {...Gyeonggi};
const I = {...Incheon};

S._country();
console.log(S.bird, S._tel);
G._country();
console.log(G.tree, G._tel);
I._country();
console.log(I.port, I._tel);