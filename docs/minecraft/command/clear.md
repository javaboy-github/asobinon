# clear

|項目|内容|
|---|---|
|コマンド|`clear`|
|目的|プレイヤーのインベントリからアイテムを消去する|
| 必要な権限レベル | 1 |
|コマブロで実行|可能|
|適用対象|プレイヤー|

## 構文

[[dl|プレイヤーのインベントリからアイテムを消去する]]
|```
|/clear [プレイヤー] [アイテムID] [データ値] [最大個数]
|```

## 引数

[[dl| [プレイヤー] (任意)]]
|プレイヤーの名前もしくはターゲットセレクタでないといけない。指定しない場合は、clearコマンドを実行したプレイヤーがターゲットになる。**コマンドブロックではこの引数は必須。**

[[dl| [アイテムID] (任意)]]
|消去するアイテムのIDを書く。指定しない場合は、ターゲットのプレイヤーの全てのアイテムが消去される。

[[dl| [データ値] (任意)]]
|消去するアイテムのデータ値を書く。指定しない場合、もしくは`-1`を指定した場合は、データ値に関わらずIDが合致するアイテムを消去する。

[[dl| [最大個数] (任意)]]
|最大でどれだけ消去するか指定する。指定しない場合、もしくは`-1`を指定した場合は、IDとデータ値が合致するアイテムを全て消去する。**`0`を指定した場合はアイテムは消去されないが、アイテムが存在するならコマンドは"成功"を返す。(このことを利用してアイテムの所持を検知することができる)**

## 実行結果

引数が正しく指定されていない場合、1人以上オンラインのプレイヤーが存在しない場合、どのアイテムも消去されなかった場合(最大数を0にした場合を除く)は失敗する。 成功すると、プレイヤーから指定したアイテムを消去する。

## 使用例

- `/clear` 自分のインベントリのアイテムを全て消去する
- `/clear steve` steveさんのアイテムを全て消去する
- `/clear steve wool` steveさんのインベントリの羊毛を全て消去する
- `/clear @a wool 1` 全てのプレイヤーのインベントリからオレンジ色のウールを消去する

## あわせて知っておきたいコマンド

- [/give](./give) ― プレイヤーにアイテムを与えられる
- [/replaceitem](./replaceitem) ― ブロックやエンティティのインベントリのアイテムを置換できる
