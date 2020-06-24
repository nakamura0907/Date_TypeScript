# 概要

超軽量をコンセプトとした日付管理ライブラリです。

## リファレンス

#### new NakamuraCalendar(Date)

- 引数
  - Date: Date オブジェクト

#### setDate(Date)

- 引数
  - Date: Date オブジェクト
- 返り値
  - this

#### getDate([format = ""])

- 引数
  - format(option): format を指定します
- 返り値
  - Date.toString();
  - 文字列(format を指定した場合)
- 例
  - getDate(%y 年%M/%d %hh:%mm:%ss 秒) // 2020 年 12/30 12:00:00 秒

#### add(number, [unit = "day"], [flag = false])

- 説明
  引数 number に指定した時間が経過した後の日付を取得できます
- 引数
  - number: 経過時間を指定します
  - unit(option): 経過時間の単位を指定します
  - flag(option): プロパティに経過時間を保存します
- 返り値
  - 経過時間後を引数にした NakamuraCalendar オブジェクト
  - this(flag を true にした場合)
- 例
  - add(3, "year", false) // 3 年後の日付を引数とした NakamuraCalendar オブジェクト

#### diff(Date, [unit = "day"])

- 説明
  引数 Date との差を取得することができます
- 引数
  - Date: 差を求めたい日付
  - unit(option): 変換される値の単位を指定できます
- 返り値
  - number

#### isBefore(Date)

- 説明
  引数 Date よりも前なのか判定できます
- 引数
  - Date: 判定を行う日付
- 返り値
  - boolean

#### isAfter(Date)

- 説明
  引数 Date よりも後なのか判定できます
- 引数
  - Date: 判定を行う日付
- 返り値
  - boolean
