function meeting(x, need){
  if (need == 0) {
    return 'Game On'
  }
  var res = [], total = 0
  for (let i = 0; i < x.length; i++) {
    let chair = x[i][1] - x[i][0].length
    if (Math.sign(chair) == -1) { 
      chair = 0
    }
    if (chair <= need-total) { 
      res.push(chair)
    }
    else { 
      res.push(need-total)
    }
    total += chair    
    if (total >= need) {
      return res 
    }
  }
  return 'Not enough!'
}
