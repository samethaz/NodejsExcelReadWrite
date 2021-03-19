/**
 * Data.js dosyasini okuyup icerisindeki bilgileri Excel dosyasina yazma 
 */
const xlsx = require("xlsx"); //xlsx modülünü import etmek.
let dataJs = require("./data"); //data.js yi import etmek
let newBook = xlsx.utils.book_new()
let newSheet = xlsx.utils.json_to_sheet(dataJs) //xlsx e çevirme
xlsx.utils.book_append_sheet(newBook, newSheet, "User") //yeni sheet eklemek
xlsx.writeFile(newBook, "./OrnekDosya.xlsx"); //dosya kayit



