const mongoose = require('./db');
const { Schema } = mongoose;

const BannerSchema = new Schema({
  id:  { type: Number },
  pic: { type: String }
})
 
// banner 是数据库中的集合collection
module.exports = mongoose.model('banner', BannerSchema, 'banner');