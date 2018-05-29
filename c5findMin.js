function findMinLengthOfThreeWords(word1, word2, word3) {
  // your code here
  words=[word1,word2,word3]
  for (x=0;x<3;x++){
    word=words[x].length
    if (x===0){min=word}
    if (word<min){
      min=word
    }
  } return min
}
var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1
