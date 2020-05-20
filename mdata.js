// https://mongoosejs.com/docs/ read all links related to mangodb schema, conection,model,validation etc.....
//npm install mongoose

// reqiure mongoose Step 1
var mongoose = require('mongoose'); // here var is used boz mangodb not support ECMA.

//now create db connection with mdb compass step 1 after in console data show 
//mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://nodeweb:nodeweb@123@cluster0-h3for.mongodb.net/employee?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection; // create object of db connection step 2

// Step 2, then make schema define just like table filelds 
var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalhour: Number,
    total:Number,
  });

  //Step 5, create new methods of employeeSchema to show data in console with employee name by calling methods,
  // with 'employees' object. which is created in Step 4.
  employeeSchema.methods.totalSalary=function(){
      //console.log("Total Income of %s: Rs. %d:", this.name,this.totalhour*this.hourlyrate);
      return this.totalhour*this.hourlyrate;
  }



  // Step 3, Create Model means table name and pass schema in model
  //To use our schema definition, we need to convert our employeeSchema into a Model we can work with
  //. To do so, we pass it into mongoose.model(modelName, schema):

  var employeemodel = mongoose.model('Employee', employeeSchema);
  // Step 4, now create object of employeemodel and pass the value of schema
  var employees = new employeemodel({name: 'ram',
  email:'r.srivastava08@gmail.com',
  etype:'hourly',
  hourlyrate:70,
  totalhour:20,
  });

  //Step 5, show data in console.
    /*console.log(employees);
    console.log("Total Income of Employee: Rs. " + employees.hourlyrate * employees.totalhour);*/

  //Step 6, call function totalSalary with 'employees' object.
  employees.total=employees.totalSalary();

  //check here for our mdb connection is made or not  step 3
  conn.on("connected",function(){
    console.log("Connected Sucessfully");
  });

  conn.on("disconnected",function(){
    console.log("Disconnected Sucessfully");
  });
  
  conn.on('error', console.error.bind(console, 'connection error:'));//for error if connection not made step 4
  conn.once('open', function() { //for value insert in db
    
   //for insert
   employees.save(function(err,res){ // employees jo h wo employeemodel ka variable h means object
     if(err) throw error;
     console.log(res);
     conn.close();
    });
    // jo table banega wo emlpoyess name se hoga boz hamne employeemodel ka object employees name se banaya h employee db m


  //for data fetch fron MDb
   // data save kar lie  object ka use krte h('employees' line no 35) or fetch krne k lie model ka (employeemodel' line no 37) use krte h
/////////end data  

     /*employeemodel.find({},function(err,data){
       if (err) throw error;
       console.log(data);
       conn.close();

     });*/


 
  });

  //now we want to use live server and data show on live server on mlab.com