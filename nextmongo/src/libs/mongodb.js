import mongoose from "mongoose";

const connectMongodb =async()=>{
    try {
         await mongoose.connect('mongodb+srv://amineromdhane77:aminekouti@cluster0.wxydlcj.mongodb.net/?retryWrites=true&w=majority')
        console.log('mgdb is connected')
    } catch (error) {
        console.log('error')
    }
}
export default connectMongodb