/*!
 * speedt-utils
 * Copyright(c) 2014 speedt <13837186852@qq.com>
 * MIT Licensed
 */
'use strict';

var should = require('should'),
	mongodb = require("mongodb"),
	ObjectID = mongodb.BSONPure.ObjectID;

var util = require('../');

describe('util', function(){
	describe('#genObjectId()', function(){
		it('should be generate objectid', function(){
			var str = util.genObjectId();
			ObjectID.isValid(str).should.be.true;
		});
	});
	describe('#genObjectId(time)', function(){
		it('should be generate objectid by time', function(){
			var str = util.genObjectId(new Date);
			ObjectID.isValid(str).should.be.true;
		});
	});
});