# Blophy判定方法

## 音符击打时机判定

| 判定      | 偏移量        |
|---------|------------|
| Perfect | +-60ms     |
| Early   | +60~+105ms |
| Late    | -105~-60ms |
| Bad     | <-120ms    |
| Miss    | >120ms     |     

## note类型

### Tap

可用判定:

- Perfect
- Good(E/L)
- Bad
- Miss

判定方法:在note接触到判定框边缘时单点

### Hold

可用判定:

- Perfect
- Good(E/L)
- Bad
- Miss

判定方法:在note接触到判定框边缘时长摁直到note结束

### Drag

可用判定:

- Perfect
- Miss

判定方法:如果在该note接触判定框时至少有一根手指放在其位置上则判定为Perfect,否则判定为Miss

### Flick

可用判定:

- Perfect
- Miss

判定方法:在该note出现时首先点击头部的黑色方框,再向其箭头所指向的方向沿判定框滑动,滑到了则判定为Perfect,否则为Miss

### FullFlick

可用判定:

- Perfect
- Miss

判定方法:在该note出现时向任意方向沿判定框滑动,滑到了则判定为Perfect,否则为Miss

### Point

可用判定:

- Perfect
- Miss

判定方法:在围绕该note本体四周出现的角与本体相接触时点击本体,点到了则判定为Perfect,否则为Miss(我应该不是在玩osu吧?)

## 等级评定

Blophy Nova共有下面几种等级:

| 评级     | 所需准度                  |
|--------|-----------------------|
| Blo(β) | 100%                  |
| S+     | 98%或以上                |
| S      | 95%-98%(包含95%,不包含98%) |
| A      | 90%-95(包含90%,不包含95%)  |
| B      | 80%-90%(包含80%,不包含90%) |
| C      | 70%-80%(包含70%,不包含80%) |
| F      | 70以下(不包含70%)          |