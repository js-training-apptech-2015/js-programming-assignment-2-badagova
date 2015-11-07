function solution11(a){ // Task #1 using .indexOf
  for (var i = 1; i <= a.length; i++) {
  	if (a.indexOf(i) < 0) {
      break;
  	}
  }
  return i;
}

function solution12(a){ // Task #1 without .indexOf
  var j = 1, i = 0;
  while(i <= a.length){
    if (a[i]===j) {
      j++;
      i=-1;
    };
    i++;
  }
  return j;
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
      functionToApply,
      functionBody, 
      result = [],
      patternArg = /(\(?)(\w*)(\)?)(?=\=>)/,
      patternExp = /(\=>)(.+$)/;
  arg = patternArg.exec(f);
  func = patternExp.exec(f);
  functionBody = 'return ' + func[2];
  if (arg[2] == '') {
    functionToApply = new Function(functionBody);  
  } else {
    var functionToApply = new Function(arg[2], functionBody);
  }
  for (var i = 0; i < a.length; i++){
    result[i] = functionToApply(a[i]);
  }
  return result;
}
var mas = [1,0,4.6,6,2,3,-7,9,8,5,11];
alert(solution11(mas));
alert(solution12(mas));
alert(solution2('({){'));
alert(solution3([1,2],'(a)=>a*2'));