angular.module('app').factory('formattingFactory',['$window', formattingFactory]);
// angular.module('app').factory('sessionFactory', ['$window', sessionFactory]);

function formattingFactory(){
  return function(){
    this.format = format;
  }

  function format(item){
    return item.length%2==0? item.toUpperCase() : item.toLowerCase();
  }
}