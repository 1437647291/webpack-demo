let express = require('express');

let app = express();
app.get('/api/user', (req, res) => {
  console.log('请求了')
  res.json({
    code: 200,
    data: {
      name: 'hss'
    },
    msg: '成功'
  });
});

app.listen(3000, () => {
  console.log('serve is running...');
});