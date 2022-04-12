// 新規登録処理
const mysql = require("mysql2/promise"); //mariaDBを指定
const { dbSetting } = require("../../config.js");
const config = require("../config.js");

/*タスクを登録するルーティング */
postCreateTasks = async function(){
  let connection = null;
  try{
    connection = await mysql.createConnection(config,dbSetting);
    //ここにsql
    return "123";
  }catch(e) {
    console.log(e);
  }finally{
    connection.end();
  }
};

exports.postCreateTasks = postCreateTasks;