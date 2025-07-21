/*
lab11 _ moduleb
purpose
- this file will use to import js module from the another file
 */

import {username, id} from './lab11_module.js'
console.log("username:" + username);
console.log("id : " + id );

import * as module_a from  './lab11_module.js';
console.log(module_a.username);
console.log(module_a.id)
module_a.greeter();

import * as module_c from  './lab11_modulec.js';
module_c.greeter();