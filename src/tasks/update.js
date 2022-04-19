// // 更新処理
// patchTaskId = async function(id, body){
//   let connection = null;
//   try{
//     connection = await mysql.createConnection(config.dbSetting);
//     //ここにsql
// // return "abc";
//     const sql ="UPDATE t_task SET task_name=?, deadline=?, category_id=?, task_status=?, updated_at=? WHERE id=?;";
//     let d = [
//       body.taskName,
//       body.deadline,
//       body.category,
//       body.status,
//       new Date(),
//       id,
//     ];
//     const[rows,fields] = await connection.query(sql,d);
//     return rows;
//   }catch(e) {
//     console.log(e);
//   }finally{
//     connection.end();
//   }
// };

// exports.patchTaskId = patchTaskId;
