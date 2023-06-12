// June 12, 2023
// CodeWars: The Vowel Code (6 kyu challenge)
// Description: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern. Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown below.

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

function encode(string) {

  var vowels = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5"
  }
  
  var encodedString = "";
  
  for(let i = 0; i < string.length; i++){
    
    let currentLetter = string[i];
    let encodeChar = vowels[currentLetter] || currentLetter;
    
    encodedString += encodeChar;
 
    console.log(encodedString);
    
  }
  
  return encodedString;
}

encode('hello')


function decode(string) {
  var counterVowels = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
  }
  
  var decodeString = "";
  
  for(let i = 0; i < string.length; i++){
    let currentDecode = string[i];
    let passedDecode = counterVowels[currentDecode] || currentDecode;
    
    decodeString += passedDecode;
    
    console.log(decodeString);
    
  }
  
  return decodeString;

}

decode('h2ll4')

// ----- Best Practices ----- //

// function encode(string) {
//   let output = "";
//   for(let i = 0; i < string.length; i++) {
//     switch(string[i]) {
//       case 'a': output+= "1"
//         break;
//       case 'e': output+= "2"
//         break;
//       case 'i': output+= "3"
//         break;
//       case 'o': output+= "4"
//         break;
//       case 'u': output+= "5"
//         break;
//       default: output += string[i];
//     }
//   }
//   return output;
// }

// function decode(string) {
//   let output = "";
//   for(let i = 0; i < string.length; i++) {
//     switch(string[i]) {
//       case '1': output+= "a"
//         break;
//       case '2': output+= "e"
//         break;
//       case '3': output+= "i"
//         break;
//       case '4': output+= "o"
//         break;
//       case '5': output+= "u"
//         break;
//       default: output += string[i];
//     }
//   }
//   return output;
// }


// function encode(string) {
//   let newStr = string.split('')
//   const alpha = {
//     'a': 1,
//     'e': 2,
//     'i': 3,
//     'o': 4,
//     'u': 5
//   };
//   for(let i = 0; i < newStr.length; i++){
//     for(const key in alpha){
//       if(newStr[i] === key){
//       newStr[i] = alpha[key]
//     }
//     }
//   }
// return newStr.join('');
// }

// function decode(string) {
//   let newStr = string.split('')
//  const alpha = {
//     'a': 1,
//     'e': 2,
//     'i': 3,
//     'o': 4,
//     'u': 5
//   };
//     for(let i = 0; i < newStr.length; i++){
//     for(const key in alpha){
//       if(parseInt(newStr[i]) === alpha[key] ){
//       newStr[i] = key
//     }
//     }
//   }
// return newStr.join('');
// }

// ----- Best Practices ----- //