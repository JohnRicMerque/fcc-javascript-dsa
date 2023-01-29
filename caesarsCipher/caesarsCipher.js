function rot13(str) {

    // transform string to array
    const arr = str.toUpperCase().split('')
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
    function getEquivalentChar(letter){
      // if letter is in the array, which means it is alphanumeric, 
      // check if its index after subtracting thirteen is negative, or positive
      if (alphabet.indexOf(letter) > -1) {
        if ((alphabet.indexOf(letter) - 13) >= 0) {
          // if positive return character 13 letters before it
          return alphabet[(alphabet.indexOf(letter) - 13)]
        } else {
          // since bracket notation does not work with negative values in javascript
          // get length first then add the negative number to get positive equivalent index
          return alphabet[alphabet.length + (alphabet.indexOf(letter) - 13)]
        }
      // else if not alphanumeric just return the character
      } else return letter 
    }
    
    // use function to all elements then join the resulting array
    const cipher = arr.map(letter => getEquivalentChar(letter)).join('') 
  
    return cipher
  }
  
  console.log(rot13("SERR PBQR PNZC"));