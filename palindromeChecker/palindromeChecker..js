function palindrome(str) {

    // first obtain the array form of the string, discarding all non alphanumeric characters,
    // also making it lowercase for checking
    const origArr = str.toLowerCase().replace(/[^0-9a-z]/gi, '').split("")

    // obtain the reversed form of the original array, 
    // note we used slice so that we create a copy and not mutate the original array
    const reverseArr = origArr.slice().reverse() 
    
    // for all values of original array, compare it with the corresponding value in the reversed array
    // using 'map' method this will return an array of boolean values,
    // then use 'every' method to check if all boolean values in the array is true,
    // if all is true then it is a palindrome and returns true, 
    // else if at least one is false, it'll return false and thus string is not a palindrome
    return origArr.map((val, index) => val == reverseArr[index]).every(val => val === true)
  }
  
  console.log(palindrome("eye"))
  console.log(palindrome("not a palindrome"));