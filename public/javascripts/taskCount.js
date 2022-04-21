//指定したidの子要素の数をカウント

//全データから各値をまとめたオブジェクト
  //   const lists = data.((item) => {
  //   const leftValue = item.task_status; 
  //   var status = 0; 
  //   if(1 <= ${status}.value <= 2){

  //   }
  // });
  
    const statusData = {
        init() {
            // 全データ
            const dataAll = model.getItem();
            // タスク総数
            this.totalCount = dataAll.length;
            // 残タスク数
            this.leftCount = (() => {
                let result = 0;
                dataAll.forEach((value) => {
                    if (value.status === 'open') {
                        result += 1;
                    }
                });
                return result;
            })();
            // 完了済みタスク数
            this.completeCount = this.totalCount - this.leftCount;

        }
    };