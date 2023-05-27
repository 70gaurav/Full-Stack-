import mongoose from "mongoose";
const connection = mongoose.connect("" , {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

export default connection;                              
 