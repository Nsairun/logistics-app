import mongoose from "mongoose";


export const connectMongoDB = async () => {
    try {        
        await mongoose.connect(process.env.MONGO_CONNECT_UR);
        console.log("connected to mongodb")
    } catch (error) {
        console.log("Error connecting to Mongodb", error)
    }
};