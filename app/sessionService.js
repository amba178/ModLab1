angular.module('app').service('sessionService', ['$window', sessionService]);
function sessionService($window){
  this.save = save;
  this.clear = clear;
  this.get = get;


  function save(key, value){
    return $window.sessionStorage.setItem(key, value);
  }
  function get(key, value){
  return $window.sessionStorage.getItem(key);
  }
  function clear(){
    $window.sessionStorage.clear();
  }

  
}