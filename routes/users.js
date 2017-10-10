var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/',function(req, res, next) {
    res.send('respond with a resource');
});

var Usuario = require('../models/users');
var u;

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/users", function(err) {
    if(!err) {
        console.log("We are connected")
    }
});


returnAll=function (callback) {

    var users = [];
    Usuario.find(function(err,usuarios){
        for (var i = 0; i < usuarios.length; i++) {
            users.push({username: usuarios[i].username, password: usuarios[i].password});
        }

        callback(users)
    });
};
//Mostrar todos
router.get('/all', function (req,res) {
    this.returnAll(function (callback) {
        res.send(callback)
    })

});

//Añadir
router.post('/push', function (req, res) {
    Usuario.findOne({username:req.body.username},function(err,usuarios){
        if(usuarios!=null){
        }
        else{
            u=new Usuario({username:req.body.username,password:req.body.password});
            u.save().then(function(){})
        }
    });
    this.returnAll(function (callback) {
        res.send(callback)
    })
});

//Eliminar
router.delete('/delete', function (req, res) {
    var listDelete =req.body;
    var i = 0;
    var len = listDelete.length;
    if(len!=undefined) {
        for (; i < len; i++) {
            Usuario.findOneAndRemove({username: listDelete[i]}, function () {
            });
        }
    }
    else
    {
        Usuario.findOneAndRemove({username:listDelete.username},function () {
        })
    }

    this.returnAll(function (callback) {
        res.send(callback)
    })
});

module.exports = router;
