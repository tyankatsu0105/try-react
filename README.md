# デザインパターン

Redux => Re-ducks

# メモ

- selector => state からほしいやつをセレクトするから（たぶん）
- react-redux7.1 で hooks きたので、使っていく
- 名前がバッティングするので、actions 内では `addAction` みたいに suffix 付けると良い
  - じゃないと container で import して dispatch するときの変数名考えるときに死ぬ
- Flux Standard Action
