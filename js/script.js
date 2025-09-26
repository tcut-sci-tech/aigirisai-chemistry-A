// ページの読み込みが完了してからスクリプトを実行
$(window).on('load', function () {

  //テキストのカウントアップ+バーの設定
  var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#555',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#bbb',//ゲージベースの線のカラー
    text: {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        padding: '0',
        margin: '-30px 0 0 0',
        transform: 'translate(-50%,-50%)',
        'font-size': '1rem',
        color: '#fff',
      },
      autoStyleContainer: false
    },
    step: function (state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  // アニメーションスタート＋スプラッシュ非表示
  bar.animate(1.0, function () {
    $("#splash").delay(500).fadeOut(800);
  });

});
