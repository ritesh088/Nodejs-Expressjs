
const express= require("express"); 
const bodyParser = require('body-parser'); 
const { check, validationResult } = require('express-validator/check');
const {matchedData, sanitizeBody} = require('express-validator/filter'); 

const app=express(); 
app.use('/abc', express.static('public'));
app.set('view engine', 'twig');
app.set('views', './public/views');

  var jsonParser = bodyParser.json()
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.get('/',(req,res)=>{
        res.render('index',{title:"Login Form", message:"Enter UserName and Password."});   
    });


    app.post('/login', urlencodedParser, function(req , res) { 
    res.send("Welcome: " +req.body.username + " password: " +req.body.password);
    })

    
    app.post('/', urlencodedParser,[
        check('username', 'username should be email id').trim().isEmail(), 
        check('password', 'Password must be in 5 character').trim().isLength({min:5}),
        check('cpassword').custom(
                                    (value, { req }) =>
                                     {
                                       if (value !== req.body.password)
                                        {
                                         throw new Error('Confirm Password  does not match password');
                                        }
                                        return true;
                                     }
                                 )
     ],(req,res)=> {
        const errors = validationResult(req);
        console.log(errors.mapped()); 
        //console.log(req.body); 
        if(!errors.isEmpty()){ 
          const user= matchedData(req);
          res.render('index',{title:"User Details", error:errors.mapped(),user:user});  
        }
        else{
            const user= matchedData(req);
            console.log(user);
            res.render('login',{title:"User Details", user: user});
        }
       
    });

    app.get('/about/:a-:b',(req,res)=>{
        res.render('about',{title:"about",
        sum:parseInt(req.params.a) + parseInt(req.params.b),
        sub:parseInt(req.params.a) - parseInt(req.params.b),
        mul:parseInt(req.params.a) * parseInt(req.params.b),
        div:parseInt(req.params.a) / parseInt(req.params.b),
        });
     });

app.listen(3000, ()=>console.log("Server running on port 3000"));
