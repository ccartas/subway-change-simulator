/**
 * Created by Cosmin on 8/9/2016.
 */

var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')


var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname+"/frontend"))
app.listen("8080")