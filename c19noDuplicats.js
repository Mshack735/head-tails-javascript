function noDuplicates(phrase){
  words=phrase.split(' ')
  
  for (x=0;x<words.length;x++){
    for (y=0;y<words.length;y++){
      if (x!=y){
        if (words[x]==words[y]){
        return 'no'
        }
      else {continue}
      }
    }
  }return 'yes'
}
var output = noDuplicates("IN THE IN RAIN AND SNOW");
console.log(output);
