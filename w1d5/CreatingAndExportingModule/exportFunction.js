var list = [];

var sortNumber = function(num1, num2){
  return num1 - num2;
}


var exportFunction = {

 exportNumber: function(...number) {
    list.push(...number);
    return list;
  },

  sortList: function() {
    var newList = list.slice(0);
    return newList.sort(sortNumber);
  },

  // list:list
}

module.exports = exportFunction;

