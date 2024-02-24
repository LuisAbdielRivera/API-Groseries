import { Schema, model } from "mongoose";

const userSchema= new Schema({
    id: {
        type: String,
        unique: true,
        require: true
    },
    name: String,
    lastname: String,
    address:String,
    phone:Number
},{
    versionKey: false,
    timestamps: true
})

export default model('user', userSchema)