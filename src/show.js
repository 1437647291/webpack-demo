const show = params => {
  console.log(1111, 'zhixing')
  const dom = document.getElementById('box1');
  dom.innerHTML = `你好！${params}`
};

export {
  show
}