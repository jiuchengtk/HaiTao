const mongoose = require('./db');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  id:  { type: Number },
  pic: { type: String },
  img: { type: String }
})
 
// banner 是数据库中的集合collection
module.exports = mongoose.model("product", ProductSchema, "product");