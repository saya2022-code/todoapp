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
    const sql = "SELECT task_name,deadline,category_id,task_status FROM todoapp.t_task";
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