/*
 * This file is part of the Hello project.
 *
 * Hello is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * Hello is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hello. If not, see <https://www.gnu.org/licenses/>.
 */
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
const protocol = 'http';


server.listen(port, address, () => {
  // TODO: Sent message to log instead of console
  console.log(`HelloWS running at ${protocol}://${os.hostname()}(${address}):${port}/`)
});
