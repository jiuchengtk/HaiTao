const sql = {

  // 插入数据
  insert(Collection, insertData){
      return new Promise( (resolve, reject) => {
          Collection.insertMany( insertData, (err) => {
              if(err) throw err;
              resolve()
          })
      })
  },

  // 查询数据
  find(Collection, whereObj, showObj) {
      return new Promise(function (resolve, reject) {
          Collection.find(whereObj, showObj).exec((err, data) => {
              if (err) throw err;
              resolve(data);
          })
      })
  },

  // 排序数据
  sort: function * (Collection, whereObj, showObj, sortObj) {
      return new Promise( function (resolve, reject) {
          Collection.find(whereObj, showObj).sort(sortObj).exec((err,data) => {
              if(err) throw err;
              resolve(data);
          })
      })
  },

  // 修改数据
  update(Collection, whereObj, updateObj, updateType){
      return new Promise( (resolve, reject) => {
          updateType = updateType || "updateOne";
           Collection[updateType](whereObj, updateObj, (err) => {
               if(err) throw err;
               resolve();
           })
      })
  },

  // 删除数据
  delete(Collection, whereObj, deleteType){
    //  deleteType = deleteType || "deleteOne";
      return new Promise( (resolve, reject) => {
          deleteType = deleteType || "deleteOne";
          Collection[deleteType](whereObj, (err) => {
              if(err) throw err;
              resolve();
          })
      })
  }
 

}

module.exports = sql;