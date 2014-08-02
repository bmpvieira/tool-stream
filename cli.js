#!/usr/bin/env node
var tool = require('./')
var through = require('through2')
var split = require('split')
var minimist = require('minimist')

var argv = minimist(process.argv.slice(2))
var method = argv._[0]
var params = argv._.slice(1)

var operation = tool[method].apply(this, params)
process.stdin.setEncoding('utf8')
process.stdin
.pipe(split())
.pipe(operation)
.on('data', console.log)
.on('error', console.log)
