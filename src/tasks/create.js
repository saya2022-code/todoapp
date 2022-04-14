/*練習2-b */
// 新規登録処理
const mysql = require("mysql2/promise"); //mariaDBを指定
// const dbSetting = require("../../config.js");
const config = require("../../config.js");

/*タスクを登録するルーティング */
postTasks = async function(body){
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //ここにsql
    const sql = "INSERT INTO todoapp.t_task (task_name,deadline,category_id) VALUES(?,?,?);";
    let d = [body.taskName,body.deadline,body.category];
    const[rows,fields] = await connection.query(sql,d);
    
    return rows;
  }catch(e) {
    console.log(e);
  }finally{
    connection.end();
  }
};

exports.postTasks = postTasks;

/*練習2-a */
// // 新規登録処理
// const mysql = require("mysql2/promise"); //mariaDBを指定
// const { dbSetting } = require("../../config.js");
// const config = require("../config.js");

// /*タスクを登録するルーティング */
// postTasks = async function(){
//   let connection = null;
//   try{
//     connection = await mysql.Connection(config,dbSetting);
//     //ここにsql
//     return "123";
//   }catch(e) {
//     console.log(e);
//   }finally{
//     connection.end();
//   }
// };

// exports.postTasks = postTasks;