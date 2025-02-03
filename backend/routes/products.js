var express = require('express');
var router = express.Router();
var ProductModel = require("../models/product");

/* GET users listing. */
router.get('/', function(req, res, next) {
  ProductModel.find({}).sort({}).exec(function(err,result){
    if(err){
        return next(err)
    }
    res.send(result)
  })
});

router.post('/', function(req, res, next) {
  console.log(req.body,  'just a message')
   ProductModel.create(req.body)
   .then(function(result) {
      res.send(result)
    });
});

router.delete('/:id', function(req, res, next) {
  ProductModel.deleteOne({_id:req.params.id})
  .then( result => res.end())

})

router.put('/:id',function(req,res,next){
  ProductModel.findByIdAndUpdate(req.params.id,
    {
      name:req.body.name, 
      category:req.body.category, 
      price:req.body.price,
      description:req.body.description
    },{new: true})
    .then(result => res.send(result))
      
  })

  router.get('/:id', function(req,res,next){
    ProductModel.findById(req.params.id)
    .then(result => res.send(result))
  })


module.exports = router;
