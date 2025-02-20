let myarry = []
console.log(myarry);
myarry.push('apple','banana','cherry')
console.log(myarry);
myarry.pop()
console.log(myarry);
myarry.unshift('mango')
console.log(myarry);
myarry.shift()
console.log(myarry);
myarry.sort()
console.log(myarry);
myarry.reverse()
console.log(myarry);
console.log(myarry.indexOf('banana'));
let cherin = myarry.indexOf('cherry')
myarry[cherin]= 'grapes'
console.log(myarry);

let numberarr = [1,2,3,4,5,6,7,8,9,10]
numberarr.splice(4,3)
console.log(numberarr);
