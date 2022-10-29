const { response } = require('express');
var express = require('express');
var router = express.Router();
const userHelpers=require('../helpers/user-helpers')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products',(req,res)=>{
  res.render('user/products')
});
router.get('/index',(req,res)=>{
  res.render('views/index')
});
router.get('/login',(req,res)=>{
  res.render('user/login')
});
router.get('/signup',(req,res)=>{
  res.render('user/signup')
});
router.post('/signup',(req,res)=>{
  userHelpers.doSignup(req.body).then((response)=>{
    console.log(response);
  })
})
router.post('/login',(req,res)=>{
  userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
      res.redirect('/')
    }else{

    }
  })
  })


module.exports = router;
