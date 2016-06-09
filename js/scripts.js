
$(document).ready(function() {
  $("#roman").submit(function(event) {
    var number = $("#number").val();
    var romanNum = multiDigits(number);
      $("#output").text(romanNum);

    event.preventDefault();
  });
});

function multiDigits(num){
  var digits = num.split("").reverse();

  return roman(digits[2], "C", "D", "M")+
  roman(digits[1], "X", "L", "C")+
  roman(digits[0], "I", "V", "X");
}

function roman(num, ones, fives, tens){
  num = parseInt(num);
  var result=[];
  if(num > 8){
    result = notInRow(result, ones, tens);
  }
  else{
    if(num >= 5){
      result.push(fives);
      toEnd(result,num-5, ones);
    }
    else if(num > 3){
      result = notInRow(result, ones, fives);
    }
    else{
      toEnd(result,num, ones);
    }
  }
  return result.join("");
}

function notInRow(num, start, end){
  num.unshift(start);
  num.push(end);//console.log(num)
  return num;
}

function toEnd(roman,num, end){
  for(var i=0; i<num; i++){
    roman.push(end);
  }
  return roman;
}
