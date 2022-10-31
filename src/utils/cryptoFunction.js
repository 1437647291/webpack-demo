//SM2生成随机密钥对儿
function generateKeyPairBySM2() {
    return sm2.generateKeyPairHex();
}

//SM2加密,生成HEX密文
function encryptBySM2(decryptStr,publicKey) {
    var cipherMode = 0; //1 - C1C3C2，0 - C1C2C3，默认为0
    return "04"+sm2.doEncrypt(decryptStr, publicKey, cipherMode);
}

//SM2解密
function decryptBySM2(encryptStr,privateKey) {
    var cipherMode = 0; //1 - C1C3C2，0 - C1C2C3，默认为0
    return sm2.doDecrypt(encryptStr.substring(2), privateKey, cipherMode)
}


//AES加密，字符串转码采用默认Base64转码
function encryptByAES(str, key, mode, iv) {
    //密文
    var encryptedData = "";
    //获取密钥字节
    var keyValue = CryptoJS.enc.Utf8.parse(key);
    //获取IV向量
    var ivValue = CryptoJS.enc.Utf8.parse(iv);
    if("ECB" === mode) {
        encryptedData = CryptoJS.AES.encrypt(str, keyValue, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    }else if("CBC" === mode){
        encryptedData = CryptoJS.AES.encrypt(str, keyValue, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv: ivValue
        });
    }
    return encryptedData.toString();
}

//AES解密
function decryptByAES(encryptedStr, key, mode, iv) {
    //明文
    var decryptedData = "";
    //获取密钥字节
    var keyValue = CryptoJS.enc.Utf8.parse(key);
    //获取密文字节
    var encryptedHexStr  = CryptoJS.enc.Base64.parse(encryptedStr);
    var encryptedBase64Str  = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    //获取IV向量
    var ivValue = CryptoJS.enc.Utf8.parse(iv);
    if("ECB" === mode) {
        decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, keyValue, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
    }else if("CBC" === mode){
        decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, keyValue, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv: ivValue
        });
    }
    return decryptedData.toString(CryptoJS.enc.Utf8);
}

//SM4加密,默认使用ECB模式生成HEX密文
function encryptBySM4(str,key) {
    return sm4.encrypt(str,key);
}

//SM4解密
function decryptBySM4(encryptStr,key) {
    return sm4.decrypt(encryptStr,key);
}


//RSA加密，密文默认使用BASE64
function encryptByRSA(str,publicKey) {
    var cipher = new JSEncrypt();
    cipher.setPublicKey(publicKey);
    return cipher.encrypt(str);
}

//RSA解密
function decryptByRSA(str,privateKey) {
    var cipher = new JSEncrypt();
    cipher.setPrivateKey(privateKey);
    return cipher.decrypt(str);
}

export {
    encryptByRSA,
    decryptByRSA,
    generateKeyPairBySM2,
    encryptBySM2,
    decryptBySM2,
    encryptBySM4,
    decryptBySM4,
}