$("#taskName").focusout(function () {
  const current = $(this).val().length;
    if(current < 1){
        $("#taskName-error").text("文字を入力して下さい").css("color","red");
    }else if(current > 0){
        $("#taskName-error").text("");
    }
  });
  


//ステータスで色を変える
$(async function() {
  //データの取得
  const dataIn = await httpGet("//" + window.location.host +"/api/list");

  const listIn = dataIn.map((item) => {
  console.log(item);

  
//   const statusColor = item.task_status; 
//   console.log(statusColor);
  
//   var statusColorName = document.getElementById("td-head");
  
// if(statusColor == 1){
//   statusColorName.style.backgroundColor ='red';
   
//   }else if(statusColor == 2){
//     statusColorName.style.backgroundColor ='blue';
//   };
 });
});

