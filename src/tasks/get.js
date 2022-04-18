// // 1件の情報取得処理
// getTaskId = async function(id){
//   let connection = null;
//   try{
//     connection = await mysql.createConnection(config.dbSetting);
//     //ここにsql
//     const sql = "SELECT t_task.id, t_task.category_id, m_category.category_name, t_task.task_name, t_task.deadline, t_task.task_status, t_task.updated_at, t_task.created_at FROM t_task LEFT JOIN m_category ON t_task.category_id = m_category.id WHERE t_task.id = ?";
//     let d = [id];
//     const[rows,fields] = await connection.query(sql,d);
    
//     return rows;
//   }catch(e) {
//     console.log(e);
//   }finally{
//     connection.end();
//   }
// };

// exports.getTaskId = getTaskId;