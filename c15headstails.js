var totalflips = prompt("How many times do you want to flip a coin?")
console.log('Results:')
console.log('=================================')
var headtotal=0
var tailtotal=0
for (i = 1; i <= totalflips; i++) {
   var num = Math.floor(Math.random() * 20)
   if (num>=11){headtotal+=1}
   else {tailtotal+=1}
}
console.log('Heads: '+headtotal)
console.log('Tails: '+tailtotal)
console.log('=================================')
