
function repeatStr(n, s) {
    //console.log(s.repeat(n));
    }
    
    repeatStr(10, "salut");


    function boolToWord( bool ){
     return bool == true ? `yes` : `No`}

//console.log(boolToWord(true))

var summation = function (num) {
    return num = (num * num) * 2 
  }

 // console.log(summation(10))

  function bmi(weight, height) {
    const result = weight / (height * height);
    
    if (result <= 18.5){
      return `Underweight`
    } else if (result < 25) {
      return `Normal`
    } else if (result < 30) {
      return `Overweight` }
    else  { 
      return `Obese`
  }

}  

const tab = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

function findNeedle(haystack) {
    const position = haystack.indexof("")
    const findWord = haystack.includes("")
     
    if (haystack === true){
      return`found the ${haystack} at position ${position}`
    } else {
    }}

////////////////////////////
function rentalCarCost(d) {
  let result = d * 40


  if ( d >= 3 ) {
  result = result - 20
   }
  else if (d >= 7) {
    result = result - 50
  }
return result
 }

console.log(rentalCarCost(10))


function fakeBin(x){
  if (x < 5) {
    x = 0
  } else if (x >= 5) {
    x = 1
  }
    return x++
  }
  