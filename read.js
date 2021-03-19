const xlsx = require('xlsx');
let file = xlsx.readFile("./OrnekDosya.xlsx")
var sheet_name_list = file.SheetNames;
var xlData = xlsx.utils.sheet_to_json(file.Sheets[sheet_name_list[0]]);
console.log(xlData);
