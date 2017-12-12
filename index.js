var base64 = require('js-base64').Base64;

var secretKey = '1203';
function ZetEncrypt(defaultSecretKey) {
    this.secretKey = defaultSecretKey || secretKey;
}

/**
 * 加密字符串
 * @param {*} value 需要加密的值 
 */
ZetEncrypt.prototype.encrypt = function(value) {
    
    if (!this.isString(value)) {
        throw Error('ZetEncrypt Execption', '值不是一个字符')
    }
    var charArr = []
    for (var i = 0; i < value.length; i++) {
        var curr = value[i].charCodeAt();
        curr = curr ^ this.secretKey;
        curr = String.fromCharCode(curr);
        charArr.push(curr);
    }

    return Base64.encode(charArr.join(''));
}

ZetEncrypt.prototype.decrypt = function(value) {
    if (!this.isString(value)) {
        throw Error('ZetEncrypt Execption', '值不是一个字符')
    }
    var decodeValue = Base64.decode(value);
    var charArr = []
    for (var i= 0; i < decodeValue.length; i++) {
        var curr = decodeValue[i].charCodeAt();
            curr = curr ^ this.secretKey;
            curr = String.fromCharCode(curr);
        charArr.push(curr);
    }
    
    return charArr.join('');
}

ZetEncrypt.prototype.isString = function(str){ 
    return (typeof str=='string') && str.constructor == String; 
} 

module.exports = ZetEncrypt;