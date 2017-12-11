var ZetEncrypt = require('./index.js');

var zetEncrypt = new ZetEncrypt();

var p = zetEncrypt.encrypt('password');

console.log('加密后的值:' + p);
console.log('解密后的值' + zetEncrypt.decrypt(p));

