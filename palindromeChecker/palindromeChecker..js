function palindrome(str) {
    const origArr = str.toLowerCase().replace(/[^0-9a-z]/gi, '').split("")
    const reverseArr = origArr.slice().reverse()  
    return origArr.map((val, index) => val == reverseArr[index]).every(val => val === true)
  }
  
  console.log(palindrome("eye"))
  console.log(palindrome("not a palindrome"));