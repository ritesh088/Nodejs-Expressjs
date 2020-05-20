//Use of different template in nddejs
//http://expressjs.com/en/guide/using-template-engines.html
//=============================Install pub template engine=========================================
            /*PS E:\expressjs> npm install pug
            npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

            > core-js@2.6.11 postinstall E:\expressjs\node_modules\core-js
            > node -e "try{require('./postinstall')}catch(e){}"

            Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

            The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
            > https://opencollective.com/core-js 
            > https://www.patreon.com/zloirock 

            Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

            npm WARN expressjs@1.0.0 No repository field.

            + pug@2.0.4
            added 63 packages from 140 contributors and audited 230 packages in 27.011s

            2 packages are looking for funding
            run `npm fund` for details

            found 0 vulnerabilities

            PS E:\expressjs>*/
            //after install write code app.set('view engine', 'pug') for tell the function which tem is use, create view 
            //folder in public folder for create html pages.

            //for use ejs template wirtecode npm install ejs

            /* PS E:\expressjs> npm install ejs

> ejs@3.1.2 postinstall E:\expressjs\node_modules\ejs
> node --harmony ./postinstall.js

Thank you for installing EJS: built with the Jake JavaScript build tool (https://jakejs.com/)

npm WARN expressjs@1.0.0 No repository field.

+ ejs@3.1.2
added 15 packages from 8 contributors and audited 249 packages in 7.039s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

PS E:\expressjs> npm install ejs
 */
 
 
/*// for pug

html
  head
    title= title
  body
    h1= message
//for twig

    <html>
    <head>
       <title>{{ title }}</title>
    </head>
    <body>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
    </body>
</html>

    //for ejs

    <html>
    <head>
       <title><%= title %></title>
    </head>
    <body>
        <h1><%= title %></h1>
        <p><%= message %></p>
    </body>
</html>*/

//  "username:req.body.username,password:req.body.password" when post method is use we use req.body.username not use
  // reqq.params.username,
     // when post method is use then display the data by post & get the data and display for this fistlly we install
     //"body parser package".

      //jab post method se data post ho rha h or us data ko get krne k body parser package install krenge or require krenge
       //apne project tab data display hoga. (https://github.com/expressjs/body-parser)
        //npm install body-parser


// body-parse kya karta h ki jo data post m jata h usko url m import karta h or import karne ke baad body m parse karta h.
  //to usko pass karne k lie jo method h usko use krna hoha like
   // // create application/x-www-form-urlencoded parser
                //app.use(bodyParser.urlencoded({ extended: false }))

    // create application/json parser
         // app.use( bodyParser.json())

   //// for validation install "npm install --save express-validator" pakage...https://express-validator.github.io/docs/
//=========================Simple use of template===============================================//
    /*const express= require("express"); 
    const app=express(); 
    app.use('/abc', express.static('public'));
    //app.set('view engine', 'pug');
    //app.set('view engine', 'ejs');
    app.set('view engine', 'twig');
    app.set('views', './public/views');
    app.get('/',(req,res)=>{
        res.render('index',{title:"Node js", message:"Welcome to node js website"});
        //when use any template engine then use 'render' kisi v template ko render kiya jata h islie render 

    });

    app.listen(3000, ()=>console.log("Server running on port 3000"));*/
//========================End of simple template use======================================================

//===================Start How to handle get and parse post request in express.js | body parsing middleware=========

/*const express= require("express"); 
const bodyParser = require('body-parser'); // add this for post data display by intall npm install body-parser
const { check, validationResult } = require('express-validator'); // mandatory for validator check its express js parameter to validate 
const app=express(); 
app.use('/abc', express.static('public'));
//app.set('view engine', 'pug');
//app.set('view engine', 'ejs');
app.set('view engine', 'twig');
app.set('views', './public/views');

// parse application/x-www-form-urlencoded parser
      //app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json parser
        // app.use( bodyParser.json())

// create application/json parser
 var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })*/


/*app.get('/',(req,res)=>{
    res.render('index',{title:"Login Form", message:"Enter UserName and Password."});
    //when use any template engine then use 'render' kisi v template ko render kiya jata h islie render 

});*/

/*app.post('/login',(req,res)=>{
    res.render('login',{title:"User Details", username:req.body.username,password:req.body.password});
});*/

