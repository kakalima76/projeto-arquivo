document.addEventListener("deviceready",function(){
  navigator.splashscreen.hide();
});

angular.module('app', ['ngCordova'])


.service('processoService', ['$http', '$window', function($http, $window){

    var getProcesso = function(value){
        return $http.get('https://credenciais.herokuapp.com/processos')
    }
    
    var setProcesso = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos', obj);
    }
    
    var setDesarquivo = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/itens', obj);
    }
    
    return {
        getProcesso: getProcesso,
        setProcesso: setProcesso,
        setDesarquivo: setDesarquivo
    }


}])



.service('loginService', ['$http', '$window', function($http, $window){

		var logar = function(obj){
			return $http.post('https://credenciais.herokuapp.com/login', obj);
		}

		var registrar = function(obj){
			return $http.post('https://credenciais.herokuapp.com/requestRegister', obj);
		}

		var trocar = function(obj){
			return $http.post('https://credenciais.herokuapp.com/requestNewPassword', obj);
		}

		var usuario = function(){
			var user = JSON.parse($window.atob($window.localStorage['token'].split('.')[1]));
			return user;
		}

		return {
			logar: logar,
			registrar: registrar,
			trocar: trocar,
			usuario: usuario
		}

	}])

.service("cpfService", [function(){

    var cpf = function (strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }

    return {
        cpf: cpf
    }

}])


.controller("loginController", ["$scope", "loginService", "$window", function($scope, loginService, $window){
	$scope.showError = true;    
    $scope.acesso = {}
	
	$scope.logar = function(obj){
		var user = {}
        
        
		user['email'] = obj.user;
		user['password'] = obj.pass;
        
		var promise = loginService.logar(user);

		promise.then(function(data){
			if(data.status === 200){
				$window.localStorage['token'] = data.data.token;
				activate_page("#page-arquivar"); 

				return;
			}
			
		})

		promise.catch(function(err){
			$scope.showError = true;
			$scope.message = err.data.message;
		})
	}

}])

.controller("arquivarController", ["$scope", "$cordovaBarcodeScanner", "processoService", function($scope, $cordovaBarcodeScanner, processoService) {

$scope.processo = {}

    
    function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
    }

    function formata(value){
        if(value < 10){
            return '00' + value;
        }
        
         if(value < 100){
            return '0' + value;
        }
        
        return value;
    }
    
    function testaCampos(){
        if(!isEmpty($scope.processo.corredor) && !isEmpty($scope.processo.estante) && !isEmpty($scope.processo.prateleira) && !isEmpty($scope.processo.pasta) && !isEmpty($scope.processo.etiqueta)){
            return true;
        }else{
            alert("Preencha todos os campos!");
        }
        
        return false;
    }
    
    function testaGerarEtiqueta(){
        if(!isEmpty($scope.processo.corredor) && !isEmpty($scope.processo.estante) && !isEmpty($scope.processo.prateleira) && !isEmpty($scope.processo.pasta) && !isEmpty($scope.processo.numero)){
            return true;
        }else{
            alert("Preencha todos os campos!");
        }
        
        return false;
    }

    $scope.gerar = function(){    
        var count = 0;
        
        if(testaGerarEtiqueta()){
            
            
            function filtrar(value){
                return ((value.corredor === $scope.processo.corredor) && (value.estante === $scope.processo.estante) && (value.prateleira === $scope.processo.prateleira) && (value.pasta === $scope.processo.pasta))
            }
    
            var arrayOrdem = []
            
            var promise = processoService.getProcesso();
            promise
                .then(function(data){
                
                var array = data.data.filter(filtrar);
 
                   array.forEach(function(value){
                       arrayOrdem.push(value.ordem);
                   });
                
                arrayOrdem.sort(function(a, b){return b-a})
                
                if (arrayOrdem.length === 0){
                    $scope.processo.ordem = 1;
                     $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata($scope.processo.ordem);
                }else{
                    $scope.processo.ordem = arrayOrdem[0] + 1;
                    $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata($scope.processo.ordem);
                }
                
                
                })
                .catch(function(err){
                    console.log(err);
                })
             
           
        
        }
       
    }


    $scope.scanner = function(){
        $scope.processo.numero = null;
           
        document.addEventListener("deviceready", function () {
            $cordovaBarcodeScanner
            .scan()
            .then(function(barcodeData) {
            $scope.processo.numero = barcodeData.text;
            }, function(error) {
            $scope.processo.numero = error;
            });
        }, false); 
    }
    
    $scope.arquivar = function(obj){

        
        if(testaCampos()){
            
            var promise = processoService.setProcesso(obj);
            promise
                .then(function(){
                    $scope.processo.numero = null;
                    $scope.processo.etiqueta = null;
                    alert("Processo arquivado.");
                })
                .catch(function(err){
                   console.log(err);
                })   
            
        } 
    }
    
    
    
}])   
 

.controller("desarquivarController", ["$scope", "cpfService", "processoService", function($scope, cpfService, processoService){
    $scope.desarquivo = {}
    $scope.testaCPF = function(){
        if (!cpfService.cpf($scope.desarquivo.cpf)){
            alert("CPF INVÁLIDO!!!");
            $scope.desarquivo.cpf = null;
        }
    }
    
    function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
    }
    
    function filtrar(value){
        return value.numero === $scope.desarquivo.numero;
    }
    
    
    $scope.buscar =  function(value){
        var promise = processoService.getProcesso(value);
        promise
            .then(function(data){
            
            var array = data.data.filter(filtrar);
            
                if(isEmpty(array[0])){
                    $scope.desarquivo.etiqueta = "Inexistente"
                }else{
                    $scope.desarquivo.etiqueta = array[0].etiqueta;
                }
            })
        
            .catch(function(err){
                console.log(err);
            })
        
    }
    
    $scope.desarquivar = function(){
        
        if(!isEmpty($scope.desarquivo.numero) && !isEmpty($scope.desarquivo.cpf) && !isEmpty($scope.desarquivo.motivo)) {
            console.log($scope.desarquivo);
            alert("Desarquivado");
            $scope.desarquivo = {}
        }else{
            alert("Preencha todos os campos!");
        }
    }
}]);





