$("#taskName").focusout(function () {
  const current = $(this).val().length;
    if(current < 1){
        $("#taskName-error").text("文字を入力して下さい").css("color","red");
    }else if(current > 0){
        $("#taskName-error").text("");
    }
  });
  
  $(async function() {
    const datas = await httpGet("//" + window.location.host +"/api/list");
    const listn = datas.map((item) => {
      console.log(item);
    //未完了のみの表示
    const filterTable = document.getElementById("dead-table");
    const filterButton = document.getElementById("deadTask-button"); 
    filterButton.addEventListener('click', () => {

    //hide()で非表示したい所を指定するだけで良い
      $('tr:contains("終了"),tr:contains("進行中")').hide();
});

  //進行中のみ表示
  const ongoingTable = document.getElementById("dead-table");
  const ongoingButton = document.getElementById("ongoing-button");   
    ongoingButton.addEventListener('click', () => {
    //絞り込み処理
    $('tr:contains("終了"),tr:contains("未完了")').hide();
  });

  //未完了・進行中を戻す(全表示)
  const offButton = document.getElementById("deadTask-Cbutton"); 
      
    offButton.addEventListener('click', () => {
    $('tr:contains("終了"),tr:contains("進行中"),tr:contains("未完了")').show();

    });
  });
});


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
              $('.list-contents tr').each(function() {
                targetText = $(this).text();
        
                // 検索対象となるリストに入力された文字列が存在するかどうかを判断
                if (targetText.indexOf(searchText) != -1) {
                  // 存在する場合はそのリストのテキストを用意した配列に格納
                  searchResult.push(targetText);
                }
              });
        
              // 検索結果をページに出力
              for (var i = 0; i < searchResult.length; i ++) {
                $('<tr>').text(searchResult[i]).appendTo('#search-result__list');
              }
        
              // ヒットの件数をページに出力
              hitNum = '<span>検索結果</span>：' + searchResult.length + '件見つかりました。';
              $('.search-result__hit-num').append(hitNum);
            }
          };
        
          // searchWordの実行
          $('#search-text').on('input', searchWord);
        });