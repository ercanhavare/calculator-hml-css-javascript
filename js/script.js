var numberAdd = false;
var numberBefore=0;
var operator= "=";
var negativeValue = false;

// clear all value
function clearAllValue(){
document.getElementById('resultView').value='';
numberBefore=0;
numberAdd=false;
operator="=";
}

// delete value one by one
function deleteValue(){
  var x = document.getElementById("resultView").value;
  var howMany=0;
// take have many value do you have
  for (var i = 0; i < x.length; i++) {
    howMany++;
  }

// create array and add value in new array , do not add last value
  var item = [howMany-1];
  for (var j = 0; j < howMany-1; j++) {
    item[j]=x[j];
  }

// clear all value
  clearAllValue();
  for (var k = 0; k < item.length; k++) {
    if(numberAdd){
      document.getElementById("resultView").value+= item[k];
    }else{
      document.getElementById("resultView").value=item[k];
      numberAdd=true;
    }
  }
}

// add value
function valueAdd(number){
  if(numberAdd){
    document.getElementById("resultView").value+= number;
  }else{
    document.getElementById("resultView").value=number;
    numberAdd=true;
  }
}


// calculate value
function calculate(newOperation){
  // valueAdd '^' operation calculate does not right
  var newNumber = eval(document.getElementById("resultView").value);
  document.getElementById("resultView").value=newNumber;
  numberAdd=true;
}

// positive or negative value
function positiveOrNegative(){
  if(negativeValue){
    // if value is negative make positive
    absoluteNum();
    negativeValue=false;
  }else{
    // if value is positive make negative
    var x = document.getElementById('resultView').value;
    document.getElementById('resultView').value=-x;
    negativeValue=true;
  }
}

function squareRootOfNumber(){
  var x = document.getElementById('resultView').value;
  document.getElementById('resultView').value=Math.sqrt(x);
}

function numPow(){
  var x = document.getElementById('resultView').value;
  document.getElementById('resultView').value=Math.pow(x,2);
}

function absoluteNum(){
  var x = document.getElementById('resultView').value;
  document.getElementById('resultView').value=Math.abs(x);
}

function anyNumPow(){
  //does not true calculate, something wrong
  var x = document.getElementById('resultView').value;
  alert(x);
}

function calculateFactorial(){
  var x = document.getElementById('resultView').value;
  var y=1;
  if(x==0){
    document.getElementById('resultView').value=1;
  }else{
    for (var i = x; i >=1; i--) {
      y*=i;
    }
    document.getElementById('resultView').value=y;
  }
}
