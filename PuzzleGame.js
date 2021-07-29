let myWords = ["EGG", "Butter", "Jam", "Oats", "Sugar", "Bread", "Rusk"];
$(document).ready(() => {
  arrangeGame();
});

function arrangeGame() {
  $.each(myWords, (key, item) => {
    $(".hint").append("<p>" + item + "</p>");
  });
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 13; j++) {
      $(".letters").append(
        "<div class=individual data-row=" + i + " data-column=" + j + "></div>"
      );
    }
  }
  placeCorrectLetters(myWords);
}
function placeCorrectLetters(myArr) {
  let positions = ["row", "column"];
  for (let i = 0; i < myArr.length; i++) {
    let orientation = positions[Math.floor(Math.random() * positions.length)];
    let start = Math.floor(Math.random() * $(".individual").length);
    let myRow = $(".individual:eq(" + start + ")").data("row");
    let myColumn = $(".individual:eq(" + start + ")").data("column");
    let newStart = 0;
    if (orientation === "row") {
      if (myColumn * 1 + myArr[i].length <= 12) {
        newStart = start;
      } else {
        let newColumn = 12 - myArr[i].length;
        newStart = $(
          ".individual[data-row=" + myRow + "][data-column=" + newColumn + "]"
        ).index();
      }
    } else if (orientation === "column") {
      if (myRow * 1 + myArr[i].length <= 12) {
        newStart = start;
      } else {
        let newRow = 12 - myArr[i].length;
        newStart = $(
          ".individual[data-row=" + newRow + "][data-column=" + newColumn + "]"
        ).index();
      }
    }
  }
}
