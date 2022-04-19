// // 1件のデータ削除処理
// deleteTaskId = async function(id){
//   let connection = null;
//   try{
//     connection = await mysql.createConnection(config.dbSetting);
//     //ここにsql
//     const sql = "DELETE from t_task WHERE id = ?;";
//     let d = [id];
//     const[rows,fields] = await connection.query(sql,d);
    
//     return rows;
//   }catch(e) {
//     console.log(e);
//   }finally{
//     connection.end();
//   }
// };

// exports.deleteTaskId = deleteTaskId;