//another way to use this as same
  // for use this section code enable line no 124 to 144 line 
       /* app.get('/',(req,res)=>{  for use this section enable code from 124 to 144 line number
            res.render('index',{title:"Login Form", message:"Enter UserName and Password."});   
        });

        // POST /login gets urlencoded bodies
            app.post('/login', urlencodedParser, function(req , res) { // urlencodedParser , jo v data post wo usko receive krne k lie.
            //res.send('Welcome, '  + req.body.username +  req.body.password)
            res.send("Welcome: " +req.body.username + " password: " +req.body.password);
            })

        // POST /api/users gets JSON bodies
            //app.post('/', jsonParser, function(req,res){  // both are true
            app.post('/', jsonParser,(req,res)=> {
            console.log(req.body);
            res.render('login',{title:"User Details", username:req.body.username,password:req.body.password});
        
        }); */
   


       /* app.get('/about/:a-:b',(req,res)=>{
            res.render('about',{title:"about",
            sum:parseInt(req.params.a) + parseInt(req.params.b),
            sub:parseInt(req.params.a) - parseInt(req.params.b),
            mul:parseInt(req.params.a) * parseInt(req.params.b),
            div:parseInt(req.params.a) / parseInt(req.params.b),

        });
            

        });*/
        //app.listen(3000, ()=>console.log("Server running on port 3000"));
//=======================================End========================================================================


//===============================Start validation section========================================================

          // now we use validation in index page so that form action change from '/login' to '/' root url
         // ------------------------------------------------------------------------------------------------
                //200, 248 0r 269 no linese comment hataene pe ye code use hoga
                 //-----------------------------------------------------------------
/*const express= require("express"); 
const bodyParser = require('body-parser'); // add this for post data display by intall npm install body-parser
//const { check, validationResult } = require('express-validator/check'); // mandatory for validator check its express js parameter to validate 
//const { matchData, validationResult } = require('express-validator/filter');

//const { matchData, sanitizeBody } = require('express-validator');
//const { matchData, body } = require('express-validator');
//const {matchedData} = require('express-validator');
const { check, validationResult } = require('express-validator/check');
const {matchedData, sanitizeBody} = require('express-validator/filter'); // use for filter all fields data and show in one line code

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

    //app.post('/', jsonParser,(req,res)=> { // change this line code for validation use in index page
    app.post('/', urlencodedParser,[
        check('username', 'username should be email id').isEmail(),
        check('password', 'Password must be in 5 character').isLength({min:5}),
        check('cpassword', 'CPassword must be in 5 character').isLength({min:5})
    ],(req,res)=> {
        const errors = validationResult(req);
        console.log(errors.mapped()); // for show errors in console. 'mapped' func is used for show multiple errors
        //console.log(req.body); 
        if(!errors.isEmpty()){ //field empty h to error show krne k lie
            res.render('index',{title:"User Details", error:errors.mapped()});  
        }
        
        else{
            /*res.render('login',{title:"User Details", username: req.body.username, password: req.body.password});*/

            //now show all data in s sinle object not use like '{title:"User Details", username: req.body.username,
            // password: req.body.password}'
           // const user = matchData(req);
            //const user= matchData(req); 
            /*const user= matchedData(req);
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

app.listen(3000, ()=>console.log("Server running on port 3000"));*/


//

//[Object: null prototype] {
   // username: '',
   // password: '',
   // cpassword: '',
   // submit: 'submit'
  //}
    // in terminal show, it coming from 'urlencodedParser', urlencodedParser ka object h prototype.
    //console.log(req.body); , remove this line , in terminal not showing prototype.

    // when input data is true then its retuen no error in terminal and show ony {} brakets.

    // when input wronf data then show in terminal 
    /*{
        username: {
          value: 'z',
          msg: 'username should be email id',
          param: 'username',
          location: 'body'
        },
        password: {
          value: 'z',
          msg: 'Password must be in 5 character',
          param: 'password',
          location: 'body'
        }
      }*/

//======End How to handle get and parse post request in express.js | body parsing middleware==========================

//****/===================Final Code for all like username, pwd, cpwd, validate, error show,data show=======================

      //====ye section ka code h agar login form se username sahi dale or pwd galat to username ka value show hota rhe,
      //iske lie index page jo ki login form ka html h usme v change krenge jse 'user.username' value m daalenge,
      //or login.twig jha value get hokar show ho rha waha v 'user.username' krenge 
      //or ye 'user' is file m object bna hua jo ki sare data ko 'user' object m bind kr rha h 'matchedData' fuc k through,
      //jo ki 'express-validator' ke sanitizedbody ka object h.



