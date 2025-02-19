---
title: 人やMobを通り抜けるには。エンティティの当たり判定を設定するコマンドの解説
---

![エンティティの当たり判定を設定するコマンド](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100423.png)

バージョン1.9の大きな変更の一つに、**「プレイヤーやMobが当たった時、お互いを押すようになった」**点があります。このままでは、既存のコマンドを使った仕掛けや、マルチプレイなどで予期せぬ事故が起こる可能性もあります。でも安心して下さい。**この当たり判定は、とあるコマンドの機能を使えば無効化できます。**今回は、バージョン1.9で**エンティティ同士が押すか押さないかを設定する方法**を解説します。

\[2019年9月2日\] 1.13以上のバージョンに対応させました

バージョン1.9の、コマンドや配布ワールド作成に関する新機能/変更点まとめ

[![1.9のコマンド関連まとめ](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208122409.png)  
https://www.napoan.com/pcversion19-command-guide/](https://www.napoan.com/pcversion19-command-guide/)  
▲バージョン1.9はコマンドに関する新要素/仕様変更が盛り沢山。

## 1.9で、エンティティ同士が接触した際跳ね返されるようになりました

![バージョン1.9では貫通せず押してしまう](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100348.png)

Minecraft1.9の当たり判定に関する仕様変更は、こちらの一枚を見れば一目瞭然ですね。つまりは貫通しなくなったんです。例えばマルチプレイで**他のプレイヤーを通り抜けることはできません**し、反対に村人など**他のエンティティに押されることもある**のです。

![既存の配布ワールドへの影響が心配](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095803.png)

些細な変更に思えるかもしれませんが、クリエイターとしてではなくプレイヤーとして遊んでみると違いがよく分かります。ゾンビをするっと通り抜けられないもどかしさ。**ダンジョンやアスレチック系の配布ワールドの難易度が大きく変わってしまいそうで心配**です…

![まだ貫通する方法はあります](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095701.png)

でも安心して下さい。**バージョン1.9でもエンティティを通り抜ける方法が用意されているんです。**コマンドをちょっと打つだけでこの通り。プレイヤーも、村人も、ゾンビも、もう**押されることも押してしまうこともありません**。

## チームごとに接触時の挙動を設定して、貫通/非貫通を切り替える方法

さて、これからMobやプレイヤーの接触時の挙動(貫通するか否か)を設定するわけですが、ただコマンドを羅列しただけではつまらないですのでざっと**作業の流れ**を説明します。

![当たり判定の設定方法](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095722.png)

エンティティの当たり判定を設定する、となるとNBTタグやらが出てきそうですが、今回は出てきません。**summonコマンドもentitydataコマンドも使いません。**使うのはscoreboardコマンドのチーム機能だけです。**先に”チーム”を用意して、そのチームのオプションを変更する**ことで当たり判定を設定するんです。

### 1.9の新しいチームルール「collisionRule」の設定内容

まずは”チーム”を作成します。PvPなどで既にチームを作成している場合はそのままで大丈夫です。

チームを新規作成するscoreboardコマンド

**/team add チーム名 (表示名)**  
▲「チーム名」は半角英数字を使って下さい。

そのワールド/サーバーで特別にチーム分けをしていない場合は**「当たり判定を無効化するためのチーム」**なので、チーム名は「noCollision」「noPush」などが分かりやすいですね。他と被ってもいけませんし。

さて、いよいよ作った(作ってある)チームに当たり判定の設定をしますよ!

チームに所属するエンティティの当たり判定(接触時の挙動)を設定するコマンド

**/team modify チーム名 collisionRule 設定内容**

collisionRuleの「設置内容」一覧

always

デフォルトの値です。チームに所属しているプレイヤー、Mob等の当たり判定を持つエンティティはお互いに押し合います。

never

チームに所属している、本来押し合うものも含め全てのエンティティは貫通できるようになります。**つまり1.8までの通り抜ける仕様になります。**

pushOwnTeam

**同じチーム**に所属しているエンティティだけを押せます。

pushOtherTeams

**他のチーム**のエンティティだけを押せます。

結論から言いますと、チームを作って**/scoreboard teams option チーム名 collisionRule never**で通り抜けられるようになるんです。これがバージョン1.9の新しいチームオプション「collisionRule」。

チームにプレイヤーやMob等のエンティティを参加させるコマンド

**/team join チーム名 ターゲット(@p等のセレクタやプレイヤー名)**

例: 近くのゾンビ1体を「noCollision」チームに参加させる  
**/team join noCollision @e\[type=Zombie,c=1\]**

接触時の挙動を設定したチームに、**プレイヤーやMobを参加させる**わけですが、**一つのエンティティは複数のチームに同時に所属することはできません**のでご注意下さい。既にPvP用などのチームがある場合、既存のチームに対して当たり判定の設定をすればOKです。

![片方だけ当たり判定をなくせばOK](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208095828.png)

貫通させたいエンティティを両方チームに参加させる必要はありません。**片方のエンティティのチームが貫通する設定になっていればお互い通り抜けられます。**

### エンティティを最初から当たり判定の無い(貫通する)状態で召喚するには

![最初からチームに所属した状態で召喚するには](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208100414.png)

当たり判定の設定はチームごとに設定するので、例えばダンジョン系の配布ワールドで「ゾンビが召喚される」などの仕掛けで**いちいちMobをチームに参加させるのは大変面倒**ですね。そこで、最初から当たり判定の無いチームに参加した状態で召喚しましょう。

最初から当たり判定の無いチームに所属した状態でエンティティを召喚するコマンド

まず、チームの作成と跳ね返し無効化:  
**/team add 当たり判定無効化用のチーム名 (表示名)**  
**/team modify チーム名 collisionRule never**

次に、エンティティ召喚時にチームを指定!  
**/summon エンティティID 座標x y z **{Team:”チーム名”}****

先に当たり判定を無効化するエンティティのためのチームを作っておいて、NBTタグ「Team」を使って、エンティティの所属チームを指定します。実にシンプル。

---

ということで今回のコマンド解説はここまで。**最後までお読み頂きありがとうございました。**そういえば「最近書いた記事」コーナーはやめました。代わりに左(メニュー)の関連記事をチェックして頂ければ幸いです。
