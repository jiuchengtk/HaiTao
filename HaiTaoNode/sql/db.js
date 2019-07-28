const mongoose = require("mongoose");
//  HaiTao 是mongodb数据库中的数据库名
const DB_URL = 'mongodb://localhost:27017/HaiTao';

mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.on("connected", () => console.log("连接成功"));
mongoose.connection.on("disconnected", () => console.log("断开连接"));
mongoose.connection.on("error", () => console.log("连接成功"));

module.exports = mongoose;