//expressの導入
var express = require("express");
var router = express.Router();

const tasks = require("../../src/tasks/create.js");
const list = require("../../src/tasks/list.js");

/*タスクを登録するルーティング */
router.post("/tasks",async function(req, res, next){
  console.log(req.body);
  const postTask = await tasks.postTasks(req.body);
  res.send(postTask);
  });

module.exports = router;

/*タスク一覧を取得するルーティング */
 //Httpメソッド(get)を定義=router.get
 router.get("/list", async function(req, res, next){  
 console.log(req.body);
 const taskList = await list.getListTask(req.body);          
 //タスク一覧を取得する関数、getListTask()を呼び出す(list.js)
 //そしてtaskListに代入し、レスポンスとして返却
 res.send(taskList);                                 //getListTask()をtaskListに代入してそのレスポンスbodyを返却する
});

/*タスク1件を取得するルーティング */
 //Httpメソッド(get)を定義=router.get
 router.get("/list/:id", async function(req, res, next){ 
 console.log(req.params.id); 
 const getTaskId = await list.getTaskId(req.params.id);          
  res.send(getTaskId);                                 
  //getTaskId()をgetTaskIdに代入してそのレスポンスbodyを返却する
 });
 