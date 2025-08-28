




function trimLeft(aString)
{
  
  
  
  var length=aString.length;
  if (length == 0) return aString;

  var left=0;
  while ( left < length && aString.charAt(left) == ' ') left++;
  return aString.substring(left);
}

function trimRight(aString)
{
  
  
  
  var length=aString.length;
  if (length == 0) return aString;

  var right= aString.length-1;
  while ( right >= 0 && aString.charAt(right) == ' ') right--;
  return aString.substring(0, right+1);
}

function trim(aString)
{
  
  
  
  var length=aString.length;
  if (length == 0) return aString;

  return trimLeft(trimRight(aString));
}

function isEmpty(aString)
{
  
  return trimLeft(aString) == "";
}

function isDigit(aChar)
{
  
  
  return aChar >= '0' && aChar <= '9';
}

function isDigits(aString)
{
  
  var i=0;
  var length = aString.length;
  if (length == 0) return false;
  while ( i<length && isDigit(aString.charAt(i)) ) i++;
  return i == length;
}

function isInteger(aString)
{
  
  

  var strTrimmed = trim(aString);
  if (strTrimmed.length == 0) return false;
  
  var firstChar = strTrimmed.charAt(0);
  if ( firstChar == '+' || firstChar == '-' ) strTrimmed = strTrimmed.substring(1);
  return isDigits(strTrimmed);
}

function isCardNo(aString)
{

  
  
  if ( ! isDigits(aString) ) return false;
  
  var checksum = 0;
  var last = aString.length - 1;

  for (i=last-1; i >= 0; i-=2)
  {
    value = Number(aString.charAt(i)) * 2;
    if ( value > 9 ) value -= 9;
    checksum += value;
  }
  
  for (i=last; i >= 0; i-=2)
  {    
    checksum += Number(aString.charAt(i));
  }
  return (checksum % 10) == 0;
}

function isNumber(aString)
{
  
  
  
  var strTrimmed = trim(aString);
  if (strTrimmed.length == 0) return false;
  
  return ! isNaN(strTrimmed);
}


function toInteger(aString)
{
  
  
  
  return parseInt(aString);
}

function toFloat(aString)
{
  
  
  
  return parseFloat(aString);
}

function isEMail(aString)
{
  var regex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$", "i");
  return regex.test(aString);
  
}

