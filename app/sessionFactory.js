angular.module('app').factory('sessionFactory', ['$window', sessionFactory]);


//session factory

function sessionFactory($window){
  return function(){
           this.save = save,
           this.get = get,
           this.clear = clear 
  }

  function save(key, value) {
    return $window.sessionStorage.setItem(key, value);
  }

  function get(key) {
    return $window.sessionStorage.getItem(key);

  }

  function clear() {
    $window.sessionStorage.clear();

  }


}