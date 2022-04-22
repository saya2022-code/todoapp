$("#taskName").focusout(function () {
  const current = $(this).val().length;
    if(current < 1){
        $("#taskName-error").text("文字を入力して下さい").css("color","red");
    }else if(current > 0){
        $("#taskName-error").text("");
    }
  });
  
  //

//完了していないタスクの表示
  const filterTable = document.getElementById("dead-table");
  const filterButton = document.getElementById("deadTask-button"); 
  filterButton.textContent = '未完了で絞り込み';
    
  filterButton.addEventListener('click', () => {
      // 絞り込み処理
      $('tr:contains("未完了")').css('background-color', 'Yellow');

      // filterTable.textContent = ''; 
      // for (const item of list) {
      //   if (item.task_status == 1) {
      //     addItem(item);
// }
// }
});

//期限が前日のタスク
// const Today = new Date();
        // var deadTask = item.deadline
        // var deadTime = Today - item.deadline //結果がtodyより24時間前
        // if(deadTime < )
        // console.log(date);