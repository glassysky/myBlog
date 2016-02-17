/**
 * Created by cui on 2016/2/17.
 */
var setting = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = Require('mongodb').Server;

module.exports = new Db(settings.db, new Server(setting.host, settings.port),{safe: true});