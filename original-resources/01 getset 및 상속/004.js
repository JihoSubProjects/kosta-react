var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var C = /** @class */ (function () {
    function C(cname, age) {
        this.cname = cname;
        this.age = age;
    }
    return C;
}());
console.log(new C('Mark', 37));
console.log(new C('Mark'));
console.log(new C());
console.log(new C(undefined, 37));
var Korea = /** @class */ (function () {
    function Korea(_tel, _name, _level) {
        this._tel = _tel;
        this._name = _name;
        this._level = _level;
        this._tel = _tel;
        this._name = _name;
        this._level = _level;
    }
    Korea.prototype._country = function () {
        console.log('Hanguk');
    };
    return Korea;
}());
var Seoul = /** @class */ (function (_super) {
    __extends(Seoul, _super);
    function Seoul(_tel, _name, _level) {
        var _this = _super.call(this, _tel, _name, _level) || this;
        _this.bird = 'Pigeon';
        return _this;
    }
    return Seoul;
}(Korea));
;
var Gyeonggi = /** @class */ (function (_super) {
    __extends(Gyeonggi, _super);
    function Gyeonggi(_tel, _name, _level) {
        var _this = _super.call(this, _tel, _name, _level) || this;
        _this.tree = 'Gingko';
        return _this;
    }
    return Gyeonggi;
}(Korea));
;
var Incheon = /** @class */ (function (_super) {
    __extends(Incheon, _super);
    function Incheon(_tel, _name, _level) {
        var _this = _super.call(this, _tel, _name, _level) || this;
        _this.port = 'Incheon-Bay';
        return _this;
    }
    return Incheon;
}(Korea));
;
var S = new Seoul('02', 'Seoul', 'Si');
var G = new Gyeonggi('031', 'Gyeonggi', 'Do');
var I = new Incheon('032', 'Incheon', 'Si');
S._country();
console.log(S.bird, S._tel);
G._country();
console.log(G.tree, G._tel);
I._country();
console.log(I.port, I._tel);
