'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = (req, res) => {
    response.ok('REST API BERJALAN!!!', res)
};


//menampilkan semua data pengguna

exports.tampilsemuadatapenggguna = (req, res) => {
    connection.query('SELECT * FROM pengguna', (error, rows, fileds) => {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};