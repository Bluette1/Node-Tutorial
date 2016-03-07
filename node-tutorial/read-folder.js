
var linesinFiles =function(folderName){
  var fs = require("fs");

   //returns an array of file names
  var fileArray= fs.readdirSync(folderName);

var lines="";
  fileArray.forEach(function(file){
    filePath=folderName + '/' + file;
    lines += fs.readFileSync(filePath,'utf8')+"\n";

  }

  );
  console.log(lines);
  var linesArray = lines.split("\n");
  linesArray.pop();
  return linesArray;


}

exports.linesInFiles = linesinFiles;

exports. linesInFilesAsync = function(folderName,callback){
return callback(null, linesinFiles(folderName));


}



//  linesInFilesAsync('./files/week1', function(err, theLines){
//    console.log(theLines);
//  }
// );
