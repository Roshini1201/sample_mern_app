let express=require('express');
let app=express();

let hrroutes=require('./routes/hr_routes');

app.use('/api/hr',hrroutes);
// localhost:7000/api/hr/viewemployees

// run the server
app.listen(7000, () =>{
    console.log("server runningggggggggggggggggggggggggggggggggg");
});