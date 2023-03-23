function dateFormater(date, separator) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
  
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return day + separator + month + separator + year;
  }

var nows = new Date();
console.log(dateFormater(nows, '-'));