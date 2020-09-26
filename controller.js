'use strict';

var response = require('./res');
var connection = require('./koneksi');
const e = require('express');

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

// menampilkan data berdasarkan id
exports.tampilberdasarkanid = (req, res) => {
    let id = req.params.id;
    connection.query("SELECT * FROM pengguna WHERE id_pengguna=?", [id],
        (error, rows, fileds) => {
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }
        });

}

//mesnmbahkan ata mahasaiswa
exports.tambahpengguna = (req, res) => {
    var id_pengguna = req.body.id_pengguna;
    var nombor = req.body.nombor;
    var nama = req.body.nama;
    var jabatan = req.body.jabatan;

    connection.query('INSERT INTO pengguna (id_pengguna,nombor,nama,jabatan) VALUES(?,?,?,?)', [id_pengguna, nombor, nama, jabatan],
        (error, rows, fileds) => {
            if (error) {
                console.log(error)
            } else {
                response.ok('Berhasil menambahkan DATA!!', res)
            }
        });
};

//ubah data bersasarkan id

exports.ubahpengguna = (req, res) => {
    var id = req.body.id_pengguna;
    var nombor = req.body.nombor;
    var nama = req.body.nama;
    var jabatan = req.body.jabatan;

    connection.query('UPDATE pengguna SET nombor=?, nama=?, jabatan=? WHERE id_pengguna=?', [nombor, nama, jabatan, id],
        (error, rows, fileds) => {
            if (error) {
                console.log(error);
            } else {
                response.ok("BERHASIL MENGUBAH DATA!!!", res);
            }

        });
};

//menghapus data berdasarkan id
exports.hapuspengguna = (req, res) => {
    var id = req.body.id_pengguna;

    connection.query('DELETE FROM pengguna WHERE id_pengguna=?', [id],
        (error, rows, fileds) => {
            if (error) {
                console.log(error);
            } else {
                response.ok("BERHASIL MENGHAPUS DATA!!!", res)
            }

        });
};