// referenced this to the freecodecamp solution but using hash map and referencing Object 

function convertToRoman(num) {

    let romanNumeral = ""
    
    const hash = {
      'M' : 1000,
      'CM' : 900,
      'D' : 500,
      'CD' : 400,
      'C' : 100,
      'XC' : 90,
      'L' : 50,
      'XL' : 40,
      'X' : 10,
      'IX' : 9,
      'V' : 5,
      'IV' : 4,
      'I' : 1
    }

    // each key-values of the hash will be tested
    // add the key to our collector variable as long as its value is less than the original number
    // we subtract that value to the original number everytime we add keys to the variable
    // repeat this until all key-values are tested and number is 0
    
    for (let i = 0; i <= Object.keys(hash).length; i++ ){
      while (Object.values(hash)[i] <= num) {
        romanNumeral += Object.keys(hash)[i];
        num -= Object.values(hash)[i];
      }
    }
    
    return romanNumeral
    
}
    
console.log(convertToRoman(36));