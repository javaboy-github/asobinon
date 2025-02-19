---
title: ボタンを押すとランプが光り、他を選ぶと切り替わるスイッチ回路の作り方[コマンド解説 for1.8]
---

[![一つだけボタン](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208124517.png)](#0/0/00d497f5.png "一つだけボタン")  
配布ワールドやマルチプレイのサーバーで、**「一つだけ選べるボタン」**を見かけませんか?  
**RPG風マップで自分の職業を変更したり**、**PvPのフィールドを切り替えたり**…  
**「ボタンを押した所のランプが光って他のランプが消え、何回でも選び直せる」**  
そんなよく見る**レッドストーン回路の作り方と仕組み、コマンド**を解説します。

## 今回作る仕掛け(回路)はどんな物?

[![よくある選択肢ボタン。](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208151648.png)](#9/6/96460d8a.png "よくある選択肢ボタン。")

アドベンチャーマップの入り口や、PvPのサーバーにありそうな選択肢ボタン。  
**ボタンの上にレッドストーンランプがあり、押せば光る**のですが…

![ボタンを押すとランプが点灯、他のボタンを押すと切り替わる](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208075131.gif)

▲このように、**ボタンを押した後に他のボタンを押すと、ランプが切り替わります。**  
**一つボタンを押すとそのランプが点き、他のランプが消える**回路を作るのです。

[![一つだけ点灯する](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208153635.png)](#a/8/a8ff3822.png "一つだけ点灯する")

**この回路で使っているコマンドは2種類だけです。  
**レッドストーンブロックを撤去し、設置する。それだけです。

## 一つだけ選べて、何回でも選び直せるボタン回路の作り方

それでは、**回路の作り方とコマンド**を解説していきます。  
回路の完成品はこちら。  
[![一つ目の作り方の完成品](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208161541.png)](#d/0/d0c791a5.png "一つ目の作り方の完成品")

どうです? とっても単純でしょ。それぞれのボタンから2つのコマンドブロックへ回路を繋げるだけです。

[![まずは回路を作ろう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208133315.png)](#3/6/367efe5b.png "まずは回路を作ろう")

まずは回路を作りましょう。ボタンをいくつか用意して、そこからパウダーを伸ばします。  
そして**2つのコマンドブロックを設置**、**一つにはパウダーを乗せて**、**もう一つはリピーターで繋ぎます**。

[![Xのコマンドブロック周辺の仕組み](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208154306.png)](#a/f/afc3ee45.png "Xのコマンドブロック周辺の仕組み")

次に、**ボタンの上にレッドストーンランプを設置します。**  
そして図のように**紫色のガラスを、左端のランプから右端のランプまでの範囲に設置して下さい。**  
この**紫のガラスの範囲が、ボタンを押した際にレッドストーンブロックを撤去/設置する範囲**になります。

**「X」**のコマンドブロックには、以下のコマンドを入力します。

**「X」のコマンドブロックに入力するコマンド (ボタンを押したら実行)**  
**/fill 始点の座標 終点の座標 stained\_glass 10 replace redstone\_block 0**

fillコマンドで、最初に**周辺のレッドストーンブロックを一斉除去します。**  
**上図の**「始点」**から**「終点」**までの範囲にあるレッドストーンブロックを、紫のガラスに置き換えます。**  
この**「replace」機能**は、[こちらの記事](/41249070/#use-fill "【コマンド解説】一瞬で城が出現! fillやcloneの使い方とダンジョン用仕掛け")で解説したように、**置き換えるブロックを後に追記します。**

[![「Y」のコマンドブロック周辺の回路](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208131334.png)](#1/c/1ceb47a0.png "「Y」のコマンドブロック周辺の回路")

次に、リピーターの先の**「Y」のコマンドブロック**に入力するコマンドを解説します。

**「Y」のコマンドブロックに入力するコマンド (Xよりちょっと遅れて実行)**  
**/setblock 赤石ブロックを設置する**相対座標** redstone\_block 0**

setblockコマンドを使って、**紫のガラスがある範囲に赤石ブロックを設置**します。

[![相対座標の求め方](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208135836.png)](#4/e/4e2ffcd5.png "相対座標の求め方")

「赤石ブロックを設置する相対座標」はどう書けばいいか、表でまとめました。

「Y」から見て、紫のガラスがどこにあるか

コマンド内の相対座標

ガラスが**北にある場合**

~ ~1 ~-3

ガラスが**南にある場合**

~ ~1 ~3

ガラスが**東にある場合**

~3 ~1 ~

ガラスが**西にある場合**

~-3 ~1 ~

[![ボタンを増やす際は範囲も増やしてね](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208174852.png)](#e/d/ed4aead3.png "ボタンを増やす際は範囲も増やしてね")

これらの「X」と「Y」のコマンドブロックを、ボタンの数だけ用意すれば完成です。  
**ボタンの数を増やす時はfillコマンドの範囲も増やさないといけない**、という点に注意して下さい。

[![実行したいコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208164711.png)](#e/5/e519ba0d.png "実行したいコマンド")

最後に、ボタンを押した時に実行したいコマンドを設定します。  
例えば**scoreboardの数値を設定したり**、**天候を決めたり**… 色々なことができます。

---

![最後までお読み頂きありがとうございました](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208142902.png)  
いかがでしたか。**色々な場面で使って頂ければ幸いです。**  
**「これはどうするの?」**などコメント待ってます。

最近書いたコマンド解説記事

*   [**開けている間ダメージを受けるチェスト**の作り方 – 開閉を検知するトグルBUD回路](/damage-chest/)
*   [**残り時間をカウントダウン**して、大きく表示する方法 – PvPに便利](/44150579/)  **_New!!_**
*   [**Mobをジャンプさせる**方法 (かつAI無効) – 配布ワールド作成に](/43943060/)
*   [**ネタバレしない**、HPが増えるなどの**効果付きアイテム**の作り方](/43851879/)
