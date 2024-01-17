import mongoose from  'mongoose'

export async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log('connected to db')
    }catch(error){
        return('Something went wrong')
    }
}
