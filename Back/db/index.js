import mongoose from "mongoose";
const connection = mongoose.connect("mongodb+srv://gaurav:quiz@quiz.xnh4fju.mongodb.net/?retryWrites=true&w=majority" , {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

export default connection;                              
 