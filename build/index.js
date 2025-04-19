"use strict";

var _nodeHttp = require("node:http");
// server.mjs

var server = (0, _nodeHttp.createServer)(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('index.html');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', function () {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`