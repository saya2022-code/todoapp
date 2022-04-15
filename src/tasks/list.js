// 一覧取得の処理
const mysql = require("mysql2/promise"); //mariaDBを指定
const config = require("../../config.js");

//関数getListTask()の定義
getListTask = async function(body){
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //ここにsql
// return "abc";
    const sql ="SELECT t_task.task_name,t_task.deadline,m_category.id,m_category.category_name,t_task.task_status FROM t_task INNER JOIN m_category ON t_task.category_id = m_category.id";
    let d = [];
    const[rows,fields] = await connection.query(sql,d);
    return rows;
  }catch(e) {
    console.log(e);
  }finally{
    connection.end();
  }
};

exports.getListTask = getListTask;