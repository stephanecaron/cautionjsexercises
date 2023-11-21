// first approach, dumb

// const palindromes = function (string) {
//     stringArray = string.replace(' ', '').split('')
//     start_pointer = 0;
//     end_pointer = stringArray.length-1;
//     while (start_pointer<end_pointer) {
//         if (stringArray[start_pointer] != stringArray[end_pointer]) {
//             return false
//         }
//         start_pointer++
//         end_pointer--
//     }
//     return true
// };

const palindromes = function (string) {
    let fixedString = string.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    console.log(fixedString)
    let reversedString = fixedString.split('').reverse().join('')
    if (reversedString == fixedString) {
        return true
    }
    return false
}

console.log(palindromes('A car, a man, a maraca.'))

// Do not edit below this line
module.exports = palindromes;