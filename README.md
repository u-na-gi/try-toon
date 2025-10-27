# Try TOON

TOON (Token-Oriented Object Notation) を試すプロジェクトです。

## TOONとは

LLMトークンを最適化するために設計されたデータフォーマットで、標準のJSONと比較して30-60%のトークン削減を実現します。

## セットアップ

```bash
npm install
```

## 実行

```bash
npm run example
```

## 結果

このサンプルでは、商品データをJSON形式とTOON形式で比較しています：

- JSON: 306文字
- TOON: 167文字
- トークン削減率: 45.4%

## TOON形式の特徴

- インデントベースの構造（ブレースが不要）
- フィールド名を一度だけ宣言
- 配列データをテーブル形式で表現
- LLMが出力を検証しやすい明示的な長さとフィールド宣言

## 参考

- [TOON GitHub Repository](https://github.com/johannschopplich/toon)
