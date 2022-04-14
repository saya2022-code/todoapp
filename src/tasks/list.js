// 一覧取得の処理
const mysql = require("mysql2/promise"); //mariaDBを指定
const config = require("../../config.js");

//関数getListTask()の定義
getListTask = async function(){
  let connection = null;
  try{
    connection = await mysql.createConnection(config.dbSetting);
    //ここにsql
return "abc";
    // const sql = "INSERT INTO todoapp.t_task (task_name,deadline,category_id) VALUES(?,?,?);";
    // let d = [body.taskName,body.deadline,body.category];
    // const[rows,fields] = await connection.query(sql,d);
    
    // return rows;
  }catch(e) {
    console.log(e);
  }finally{
    connection.end();
  }
};

exports.getListTask = getListTask;