function solution11(a){ // Task #1 using .indexOf
  for (var i = 1; i <= a.length; i++) {
  	if (a.indexOf(i) < 0) {
      break;
  	}
  }
  return i;
}

function solution12(a){ // Task #1 without .indexOf
  var j = 1, 
      i = 0,
      tempArr = [];
  for(i = 0; i < a.length; i++){
    tempArr[a[i]]=1;
  }
  i = 1;
  while(i <= a.length){
    if (tempArr[i] == undefined){
      break;
    }
    i++;
  }
  return i;
}

function solution2(s){
  var bracketStack = [];
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '[': 
      case '{': 
      case '(': {
        bracketStack.push(s[i]);
        break;
      }
      case ']': {
        if ('[' != bracketStack.pop()) {
          return false;
        }
        break;
      }
      case '}': {
        if ('{' != bracketStack.pop()) {
          return false;
        }
        break;
      }
      case ')': {
        if ('(' != bracketStack.pop()) {
          return false;
        }
        break;
      }
      default:{
        break;
      }
    }  
  }
  return true;
}

function solution3(a, f){
  var arg, 
      func, 
      functionBody, 
      result = [],
      patternArg = /(\(?)([a-z,\,]*)(\)?)(?=\=>)/i,
      patternExp = /(\=>)(.+)/i;
  arg = patternArg.exec(f);
  func = patternExp.exec(f);
  functionBody = 'return ' + func[2];
  var functionToApply = new Function(arg[2], functionBody);
  for (var i = 0; i < a.length; i++){
    result[i] = functionToApply(a[i],i,a);
  }
  return result;
}
var mas = [0,4,6,2,3,5];
alert('The minimal positive integer not present in array: ['+mas+'] is '+solution11(mas));
alert('The minimal positive integer not present in array: ['+mas+'] is '+solution12(mas));
var str = '({){';
alert('String '+str+' is bracket balanced: '+solution2(str));
var mas2 = [1,2,7],
    arrowFunc = '(a)=>a+2';
alert('The arrow function '+arrowFunc+' on array ['+mas2+'] returns ['+solution3(mas2,arrowFunc)+']');