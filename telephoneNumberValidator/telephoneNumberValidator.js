// referenced the regex to ancheetah in this forum https://forum.freecodecamp.org/t/js-phone-validator-a-better-solution-imo/377825

function telephoneCheck(str) {
    let [regex1, regex2] = [/^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/, /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/];
    return regex1.test(str)? true : regex2.test(str) ? true : false
   }
   
console.log(telephoneCheck("555-555-5555"));