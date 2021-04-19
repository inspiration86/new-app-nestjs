import {Schema} from 'mongoose';
export const ProductSchema = new Schema({
 name:{type:String,required:true},
 description:{type:String},
 imageURL:{type:String},
 price:{type:Number},
 createdAt:{type:Date,default:Date.now}
});
