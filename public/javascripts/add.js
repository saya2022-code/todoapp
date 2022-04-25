$("#taskName").focusout(function () {
  const current = $(this).val().length;
    if(current < 1){
        $("#taskName-error").text("文字を入力して下さい").css("color","red");
    }else if(current > 0){
        $("#taskName-error").text("");
    }
  });
  
  //

  $(async function() {
    const datas = await httpGet("//" + window.location.host +"/api/list");
    const listn = datas.map((item) => {
      console.log(item);
//完了していないタスクの表示
  const filterTable = document.getElementById("dead-table");
  
  const filterButton = document.getElementById("deadTask-button"); 
  filterButton.textContent = '未完了で絞り込み';
    
  filterButton.addEventListener('click', () => {
      //絞り込み処理
      $('tr:contains("未完了")').css('background-color', 'Yellow');

      // let row = $(this).closest("tr").remove();
      // $(row).remove();

    //   for (const item of datas) {
    //   if (item.task_status == 1) {
    //   $(this).closest('tr:contains("未完了")').remove();
    //   }
    // }

    // for (const item of listn) {
      // if (listn.task_status == 1) {
        // addItem(item);
        // filterTable.textContent = ''; 
        // console.log("aaa");
          
        // }
      // }
});
const offButton = document.getElementById("deadTask-Cbutton"); 
offButton.textContent = '戻す';
  
offButton.addEventListener('click', () => {
    // 絞り込み処理
    $('tr:contains("未完了")').css('background-color', '#FFFFFF');
});
});
  });
//完了していないタスクの非表示

//期限が前日のタスク
// const Today = new Date();
        // var deadTask = item.deadline
        // var deadTime = Today - item.deadline //結果がtodyより24時間前
        // if(deadTime < )
        // console.log(date);

  //検索
  $(function () {
    searchWord = function(){
      var searchResult,
          searchText = $(this).val(), // 検索ボックスに入力された値
          targetText,
          hitNum;
        
  // 検索結果を格納するための配列を用意
    searchResult = [];
        
  // 検索結果エリアの表示を空にする
    $('#search-result__list').empty();
    $('.search-result__hit-num').empty();
        
            // 検索ボックスに値が入ってる場合
            if (searchText != '') {
              $('.list-contents td').each(function() {
                targetText = $(this).text();
        
                // 検索対象となるリストに入力された文字列が存在するかどうかを判断
                if (targetText.indexOf(searchText) != -1) {
                  // 存在する場合はそのリストのテキストを用意した配列に格納
                  searchResult.push(targetText);
                }
              });
        
              // 検索結果をページに出力
              for (var i = 0; i < searchResult.length; i ++) {
                $('<span>').text(searchResult[i]).appendTo('#search-result__list');
              }
        
              // ヒットの件数をページに出力
              hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
              $('.search-result__hit-num').append(hitNum);
            }
          };
        
          // searchWordの実行
          $('#search-text').on('input', searchWord);
        });

  //部分一致の検索
  // $(function () {
  //   searchWord = function(){
  //     var searchText = $(this).val(), // 検索ボックスに入力された値
  //         targetText;
  
  //     $('.list-contents td').each(function() {
  //       targetText = $(this).text();
  
  //       // 検索対象となるリストに入力された文字列が存在するかどうかを判断
  //       if (targetText.indexOf(searchText) != -1) {
  //         $(this).removeClass('hidden');
  //       } else {
  //         $(this).addClass('hidden');
  //       }
  //     });
  //   };
  
  //   // searchWordの実行
  //   $('#search-text').on('input', searchWord);
  // });