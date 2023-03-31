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

const getDesfile = data => {
  return service({
    url: '/bysj/encryp/desfile',
    method: 'POST',
    data: data,
  })
};

const getIdea = data => {
  return service({
    url: '/bysj/encryp/idea',
    method: 'POST',
    data: data,
  })
};

const getEcc = () => {
  return service({
    url: '/bysj/encryp/ecc',
    method: 'POST'
  })
};

const getEcc2 = () => {
  return service({
    url: '/bysj/encryp/ecc2',
    method: 'POST'
  })
};

const createKey = params => {
  return service({
    url: `/bysj/encryp/create_key/${params}`,
    method: 'POST'
  })
};

const createKeyFile = data => {
  return service({
    url: `/bysj/encryp/create_key_file`,
    method: 'POST',
    data: data,
  })
};

const getEcc3 = data => {
  return service({
    url: `/bysj/encryp/ecc3`,
    method: 'POST',
    data: data,
  })
}


export {
  getAes,
  getAesall3,
  getAes128core,
  getRsa,
  getRsa2,
  getDestest,
  getDesfile,
  getIdea,
  getEcc,
  getEcc2,
  createKey,
  createKeyFile,
  getEcc3
}
