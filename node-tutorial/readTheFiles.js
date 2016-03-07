//
// var linesInFiles =function(folderName){
//   var fs = require("fs");
//
//    //returns an array of file names
//   var fileArray= fs.readdirSync(folderName);
//
// var lines="";
//   fileArray.forEach(function(file){
//     filePath=folderName + '/' + file;
//     lines += fs.readFileSync(filePath,'utf8')+"\n";
//
//   }
//
//   );
//   console.log(lines);
//   var linesArray = lines.split("\n");
//   linesArray.pop();
//   return linesArray;
// }

var fs = require("fs");
var list = fs.readFileSync('./files/products.csv','utf8');
console.log(list.length);
