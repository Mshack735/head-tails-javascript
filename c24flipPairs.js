function flipPairs(input){
  string=input.split()
  for (x=0;x<input.length;x++){
    if (x%2===0){
      string[x] = input[x+1]
      string[x+1] = input[x]
    }
  }
  return string.join('')
}
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
