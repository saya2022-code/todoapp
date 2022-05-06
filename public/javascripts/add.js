$("#taskName").focusout(function () {
  const current = $(this).val().length;
    if(current < 1){
        $("#taskName-error").text("文字を入力して下さい").css("color","red");
    }else if(current > 0){
        $("#taskName-error").text("");
    }
  });
  
  $(async function() {
    const status_id = $('#deadTask-button').data("id");
    const datas = await getTasks_yet("//" + window.location.host +"api/list/status/"+status_id);
    const list_yet = datas.map((item) => {
      console.log(item);
       
      // 日付を 年月日に変換
      const createDate = new Date(item.deadline);
      const year = createDate.getFullYear();
      const month = createDate.getMonth() + 1;
      const day = createDate.getDate();
      const deadline = year + "年" + month + "月" + day + "日";

      //ステータスのvalueをテキストに変える
      const statusValue = item.task_status; 
      var status = ""; 
      var statusClass = "";   
         
      if(statusValue == 1){
       status = "未完了";
       statusClass = "status-red";
      //  document.getElementById("td-head").style.backgroundColor ='red'
      }else if(statusValue == 2){
       status = "進行中";
       statusClass = "status-blue";
      }else if(statusValue == 3){
       status = "終了";
       statusClass = "status-green";
       cntComp += 1;
      }
      console.log(cntComp);

      return `<tr class="br">
              <div id="tdh">
              <td width="2%" id="td-head" class=${statusClass}></td>
              <td width="40%">${item.task_name}</td>
              <td width="15%">${deadline}</td>
              <td width="10%">${item.category_name}</td>
              <td width="10%">${status}</td>
              <td width="18%"><button type="button" class="btn btn-primary "data-toggle="modal" data-target="#altermodal" id="altermodal-get" data-id=${item.id}>更新</button>
              <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deletemodal" data-id=${item.id} data-delete=${item.task_name} id="delete-button" >削除</button></td>
              </div>
              </tr>`;    
    });
    $(".list-contents").append(list_yet);

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