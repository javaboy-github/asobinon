---
title: 「引数」
---

![引数とは](https://cdn-ak.f.st-hatena.com/images/fotolife/s/sasigume/20210208/20210208092901.png)

**セレクターの後に付けることで、ターゲットを絞り込むのが「引数（ひきすう）」だ。**引数は@eなどのセレクターに四角カッコをくっつけ、\[引数名=文字列,引数名=数値\]などのようにコンマで区切って書く。以下、使える引数を一覧にまとめた。

| 引数名 | 絞り込む基準 |
|---|---|
| c=数値 | 対象となるエンティティの数を指定する。プラスの数値を書いた場合、近くのエンティティから選ばれ、マイナスの数値を書いた場合、遠くのエンティティから選ばれる。 |
| r=数値 | 実行した場所からの半径をブロック数で書く。指定した半径の内側が対象になる。 |
| rm=数値 | こちらは指定した半径の外側が対象になる。 |
| m=数値 | ゲームモードを番号で指定する。0はサバイバル、1はクリエイティブ。 |
| type=文字列 | エンティティIDを書いてエンティティの種類を指定する。 |

BE0.16では、ターゲットの数を指定するc引数、範囲を絞る`x`,`y`,`z`,`xd`,`yd`,`zd`引数、レベルで絞り込む`l`,`lm`引数、名前で絞り込む`name`引数、スコアで絞る`score_スコア名`,`score_スコア名_min`引数、タグで絞る`tag`引数、チームで絞る`team`引数、向きで絞る`rx`,`rxm`,`ry`,`rym`引数が**まだ実装されていない**のでご注意。実装状況はまだまだ全然なのだ…
