$(function () {
    // アラート文を非表示にする
    $(".alert").hide();
    
    // 「送信する」ボタンをクリック
    $("#submitButton").click(function (e) {
      e.preventDefault(); // デフォルトの動作をキャンセル
    
      // チェック用の変数sendFlag
      var sendFlag = true;
    
      // お名前が入力できていない場合
      if (!$("#text").val()) {
        $("#textSection .alert-text").show();
        sendFlag = false;
      } else {
        $("#textSection .alert-text").hide();
      }


      // 会社名が入力できていない場合
      if (!$("#text").val()) {
        $("#companySection .alert-text").show();
        sendFlag = false;
      } else {
        $("#companySection .alert-text").hide();
      }

      // メールアドレスが入力できていない場合
      if (!$("#text").val()) {
        $("#emailSection .alert-text").show();
        sendFlag = false;
      } else {
        $("#emailSection .alert-text").hide();
      }

    // チェックボックスにチェックが入っていない場合
    var checkboxChecked = $("#privacyCheckbox").prop("checked");
    if (!checkboxChecked) {
     // チェックがない：アラート文を表示
     $(".alert-checkbox").show();
     sendFlag = false; // チェックがない場合はfalseに
    } else {
     // チェックがある：アラート文を非表示
     $(".alert-checkbox").hide();
    }

    
      // 変数sendFlagの値をチェック
      if (sendFlag == false) {
        return false;
      }
    
      // ここでフォームの送信処理を行うか、Thank画面に遷移する処理を追加
      // falseでなければThank画面に遷移する
      $(".Form-Item").hide();
      $("#Check").hide();
      $("#Thank").show();
    });
  });
  