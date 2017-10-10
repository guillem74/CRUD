var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/CRUD',  { useMongoClient: true });

/*var Product = mongoose.model('Product', {name: String});

var product = new Product({name: "Webstorm"});
product.save(function(err){
    if(err){
        console.log('failed');
    }else{
        console.log('saved');
    }
})

var Schema = mongoose.Schema;
var BlogPostSchema = new Schema({
    username: String,
    pass: String
});

var BlogPostModel = connection.model('BlogPost', BlogPostSchema);*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
//pasar parametro mongoclient:true
router.get('/', function(req, res, next) {
    BlogPostModel.find(function(err, result){
        res.json(result._id);
    });
});

module.exports = router;