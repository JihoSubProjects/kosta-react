function Obj(i) {
    this.b = i;
}
;
Obj.prototype.a = 1;
var a1 = new Obj(2);
var b1 = new Obj(3);
console.log(a1.a, a1.b);
console.log(b1.a, b1.b);
function Person() { }
;
Person.prototype.residence = function () {
    console.log('Earth');
};
function Korean(region) {
    this.region = region;
    this.printr = function () {
        console.log(this.region);
    };
}
Korean.prototype = new Person();
var ks = new Korean('Seoul');
ks.residence();
ks.printr();
function Korea(_tel, _name, _level) {
    this._tel = _tel;
    this._name = _name;
    this._level = _level;
}
Korea.prototype._country = function () {
    console.log('Hanguk');
};
function Seoul() {
    this.bird = 'Pigeon';
}
;
function Gyeonggi() {
    this.tree = 'Ginkgo';
}
;
function Incheon() {
    this.port = 'Incheon-Bay';
}
;
Seoul.prototype = new Korea('02', 'Seoul', 'Si');
Gyeonggi.prototype = new Korea('031', 'Gyeonggi', 'Do');
Incheon.prototype = new Korea('032', 'Incheon', 'Si');
var S = new Seoul();
var G = new Gyeonggi();
var I = new Incheon();
S._country();
console.log(S.bird, S._tel);
G._country();
console.log(G.tree, G._tel);
I._country();
console.log(I.port, I._tel);
