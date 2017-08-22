'use strict'

const express = require('express'),			
 			port = (process.env.PORT || 4200),
 			app = express()
 			

app.set('port', port)

// app.get('/', function(req, res){
// 	res.end(`<h1 style="color: red">Bienvenido!!!</h1>`);
// 	res.sendFile( `${__dirname}/public/index.html`)
// })

app.use(express.static(__dirname + '/public'));

module.exports = app
