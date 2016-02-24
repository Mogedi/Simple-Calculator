/*document.getElementById("textbox").value = "Nothing yet";*/
var arr = [];
var superarr = [];
var operations = [];
var final = 0;

function zero() {
  var num = 0;
  arr.push("0");
  document.getElementById("textbox").value += num;
}
function one() {
  var num = 1;
  arr.push("1");
  document.getElementById("textbox").value += num;
}
function two() {
  var num = 2;
  arr.push("2");
  document.getElementById("textbox").value += num;
}
function three() {
  var num = 3;
  arr.push("3");
  document.getElementById("textbox").value += num;
}
function four() {
  var num = 4;
  arr.push("4");
  document.getElementById("textbox").value += num;
}
function five() {
  var num = 5;
  arr.push("5");
  document.getElementById("textbox").value += num;
}
function six() {
  var num = 6;
  arr.push("6");
  document.getElementById("textbox").value += num;
}
function seven() {
  var num = 7;
  arr.push("7");
  document.getElementById("textbox").value += num;
}
function eight() {
  var num = 8;
  arr.push("8");
  document.getElementById("textbox").value += num;
}
function nine() {
  var num = 9;
  arr.push("9");
  document.getElementById("textbox").value += num;
}
function decimal() {
  var num = ".";
  arr.push(".");
  document.getElementById("textbox").value += num;
}

function plus() {
  superarr = superarr.concat([arr.join("")]);
  superarr.push("plus");
  arr = [];
  document.getElementById("textbox").value = "";
}
function subtract() {
  superarr = superarr.concat([arr.join("")]);
  superarr.push("subtract");
  arr = [];
  document.getElementById("textbox").value = "";
}
function multiply() {
  superarr = superarr.concat([arr.join("")]);
  superarr.push("multiply");
  arr = [];
  document.getElementById("textbox").value = "";
}
function division() {
  superarr = superarr.concat([arr.join("")]);
  superarr.push("division");
  arr = [];
  document.getElementById("textbox").value = "";
}
function mod() {
  superarr = superarr.concat([arr.join("")]);
  superarr.push("mod");
  arr = [];
  document.getElementById("textbox").value = "";
}
function equal() {
  superarr = superarr.concat([arr.join("")]);
  operations = superarr;
  arr = [];
  superarr = [];
  operations = operations.filter(Boolean);
  try {
    valid();
    repeats = (Math.floor(operations.length / 2) + 1);
    engine();
    document.getElementById("textbox").value = final;
  } catch(e) {
    console.log(e);
  }
}
function ce() {
  document.getElementById("textbox").value = "";
  final = "";
  arr=[];
  operations=[];
  superarr = [];
}
function valid() {  
  if (operations[0] == "plus" || operations[0] == "subtract" || operations[0] == "multiply" || operations[0] == "division" || operations[0] == "mod" || operations[operations.length - 1] == "plus" || operations[operations.length - 1] == "subtract" || operations[operations.length - 1] == "multiply" || operations[operations.length - 1] == "division" || operations[operations.length - 1] == "mod") {
        document.getElementById("textbox").value = "Error";
        throw new Error("Something went badly wrong!");
  }
  for (var i = 0; i < operations.length - 1; i++) {
    if (operations[i] == "plus" || operations[i] == "subtract" || operations[i] == "multiply" || operations[i] == "division" || operations[i] == "mod") {
      if (operations[i + 1] == "plus" || operations[i + 1] == "subtract" || operations[i + 1] == "multiply" || operations[i +1] == "division" || operations[i + 1] == "mod") {
        document.getElementById("textbox").value = "Error";
        throw new Error("Something went badly wrong!");      
      }
    }
  }
}

function engine() {
  for (var j = 0; j < repeats; j++) {
    if (operations.length === 1) {
      final = operations[0];
      return final;
    }
    if (operations[1] == "plus") {
      var num1 = Number(operations[0]);
      var num2 = Number(operations[2]);
      var total = num1 + num2;
      operations.shift();
      operations.shift();
      operations.shift();
      operations.unshift(total);      
    }
    if (operations[1] == "subtract") {
      var num1 = Number(operations[0]);
      var num2 = Number(operations[2]);
      var total = num1 - num2;
      operations.shift();
      operations.shift();
      operations.shift();
      operations.unshift(total);      
    }
    if (operations[1] == "multiply") {
      var num1 = Number(operations[0]);
      var num2 = Number(operations[2]);
      var total = num1 * num2;
      operations.shift();
      operations.shift();
      operations.shift();
      operations.unshift(total);      
    }
    if (operations[1] == "division") {
      var num1 = Number(operations[0]);
      var num2 = Number(operations[2]);
      var total = num1 / num2;
      operations.shift();
      operations.shift();
      operations.shift();
      operations.unshift(total);      
    }
    if (operations[1] == "mod") {
      var num1 = Number(operations[0]);
      var num2 = Number(operations[2]);
      var total = num1 % num2;
      operations.shift();
      operations.shift();
      operations.shift();
      operations.unshift(total);      
    }
  }
}


