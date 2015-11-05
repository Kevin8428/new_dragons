/*

Bonus Practice: Javascript Functions


// Question 1
// write a function square(x) that returns the argument passed multiplied by itself
// then write the functions cube(x), x times x times x,
// and quad(x), x times x times x times x, using the function square(x)
// verify that square(2) === 4, cube(3) === 27, and that quad(4) === 64

/* your code starts here */

var square=function(x){
  return x*x;
};//end of SQUARE function

var cube=function(x){
  return x*x*x;
};//end of CUBE function

var quad=function(x){
  return x*x*x*x;
};// end of QUAD function

/* your code ends here */

//Question 1 check
if (square(2) !== 4 || cube(3) !== 27 || quad(4) !== 256) {
  console.log("check question 1");
}


// Question 2
// write a function sum(numbers, twiceOrHalf).
// It should expect an array of numbers as the first argument
// and an optional flag, twiceOrHalf, as the second argument.
// If the flag is undefined, sum should return the total of the numbers in the array
// If the flag is truthy, it should return twice that sum
// If the flag is falsy but not undefined, it should return half that sum

/* your code starts here */

var sum=function(numbers,twiceOrHalf){
  var ans=0;
  if(typeof(twiceOrHalf)=='undefined'){
    for(number in numbers){
      ans+=numbers[number];
    }//end of for loop
    //console.log(ans);
    return ans;
  }// end of if statement loop

  else if(twiceOrHalf==true){
    for(number in numbers){
      ans+=numbers[number];
    }// end of FOR loop
    ans*=2;
    //console.log(ans);
    return ans;
  }// end of ELSE IF

  else if(twiceOrHalf==false){
    for(number in numbers){
      ans+=numbers[number];
    }// end of FOR loop
    ans/=2
    //console.log(ans);
    return ans;
  }//end of the ELSE IF loop
}//end of the SUM function

/* your code ends here */

//Question 2 check
var nums = [2, 4, 6];
if (sum(nums) !== 12 || sum(nums, false) !== 6 || sum(nums, !undefined) !== 24) {
  console.log("check question 2");
}


// Question 3
// write a function, max() that loops through zero or more arguments
// and returns the largest number in that list

/* your code starts here */

var max =function(){
  var largest=arguments[0]; // using arguments object to initialize
  //console.log(arguments.length)
  for(index in arguments){
    //console.log(arguments[index],typeof arguments[index]);
    if(largest < arguments[index]==true){
      largest=arguments[index];//setting largest equl to argument[index] if larger.
    }//end of IF block
  }//end of FOR block
  return largest;
}//end of MAX function

/* your code ends here */

//Question 3 check
if (max() !== undefined || max(15) !== 15 ||
    max(-1, 0) !== 0 || max(-1, -7, -4) !== -1) {
  console.log("check question 3");
}
