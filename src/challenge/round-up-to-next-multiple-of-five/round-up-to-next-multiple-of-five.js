export const roundUpToFive = numberToBeChecked=> {
  if (numberToBeChecked< 0) return numberToBeChecked % 5 === 0 ? numberToBeChecked: numberToBeChecked- (numberToBeChecked % 5)

  return numberToBeChecked % 5 === 0 ? numberToBeChecked: numberToBeChecked+ (5 - (numberToBeChecked % 5))
}
or 
const roundToNext5 = n => Math.ceil(n / 5) * 5;
or 

function roundUpToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}

or 
function roundupTo(n){
  if(n % 5 == 0) return n
  n++
  return roundToNext5(n)
}
or const roundToupNext5 = R = n => n % 5 ? R(++n) : n;