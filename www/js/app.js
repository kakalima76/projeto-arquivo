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

    
    var getBuscaData = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/datas', obj);
    }

    
    var setDesarquivo = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/itens', obj);
    }

    var setStatus= function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/status', obj);
    }

    var remove= function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/removeArquivo', obj);
    }




    
    return {
        getProcesso: getProcesso,
        setProcesso: setProcesso,
        getBuscaData: getBuscaData,
        setDesarquivo: setDesarquivo,
        setStatus: setStatus,
        remove: remove
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


.service("codigosService", [function(){

    var codigos = 

    [
                                
        {   "CAP":  23067   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23068   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23001   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23055   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23002   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23003   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23004   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23005   ,"GAC":  1   ,"GAI":     20  }   ,
        {   "CAP":  23006   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23007   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23008   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23009   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23056   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23069   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23010   ,"GAC":  1   ,"GAI":     1   }   ,
        {   "CAP":  23054   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23013   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23014   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23057   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23063   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23015   ,"GAC":  1   ,"GAI":     20  }   ,
        {   "CAP":  23018   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23016   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23017   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23019   ,"GAC":  0   ,"GAI":     0   }   ,
        {   "CAP":  23031   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23026   ,"GAC":  1   ,"GAI":     20  }   ,
        {   "CAP":  23027   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23028   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23029   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23030   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23066   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23032   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23060   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23033   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23065   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23035   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23100   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23037   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23038   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23039   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23040   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23041   ,"GAC":  1   ,"GAI":     20  }   ,
        {   "CAP":  23042   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23043   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23044   ,"GAC":  1   ,"GAI":     20  }   ,
        {   "CAP":  23058   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23062   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23045   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23047   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23046   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23048   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23049   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23050   ,"GAC":  2   ,"GAI":     13  }   ,
        {   "CAP":  23051   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23052   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23070   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23061   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23064   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  90000   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  23036   ,"GAC":  1   ,"GAI":     5   }   ,
        {   "CAP":  90001   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90002   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90003   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90004   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90005   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90006   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90007   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90008   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90009   ,"GAC":  5   ,"GAI":     0   }   ,
        {   "CAP":  90010   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90011   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90012   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90013   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90014   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90015   ,"GAC":  2   ,"GAI":     0   }   ,
        {   "CAP":  90016   ,"GAC":  1   ,"GAI":     0   }   ,
        {   "CAP":  90017   ,"GAC":  1   ,"GAI":     0   }   ,
        {   "CAP":  90018   ,"GAC":  5   ,"GAI":     0   }            
    ]

    var testar =  function(codigo){
        var filtro = function(value){
        return value.CAP === codigo;
        }

        var array = codigos.filter(filtro);

        return array[0];

    }


   

    return {
        testar: testar
    }

}])


.controller("loginController", ["codigosService", "$scope", "loginService", "$window", function(codigosService, $scope, loginService, $window){
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

.controller("arquivarController", ["codigosService", "$scope", "$cordovaBarcodeScanner", "processoService", "$cordovaPrinter", "loginService", function(codigosService, $scope, $cordovaBarcodeScanner, processoService, $cordovaPrinter, loginService) {

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
        if(!isEmpty($scope.processo.corredor) && !isEmpty($scope.processo.estante) && !isEmpty($scope.processo.prateleira) && !isEmpty($scope.processo.pasta) && !isEmpty($scope.processo.etiqueta) && !isEmpty($scope.processo.codigo)){
            return true;
        }else{
            alert("Preencha todos os campos!");
            console.log("Preencha todos os campos!");
        }
        
        return false;
    }
    
    function testaGerarEtiqueta(){
        if(!isEmpty($scope.processo.corredor) && !isEmpty($scope.processo.estante) && !isEmpty($scope.processo.prateleira) && !isEmpty($scope.processo.pasta) && !isEmpty($scope.processo.numero) && !isEmpty($scope.processo.codigo)){
            return true;
        }else{
            alert("Preencha todos os campos!");
        }
        
        return false;
    }

    $scope.gerar = function(){    
        var count = 0;
        var printerAvail = $cordovaPrinter.isAvailable()   

        console.log();
        
        if(testaGerarEtiqueta()){


            // Código para inserir as datas limites no objeto processo


            var datasLimites = function(){
                var obj = codigosService.testar(parseInt($scope.processo.codigo));
                $scope.processo.GAC = obj.GAC
                $scope.processo.GAI = obj.GAI
                console.log(loginService.usuario().posicao);
                $scope.processo.local = loginService.usuario().posicao;

            }

            datasLimites();

            
            
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
                
               /* var printerAvail = $cordovaPrinter.isAvailable()*/
                
                
                if (arrayOrdem.length === 0){
                    $scope.processo.ordem = 1;
                     $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata($scope.processo.ordem);                    
                    
                }else{
                    $scope.processo.ordem = arrayOrdem[0] + 1;
                    $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata($scope.processo.ordem);
                }
                
                var doc = "<div>" +  $scope.processo.etiqueta + "</div>";
                $cordovaPrinter.print(doc)
                
                
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
    
    
     $scope.clean = function(){
        $scope.processo = {}
    }
    
    
    
}])   
 

.controller("desarquivarController", ["$scope", "cpfService", "processoService", 'loginService', function($scope, cpfService, processoService, loginService){
    var flag = false;
    $scope.mostrarMatricula = false;
    $scope.mostrarCpf = false;
    $scope.mostrar = false;
    var contador  = 0;
    $scope.desarquivo = {}
    $scope.arrayMovimento = [];
    $scope.listar = 'templates/sub_listar.html';
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
                    $scope.arrayMovimento = []
                }else{

                    $scope.desarquivo.etiqueta = array[0].etiqueta;
                    $scope.arrayMovimento = array[0].movimento;
                    $scope.arrayMovimento.forEach(function(value){
                        value.data = value.data.substring(8,10) + '/' + value.data.substring(5,7) + '/' + value.data.substring(0,4);
                    });
                    
                    if(array[0].status){
                        $scope.desarquivo.status = "Arquivado";
                    }else{
                        $scope.desarquivo.status = "Desarquivado";
                    }
                    
                }
            })
        
            .catch(function(err){
                console.log(err);
            })
        
    }
    
    
    $scope.optar = function(option){
 
        if(option === "MATRÍCULA"){
            $scope.mostrarCpf = false;
            $scope.mostrarMatricula = true;
        }else{
            $scope.mostrarMatricula = false;
            $scope.mostrarCpf = true;
        }
        
    }
    
    $scope.desarquivar = function(obj){
        var movimento = {};
        movimento.numero = $scope.desarquivo.numero; 
        movimento.status =  false;    
        
        obj['data'] = " ";
        
        var usuario = loginService.usuario();
        obj['servidor'] = usuario.name + ' - ' + usuario.matricula;
        var msg = "Desarquivado";
        if(!isEmpty($scope.desarquivo.numero) && !isEmpty($scope.desarquivo.motivo) && (!isEmpty(obj['cpf']) || !isEmpty(obj['matricula']))) {
            var msg = "Desarquivado";
            movimento.status = false;

            if($scope.desarquivo.motivo === "ARQUIVAR"){
                movimento.status = true; //seta o valor da variável de status de posição de arquivo
                msg = "Arquivado";
            }
            
            if(obj['cpf']){
                    obj['matricula'] = '';
                    obj['documento'] = 'CPF: ' + obj['cpf'];
                    obj['valor'] = 10000;
            }else{
                    obj['cpf'] = '';
                    obj['documento'] = 'Mat: ' + obj['matricula']
                    obj['valor'] = 0;
            }
            
  
            
            

            var promise = processoService.setDesarquivo(obj);
            promise
                .then(function(){
                    
                    var status = processoService.setStatus(movimento);
                    status.then(function(){
                    alert(msg);
                    $scope.desarquivo = {}
                    $scope.arrayMovimento = []
                    
                    }).catch(function(err){
                        console.log(err);
                    })
                   
                })
                .catch(function(err){
                    console.log(err);
                });
            
        }else{
            alert("Preencha todos os campos!");
        }
    }
    
    $scope.mostrarMovimento = function(){
        if(contador % 2 === 0){
            $scope.mostrar = true;
        }else{
            $scope.mostrar = false;
        }
        
        contador++;
    }
    
    
    $scope.clean = function(){
        $scope.desarquivo = {};
        $scope.arrayMovimento = []
    }
   
    
    
    
}])

.controller("buscaController", ["$scope", "processoService", function($scope, processoService){
    $scope.buscar = 'templates/sub_data.html';
    $scope.arrayArquivo = []


    var popula = function(value){
       $scope.arrayArquivo = []

        var promise = processoService.getBuscaData(value);
        promise.
            then(function(data){
            $scope.arrayArquivo = data.data;
            
            $scope.arrayArquivo.forEach(function(value){
               value.arquivoStr = value.arquivo.substring(8,10) + '/' + value.arquivo.substring(5,7) + '/' + value.arquivo.substring(0,4);
            });
            
            
            if($scope.arrayArquivo.length <= 1){
                $scope.quantidade = $scope.arrayArquivo.length + ' PROCESSO';
            }else{
                $scope.quantidade = $scope.arrayArquivo.length + ' PROCESSOS';
            }
            
        })
    } 
    
    
    $scope.calcular = function(obj){
       popula(obj);
    }
    
    $scope.clean = function(){
        $scope.tempo = {}
        $scope.arrayArquivo = []
        $scope.quantidade = null;
    }

    $scope.remover = function(obj){
        
        var promise = processoService.remove(obj);
        promise
            .then(function(data){
                $scope.quantidade = 'Busque novamente para atualizar';
                $scope.arrayArquivo = [];  
            })
            .catch(function(err){
                console.log(err);
            })
              
    }
    
}]);





