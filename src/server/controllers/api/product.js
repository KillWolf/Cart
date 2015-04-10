var Products = require('../../models/products');

var product = {
 /* read: function(req, res, next){
    Products.find({"title": req.params.id}, function(err, data){
      if(err) console.error;
      res.json(data);
    });
  },*/
  readById: function(req, res, next){
    Products.findById(req.params.id, function(err, data){
      if(err) console.error(err);
      res.json(data);
    })
  },
  create: function(req, res, next){
    var product = new Products(req.body);
    product.save();
    res.send(product);
  },
  update: function(req, res, next){

    var id = req.params.id;
    console.log(id);
    Products.findByIdAndUpdate(id,{$set: req.body}, function(err, product){
      if (err) console.log(err);
      res.send(product);
    });
  },
  delete: function(req, res, next){
    Products.remove({"_id": req.params.id}, function(err, product){
      if (err) console.log(err);
      res.send(product);
    });
  },
  getAll: function(req, res, next){
    Products.find(function(err, data){
      if(err) console.error;
      res.json(data);
    })
  }
}

module.exports = product;