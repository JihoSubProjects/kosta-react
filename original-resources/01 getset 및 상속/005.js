var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var spectrumRGB = ['red', 'green', 'blue'];
var spectrum5 = __spreadArrays(spectrumRGB, ['yellow', 'purple']);
console.log(spectrumRGB);
console.log(spectrum5);
var Korea = {
    _country: function () {
        console.log('Hanguk');
    }
};
var Seoul = __assign(__assign({}, Korea), { _tel: '02', _name: 'Seoul', _level: 'Si', bird: 'Pigeon' });
var Gyeonggi = __assign(__assign({}, Korea), { _tel: '031', _name: 'Gyeonggi', _level: 'Do', tree: 'Gingko' });
var Incheon = __assign(__assign({}, Korea), { _tel: '032', _name: 'Incheon', _level: 'Si', port: 'Incheon-Bay' });
var S = __assign({}, Seoul);
var G = __assign({}, Gyeonggi);
var I = __assign({}, Incheon);
S._country();
console.log(S.bird, S._tel);
G._country();
console.log(G.tree, G._tel);
I._country();
console.log(I.port, I._tel);
