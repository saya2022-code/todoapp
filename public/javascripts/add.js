$("#taskName").focusout(function () {
  const current = $(this).val().length;
    if(current < 1){
        $("#taskName-error").text("文字を入力して下さい").css("color","red");
    }else if(current > 0){
        $("#taskName-error").text("");
    }
  });
  

// $("#alterName").focus(function () {
//     const current = $(this).val().length;
//       if(current < 1){
//           $("#alterName-error",).text("文字を入力して下さい").css("color","red");
//       }else if(current > 0){
//           $("#alterName-error").text("");
//       }
//     });
