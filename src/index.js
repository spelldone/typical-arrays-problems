
exports.min = function min (array) {
  if(min.arguments.length==0||array.length==0)
  return 0;
  let result=0
  let c=0
  for(i=0;i<array.length;i++){
    result=array[i]
    if(result<c)
    c=result
  }
  return c;
}

exports.max = function max (array) {
  if(max.arguments.length==0||array.length==0)
  return 0;
  let result
  let c=0
  for(k=0;k<array.length;k++){
    result=array[k]
    if(result>c)
    c=result
  }
  return c;
}

exports.avg = function avg (array) {
  if(avg.arguments.length==0||array.length==0)
  return 0;
  let sum=0;
  for(i=0;i<array.length;i++){
    sum+=array[i]
  }

  return sum/array.length;
}
