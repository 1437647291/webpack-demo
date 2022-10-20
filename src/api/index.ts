import service from "../utils/request";

const getAes = data => {
  return service({
    url: '/bysj/encryp/aes128',
    method: 'POST',
    data: data,
  })
};

const getAesall3 = data => {
  return service({
    url: '/bysj/encryp/aesall3',
    method: 'POST',
    data: data,
  })
};

const getAes128core = data => {
  return service({
    url: '/bysj/encryp/aes128core',
    method: 'POST',
    data: data,
  })
};

const getRsa = data => {
  return service({
    url: '/bysj/encryp/rsa',
    method: 'POST',
    data: data,
  })
};

const getRsa2 = data => {
  return service({
    url: '/bysj/encryp/rsa2',
    method: 'POST',
    data: data,
  })
};

const getDestest = data => {
  return service({
    url: '/bysj/encryp/destest',
    method: 'POST',
    data: data,
  })
};

export {
  getAes,
  getAesall3,
  getAes128core,
  getRsa,
  getRsa2,
  getDestest
}
