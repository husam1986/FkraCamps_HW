let fs = require("fs");
let Flo = fs.readFileSync('./flower.txt')

lines = Flo.toString().split('\n')


/// Count the number of rows.
let RowCount = 0
lines.forEach(function (line) {RowCount= RowCount+1; })
console.log("\nNumber of rows is : " + RowCount)

//List the flower name that start with letter 'S'.
console.log("\n\nList the flower name that start with letter 'S'. ")

let not_s_count=0
lines.forEach(function (line) {if(line.match(/\b(\w)/g) == 'S') 
console.log(line);
else
not_s_count +=1; })

//Count the number of Flow that not start with letter 'S'.
console.log("\n\nCount the number of Flow that not start with letter 'S' : " + not_s_count)

//  List the flower start with first letter of your name if your name start with 'S' use second letter.
console.log("\n\nList the flower name that start with my first letter 'H'. ")

lines.forEach(function (line) {if(line.match(/\b(\w)/g) == 'H') 
console.log(line); })


// 5. List all the flower the name length is 5.
console.log("\n\nList all the flower the name length is 5 : ")

lines.forEach(function (line) {if(line.length == 5)
console.log(line); })
