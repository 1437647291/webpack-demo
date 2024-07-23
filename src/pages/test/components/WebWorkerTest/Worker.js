async function getHtml () {
  const html = await fetch('/agility-main').then(res => res.text());//读取index html
  return html;
};

self.addEventListener('message', e => {
  console.log('收到前端发包', e, e.data);
  setTimeout(() => {
    self.postMessage('已收到前端发包 --worker.js');
  }, 5000);
});