const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let year;
  array.find(function(i) {
    if (i.result === "W" ) {
      year = i.year;
    } else {
      return undefined
    }
  })
  return year;
}