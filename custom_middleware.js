//http://expressjs.com/en/guide/writing-middleware.html

const express= require("express"); 
const app=express(); 
//app.use(express.static('public'))         // it use make public folder static
var myMiddleware = require('./my-middleware.js')
app.use('/abc', express.static('public')) ; // it use for public folder name replace as abc but abc folder is not aval
  
//add my-middleware.js page

//app.use(mw({ option1: '1', option2: '2' }))



var validation= function(req, res, next){
    console.log("Middleware Working");
    next();
}

var Uservalidation= function(req, res, next){
    
    //console.log("User Validation Middleware Working : " +req.params.username);
    if(req.params.username =="ritesh")
    console.log("User Validate. ");
    else
    console.log("Not Authorized User");
    next();
}

//app.use(validation); //  its run globally here , for all router means url, root and users url both
// app.use is used for all router gloablly access by using '.use'
//app.use(Uservalidation);


/*app.get("/",(req, res)=>{           
     res.send("Welcome to custom middleware for validate");
 });*/
 app.use(myMiddleware({ option1: '1', option2: '2' })); // globaly use when hit any url its print data.
 //app.use(Uservalidation); //globaly use for all router and merge with seprTE validate 
 app.get("/",validation,(req, res)=>{ // its means validation use only for this root url like / not for users url      
    res.send("Welcome to root url custom middleware for validate");
});
  
 /*app.get("/users",Uservalidation,(req, res)=>{           
    res.send("Welcome to Users Validation");
});*/

//with parameter and check condition
        app.get("/users/:username",Uservalidation,(req, res)=>{    
            //app.use(myMiddleware({ option1: '1', option2: '2' })) // npt working here      
            res.send("Welcome to Users Validation with username");
        });

        //for globalu use Uservalidation
        /*app.get("/users/:username",(req, res)=>{    
            //app.use(myMiddleware({ option1: '1', option2: '2' })) // npt working here      
            res.send("Welcome to Users Validation with username");
        });*/


app.listen(3000, ()=>console.log("Server running on port 3000"));