
let Shuffle = () =>
  [..."A23456789JQK", 10]
    .reduce((arr, e) => arr.concat([`红心${e}`, `黑桃${e}`, `梅花${e}`, `方块${e}`]), [
      "大🃏",
      "小🃏",
    ])
    .sort(() => Math.floor(Math.random() * 3 - Math.random() * 3));
console.log(Shuffle());