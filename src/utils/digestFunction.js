//hash生成hex的字符串
function hashBySM3(str) {
    return sm3(str);
}

//hash生成hex的字符串
function hashByMD5(str) {
    return MD5(str);
}

//hash生成hex的字符串
function hashBySHA1(str) {
    return hex_sha1(str);
}

//hash生成hex的字符串
function hashBySHA256(str) {
    return SHA256(str);
}

export {
    hashBySM3
}