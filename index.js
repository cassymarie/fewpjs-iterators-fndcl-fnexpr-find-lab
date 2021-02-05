const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let yearWon = array.find(function(win){
    if (win['result'] === "W"){return win['year'] }})

  if (yearWon){return yearWon['year']}}