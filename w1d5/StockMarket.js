function maxProfit(stockPrice) {

  var result = 0; ;

  for (let i = 0 ; i < stockPrice.length; i ++){
    for (let j = i ; j < stockPrice.length ; j ++){

      var valueI = stockPrice[i];
      var valueJ = stockPrice[j];

      if((valueI - valueJ) < 0 && (valueI - valueJ) < result){
        result = (valueI - valueJ);
      }

      if(result === 0){
        return -1;
      }
    }

  }
  return (result * -1);
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));
