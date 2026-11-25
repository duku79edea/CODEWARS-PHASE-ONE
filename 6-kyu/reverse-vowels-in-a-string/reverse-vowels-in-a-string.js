function reverseVowels(str) {
  let vowels = "";
  for(let i = 0; i < str.length; i++){
    const smallVow = str[i] === "a" || str[i] === "e" || str[i] === "i" ||                         str[i] === "o" || str[i] === "u";
    const capitalVow = str[i] === "A" || str[i] === "E" || str[i] === "I"                         || str[i] === "O" || str[i] === "U";
    if(smallVow || capitalVow){
      vowels += str[i];
      str = str.substring(0, i) + "~" + str.substring(i + 1);
    }
  }
  
  let i = str.length - 1;
  let j = 0;
  while(i >= 0){
    if(str[i] === "~"){
      str = str.substring(0, i) + vowels[j++] + str.substring(i + 1)
    }
    i--
  }
  return str;
}