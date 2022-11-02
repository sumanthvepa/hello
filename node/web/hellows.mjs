"use strict";

import * as os from 'os';
import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const address = '0.0.0.0';
const port = 5000;



server.listen(port, address, () => {
  // TODO: Sent message to log instead of console
  console.log(`HelloWS running at http://${os.hostname()}(${address}):${port}/`)
});
