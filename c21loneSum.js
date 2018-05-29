function loneSum(a,b,c){
  numbers=0
  list=[a,b,c]
  
    var yesno=0

    for (x=0;x<list.length;x++){
      results=[]
      for (y=0;y<list.length;y++){
        if (x!=y){
          if (list[x]==list[y]){
            results.push('yes')
          }else{results.push('no')}
        }
      }

    if (results[0]=='no' && results[1]=='no'){
      yesno=0}
    else{
      yesno=1}
    if (yesno===0){numbers+=list[x]}
  }
  return numbers
}
var output = loneSum(3,2,3);
console.log(output)
