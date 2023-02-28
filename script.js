function telephoneCheck(str) {
  return true;
}

telephoneCheck("555-555-5555");


function isValidCountryCodeAndSize(str) {
  let newStr = str.replaceAll('-', '')
  newStr = newStr.replaceAll(' ', '')
  if (newStr.length === 11) {
  if (newStr.charAt(0) != '1'||newStr.charAt(1)!='('||typeof newStr.chartAt(1)== Number ) {
  return false;
}
    else {
      return true;
    }
  }
  else if (newStr.length > 11 || newStr.length < 10) {
    return false;
  }
  else {
    return true;
  }
}

function parenthesesChecker(str) {
  let newStr = str.replaceAll('-', '');
  newStr = newStr.replaceAll(' ', '');
  if (newStr.charAt(0) === '(' && newStr.charAt(4) === ')') {
    return true;
  }
  else if (newStr.charAt(1) === '(' && newStr.charAt(5) == ')') {
    return true;
  }
  else {
    return false
  }
}
function verifySpacesAndNumbers(str) {
  let newStr = str.replaceAll('-', '');
  let phoneSize = newStr.length;
  for (let i = 0; i < phoneSize; i++) {
    if (isNaN(newStr.charAt(i))) {
      return false;
    }
  }
  let spacePattern = "   ";
  let spaceIndex = newStr.indexOf(spacePattern);
  
  if (spaceIndex !== 5 && spaceIndex !== 6) {
    return false;
  }

  return true;
}
