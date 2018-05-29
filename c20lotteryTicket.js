function greenTicket(a, b, c) {
  list=[a,b,c]
  results=[]
  var yes=0
  for (x=0;x<list.length;x++){
    for (y=0;y<list.length;y++){
      if (x!=y){
        if (list[x]==list[y]){
          results.push('yes')
        }else{results.push('no')}
      }
    }
  }
  for (x=0;x<results.length;x++){
  if (results[x]==='yes'){
    yes+=1}
  }
  if (yes===results.length){
    return 20
  }else;
  if(yes===0){
      return 0}
  else{return 10}
}
var output = greenTicket(2,1,1);
console.log(output);
