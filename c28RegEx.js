function countVowels(str){
  check=/[aeiou]/gi
  test=str.match(check)
  return test.length
}

function animalCount(str){
  check=/\bdog\b|\bcat\b|\bchicken\b/gi
  test=check.test(str)
  return test
}




str='oetisau'
console.log(countVowels(str))

str='dog tac chicken doge cow'
console.log(animalCount(str))
