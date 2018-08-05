const express = require('express');
const app = express();

const appPort = 1337;

app.use('/', express.static('./src'));
app.use('/wow', express.static('./src/wow.html'));

app.get('/fuck', function(req, res) {
  console.log(req);
});

app.listen(appPort, function(){
  console.log(`your shit is now running on port: ${appPort}`);
});
