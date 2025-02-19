---
title: 1.8対応のカメラMOD! 簡単にポイントを設定してヌルヌル撮影「PixelCam」byCrushedPixel
---

[![PixelCam](https://www.napoan.com/wp-content/uploads/imgs/3/1/310f5f1d.png)](#3/1/310f5f1d.png "PixelCam")  
**カメラMODといえば、「CameraStudio」が有名ですね。**  
しかし、[前回の記事](/43206623/ "[Minecraft]CameraStudioで録画できない! Recorderのダウンロード場所と導入方法")で触れたとおり、**作者さんは開発をやめてしまいました…**  
そこで、**1.8対応の新たなカメラMODが制作/リリースされました。**  
今回紹介するのは、**あのCrushedPixelさん制作**の**「PixelCam」**です。  
素晴らしいコマンド解説動画が人気な方のMODですから、**便利なこと間違いなし。**   
**シングル/マルチプレイどちらも対応**の、**是非導入しておきたいMODです。**

## 目次 -contents-

*   [1.8対応のカメラMOD「PixelCam」の導入方法](#how-to-inst)
*   [「PixelCam」の使い方 – ルートを設定、撮影開始](#how-to-use)
*   [不具合と、サバイバルやマルチプレイのサーバーで使う時の注意点](#note)

## 1.8対応のカメラMOD「PixelCam」の導入方法

あらかじめ**自由に設定しておいたルートでヌルヌル飛行して撮影**する…  
配布ワールドやサーバーのPVなどでよく使われる、カメラMOD。  
**一番ポピュラーなのは「CameraStudio」ですが、開発が停止し、1.8はベータ版しかありません…**

**そこで、1.8でぬるぬる撮影できる新しいMODが登場しました。**  
コマンドの動画で有名な[CrushedPixelさん](http://www.youtube.com/channel/UCbGrzgowatCRk7x5gVXhz-g)制作の、**期待のMOD「PixelCam」**です。  
それでは、Forgeを使った**導入方法**を解説します。 

(使い方が早く読みたい方は[こちら](#how-to-use)へどうぞ)

[**#StopModReposts**  
そのダウンロード場所、本物ですか。MODは必ず正規の場所からダウンロードしましょう。](https://www.napoan.com/stop-mod-reposts/)

### 導入方法

このMODは**バージョン1.8のForge**用のMODです!

1.  **Forgeを導入**  
    **[こちら](/new-way-to-install-mod/#forge-inst)**の記事を参考にしてください  
    ※Forgeは1.8版をダウンロードして導入して下さい。
2.  **「PixelCam」をダウンロード**  
    **[こちら](http://www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/2327429-pixelcam-camera-studio-for-minecraft-1-8 "「PixelCam」のダウンロード")**からダウンロードして下さい。
3.  **modsフォルダにブチ込む** 
4.  **後述する使い方をよく読んで楽しく撮影**

[![Mods画面に表示されたら導入成功です](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134325.png)](#4/1/410c185a.png "Mods画面に表示されたら導入成功です")

タイトル画面の**「Mods」**にPixelCamが表示されたら導入成功です。

## 「PixelCam」の使い方 – ルートを設定、撮影開始

うまく導入できましたか? それでは、実際に使ってみましょう。  
**特別な準備は必要ありません。**撮影したい場所に行きましょう。  
そして**クリエイティブモードもしくはスペクテイターモード**に切り替えます。 

[![Pキーでポイント設定](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208134003.png)](#3/d/3dd842f9.png "Pキーでポイント設定")

キーボードのPキーを押すと、**現在の場所と向いている方向が「ポイント」として記録されます。**  
この**「ポイント」をいくつか設定することで、撮影時に飛行するルートを決められる**のです。  
向いている方向も記録されるので、**ある建物に注目しながら飛ぶ、といった事もできます。**

[![撮影を開始する専用コマンド](https://www.napoan.com/wp-content/uploads/imgs/4/c/4cf8c683.png)](#4/c/4cf8c683.png "撮影を開始する専用コマンド")

ポイントを複数設定して、ルートが決まったら撮影をはじめましょう。  
**撮影(飛行)を開始する**時は、以下のコマンドを実行します。

**撮影を開始するコマンド(プレイヤーが自分で実行)  
/cam start 時間**

「時間」の部分には、**例えば30秒だったら「30s」、3分だったら「3m」という風にs,mを使って記述します。**  
「3分20秒」のように分と秒を組み合わせる場合は、「3m20s」と続けて記述して下さい。  
ポイントの設定と同様、**使い方はCameraStudioを踏襲している**のでとっても楽です。

[![障害物をすり抜けて飛行可能](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153621.png)](#a/8/a8d97830.png "障害物をすり抜けて飛行可能")

このMODがCameraStudioより優れている点をご紹介します。  
それは、**「ルート上のブロックをすり抜けて飛行が可能」**という点です。  
**CameraStudioの場合、ブロックに引っかかると飛行が止まってしまいます**が、これなら安心。  
/gamemode 3で**スペクテイターモードに設定しておけば、画面がブロックで埋まることもありません。**

**設定したポイントを一括削除**するには、以下のコマンドを実行します。

**設定したポイントを全て削除するコマンド(プレイヤーが自分で実行)  
/cam clear**

## 不具合と、サバイバルやマルチプレイのサーバーで使う時の注意点

いい事ずくめなこのMODですが、**現在のPixelCam1.2では、重大な不具合が2つあります。**  
(以下で紹介してい  
る不具合は、2015/5/9現在のバージョン1.2での不具合です。  
**将来のバージョンアップで修正される可能性がある**のでご了承ください。)

一つは、**エスケープキーを押してメニューを開くと飛行速度がおかしくなる**バグです。  
**メニューを閉じれば正常な速さ/位置に戻って飛行を続けられる**のでご安心下さい。

[![重大な不具合!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131620.png)](#1/f/1fce253e.png "重大な不具合!")

もう一つの不具合は、仕様だと思いますがこのままでは不便過ぎる不具合です。  
**ワールドを出入りしても、設定したポイントが保持されてしまうのです。**  
例えば、**ポイント1~10を設定した後、別ワールドでPキーを押すとポイント11として記録されます。**  
**このまま飛行を始めると、前ワールドで設定した座標を通って飛行してしまいます…**

最後に、「PixelCam」を使う上での注意点をいくつか。

[![サバイバルやアドベンチャー、チートOFFでは使えません!](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208145033.png)](#7/d/7d9d6df6.png "サバイバルやアドベンチャー、チートOFFでは使えません!")  
**サバイバルモードやアドベンチャーモードで撮影を開始しようとすると、警告が出てできません。**  
さらに、**チートが禁止されているプレイヤーは色々な機能が使えません。**  
**しかも、tpコマンドを使うとキックされるサーバーで使うのはダメ**みたいです…

---

![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208162522.png)

いかがでしたか。**便利なMODと出逢えましたか。**  
**「こんなMODを紹介して欲しい」**などコメント待ってます。