//const express= require("express"); 
//const bodyParser = require('body-parser'); // add this for post data display by intall npm install body-parser
//const { check, validationResult } = require('express-validator/check'); // mandatory for validator check its express js parameter to validate 
//const { matchData, validationResult } = require('express-validator/filter');

//const { matchData, sanitizeBody } = require('express-validator');
//const { matchData, body } = require('express-validator');
//const {matchedData} = require('express-validator');

//==========for use this section ebnable code line no 323 se 400 also cmt on line no373====================================
/*const express= require("express"); 
const bodyParser = require('body-parser'); // add this for post data display by intall npm install body-parser
const { check, validationResult } = require('express-validator/check');
const {matchedData, sanitizeBody} = require('express-validator/filter'); // use for filter all fields data and show in one line code

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

    //app.post('/', jsonParser,(req,res)=> { // change this line code for validation use in index page
    app.post('/', urlencodedParser,[
      // trim(),agar value ko trim krna chahte h to trim()method sanitizer m aata h or iske lie ,
      //'const {matchedData, sanitizeBody} = require('express-validator/filter');' filter use krna hota h
        check('username', 'username should be email id').trim().isEmail(), 
        check('password', 'Password must be in 5 character').trim().isLength({min:5}),
        //check('cpassword', 'CPassword must be in 5 character').trim().isLength({min:5}),
        //now check condition for password and cpassword is match or not
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
        console.log(errors.mapped()); // for show errors in console. 'mapped' func is used for show multiple errors
        //console.log(req.body); 
        if(!errors.isEmpty()){ //field empty h to error show krne k lie
          const user= matchedData(req);
          res.render('index',{title:"User Details", error:errors.mapped(),user:user});  // user:user 'user' is pass in login and index.twig page.
        }
        
        else{
           /// res.render('login',{title:"User Details", username: req.body.username, password: req.body.password});

            //now show all data in s sinle object not use like '{title:"User Details", username: req.body.username,
            // password: req.body.password}'
           // const user = matchData(req);
            //const user= matchData(req); 
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

app.listen(3000, ()=>console.log("Server running on port 3000"));*/

//=========================this section implement mangodb with above code===========================
  // insatall magodb package 'npm install mongoose'  "https://mongoosejs.com/docs/index.html"
    //==================================================================
          /*PS E:\expressjs> npm install mongoose
              npm WARN expressjs@1.0.0 No repository field.

              + mongoose@5.9.10
              added 27 packages from 17 contributors and audited 333 packages in 12.825s

              3 packages are looking for funding
                run `npm fund` for details

              found 0 vulnerabilities

              PS E:\expressjs>*/
        //=====================================================      


const express= require("express"); 
const bodyParser = require('body-parser'); // add this for post data display by after intalling npm install body-parser
const { check, validationResult } = require('express-validator/check');
const {matchedData, sanitizeBody} = require('express-validator/filter'); // use for filter all fields data and show in one line code

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

    //app.post('/', jsonParser,(req,res)=> { // change this line code for validation use in index page
    app.post('/', urlencodedParser,[
      // trim(),agar value ko trim krna chahte h to trim()method sanitizer m aata h or iske lie ,
      //'const {matchedData, sanitizeBody} = require('express-validator/filter');' filter use krna hota h
        check('username', 'username should be email id').trim().isEmail(), 
        check('password', 'Password must be in 5 character').trim().isLength({min:5}),
        //check('cpassword', 'CPassword must be in 5 character').trim().isLength({min:5}),
        //now check condition for password and cpassword is match or not
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
        console.log(errors.mapped()); // for show errors in console. 'mapped' func is used for show multiple errors
        //console.log(req.body); 
        if(!errors.isEmpty()){ //field empty h to error show krne k lie
          const user= matchedData(req);
          res.render('index',{title:"User Details", error:errors.mapped(),user:user});  // user:user 'user' is pass in login and index.twig page.
        }
        
        else{
            /*res.render('login',{title:"User Details", username: req.body.username, password: req.body.password});*/

            //now show all data in s sinle object not use like '{title:"User Details", username: req.body.username,
            // password: req.body.password}'
           // const user = matchData(req);
            //const user= matchData(req); 
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

//==========End section of implement mangodb with above code===========================
