let express=require('express');
let app=express();

let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');

app.use(express.json());

const { default: mongoose } = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hrmanagement").then(()=>{
    console.log("DB connection success")}
).catch(
    (err)=>{console.log(err)}
);

app.use('/api/hr',hrroutes);
// localhost:7000/api/hr/viewemployees

app.use('/api/emp',emproutes);

// run the server
app.listen(7000, () =>{
    console.log("server runningggggggggggggggggggggggggggggggggg");
});