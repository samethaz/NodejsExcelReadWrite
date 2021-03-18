const fs = require('fs');
var data = fs.readFileSync('Data.js', 'utf-8');
var xlsx = require('xlsx');
let file = xlsx.readFile("./OrnekDosya.xlsx")
var newWs =xlsx.utils.sheet_to_json(data);
xlsx.utils.book_append_sheet(file,newWs,"New Data")
xlsx.writeFile(file,"./OrnekDosya.xlsx")