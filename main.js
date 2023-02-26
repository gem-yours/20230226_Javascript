//問題①
function leapYear(year){
  if(year%4==0 && year%100!==0){
    return "うるう年です";
  };
  if(year%400==0){
    return "うるう年です";
  };
};

console.log(leapYear(2001));

//問題②
const array = [2, 4, 7, 5, 4, 3, 8];

function deleteArray(){
  return array.filter(function(value,index){
    return index===array.indexOf(value);
  });
};

console.log(deleteArray(array));