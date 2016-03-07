var productnames = function(file){

  var fs = require("fs");
  var listString = fs.readFileSync(file,'utf8');
  var listArray =listString.split("\n");



  var productsArray =[];

for(i=0;i<listArray.length;i++){
  var a = listArray[i].split(",");
    if(productsArray.indexOf(a[1])<0){
      productsArray.push(a[1]);
    }

}
return productsArray;
};


var productssold = function(file){
  var fs = require("fs");
  var listString = fs.readFileSync(file,'utf8');
  var listArray =listString.split("\n");


var productsMap ={};
  var products = productnames(file);
  for (i = 0; i <products.length; i++) {
    productsMap[i]=[];
  }


for(i=0;i<listArray.length;i=i+products.length){

var dArray =[];
for(n=0;n<products.length;n++){
  var index =i+n;
   var a = listArray[index].split(",");
   dArray.push(a[2]);


}


for (j = 0; j <products.length; j++) {

  productsMap[j].push(dArray[j]);


}

}

productsMapResult ={};
for(m=0;m<products.length;m++){
  productsMapResult[products[m]]=[];
}

for(k=0;k<products.length;k++){
  var total =0;
  var myArray = productsMap[k];
for(l=0;l<myArray.length;l++){
  total += Number(myArray[l]);
}

productsMapResult[products[k]].push(total);


}




return productsMapResult;

};

console.log(productssold('./files/products.csv'));

module.exports = function(theFile){

  this.productsSold =function(callback){
    return callback(null, productssold(theFile));
  };

  this.productNames = function(callback){

    return callback(null, productnames(theFile));

  };
};
