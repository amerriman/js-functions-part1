//Example
function test(str) {
  return "test" + str
}

console.log(test("ing"))
//end Example

//1
function sum(x, y){
  return x + y;
}
console.log(sum(1,2))


//2
function isEqual(a, b){
  if (a === b){
   return "true"}
   else {
    return "false"}
}
console.log(isEqual(2,2));
console.log(isEqual(2,3));

//3
function discountPercentage(amount, discount){
  discount = discount/100
  var totalDiscount = amount * discount
  if (discount > 100 || discount < 0) {
    return "Invalid discount amount."}
    else {
      return "You get $"+totalDiscount +" off your purchase!"}
}
console.log(discountPercentage(20, 25));

//4
function stringCapitalize(str){
  //find the spaces, for the next character, upper case it. split it, (make a variable to hold the split) then for each word in the split, use the character at to make that uppercase.
  //slice to an array

  //need to capitalize the first character of each word in the array

  //need to join the array to a string again.

  //right now this just capitalizes all the letters.

      var string2 =string.split()
    return string2[0].toUpperCase()}
  console.log(stringCapitalize("hi my name is"));


//5
function evenNumbers(number) {
  if (number > 100 || number < 0) {
  console.log("Choose a number between 1-100");
}
else {
    for (var i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(i);}
  }
}
}
evenNumbers(18);

//6
function isDivisible(x, y){
  if (x % y === 0 ){
    return "true"}
    else {
      return "false"}
  }
console.log(isDivisible(6,9));

//7
//soooo messy.  Sorry.

function oddNumbers(number){
if (number > 100 || number < 0) {
  console.log("Choose a number between 1-100");
 }
 else if (number < 40){
   for (var i = 0; i < 40; i++) {
     if (i % 2 != 0){
       console.log(i);}
 }
}
else {
  for (var i = 40; i<=number; i++){
    if (i%2 !=0) {
      console.log(i);
    }
  }
}
}
oddNumbers(55);
