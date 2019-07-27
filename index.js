const testVar = {}

function testFunc() {
  return "hi"
}


const superbowlWin = (arr) => 
{
  let answer = undefined;
  arr.find(function(e)
  {
    if (e.result == "W")
    {
      console.log(e.year);
      answer = e.year;
    }
  })

  return answer;
}

superbowlWin();