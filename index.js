// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }


  function superbowlWin(data){
    console.log(data)
    let winner = data.find(obj => obj.result === "W")
    if (winner)
      return winner.year
    else {return undefined}
  }
