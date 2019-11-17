angular.module('app').controller('sessionController', [ 'sessionService', 'sessionFactory','formattingFactory',

  function(sessionService, sessionFactory, formattingFactory){
    var vm = this;
    var mySessionFactory = new sessionFactory();
    var myFormattingFactory = new formattingFactory();
    vm.getFactorySession = getFactorySession;
    vm.setFactorySession = setFactorySession;
    vm.clearFactorySession = clearFactorySession;

    //factory methods defin

    function getFactorySession() {
      vm.model = {
        name: mySessionFactory.get('name'),
        nickname: mySessionFactory.get('nickname'),
        status: 'Retrieved by Factory on ' + new Date()

      }
      

    }

    function setFactorySession() {
      var name = myFormattingFactory.format(vm.model.name)
      mySessionFactory.save('name', name);
      mySessionFactory.save('nickname', vm.model.nickname);
      getFactorySession();
    }

    function clearFactorySession() {
      mySessionFactory.clear();
      getFactorySession();

    }



    vm.getServiceSession = function(){
      vm.model = {
        name: sessionService.get('name'),
        nickname: sessionService.get('nickname'),
        status: 'Retrieved by service on ' + new Date()
        };
    }

    vm.setServiceSession = function() { 

      var name = myFormattingFactory.format(vm.model.name)
      sessionService.save('name', name);
      sessionService.save('nickname', vm.model.nickname);
      vm.getServiceSession();
    } 
    vm.clearServiceSession = function() { 
      sessionService.clear();
      vm.getServiceSession();
    }

}]);
