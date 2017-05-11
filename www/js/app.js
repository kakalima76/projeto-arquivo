/*document.addEventListener("deviceready",function(){
  navigator.splashscreen.hide();
});*/

angular.module('app', ['ngCordova'])


.service('processoService', ['$http', '$window', function($http, $window){

    var getProcesso = function(value){
        return $http.get('https://credenciais.herokuapp.com/processos');
    };

    
    var setProcesso = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos', obj);
    };

    
    var getBuscaData = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/datas', obj);
    };

    
    var setDesarquivo = function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/itens', obj);
    };

    var setStatus= function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/status', obj);
    };

    var remove= function(obj){
        return $http.post('https://credenciais.herokuapp.com/processos/removeArquivo', obj);
    };

    
    
    return {
        getProcesso: getProcesso,
        setProcesso: setProcesso,
        getBuscaData: getBuscaData,
        setDesarquivo: setDesarquivo,
        setStatus: setStatus,
        remove: remove
    };


}])



.service('loginService', ['$http', '$window', function($http, $window){

		var logar = function(obj){
			return $http.post('https://credenciais.herokuapp.com/login', obj);
		};

		var registrar = function(obj){
			return $http.post('https://credenciais.herokuapp.com/requestRegister', obj);
		};

		var trocar = function(obj){
			return $http.post('https://credenciais.herokuapp.com/requestNewPassword', obj);
		};

		var usuario = function(){
			var user = JSON.parse($window.atob($window.localStorage['token'].split('.')[1]));
			return user;
		};

     

		return {
			logar: logar,
			registrar: registrar,
			trocar: trocar,
			usuario: usuario
		};

	}])

.service("cpfService", [function(){

    var cpf = function (strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;

        for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

        Soma = 0;
        for (var j = 1; j <= 10; j++) Soma = Soma + parseInt(strCPF.substring(j-1, j)) * (12 - j);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    };

    return {
        cpf: cpf
    };

}])


.service("codigosService", [function(){

    var codigos = 

    [                                
        {   "CAP":  23067   ,   "ASSUNTO":  "ISS - DIEF"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23068   ,   "ASSUNTO":  "ISS – 2º via de declaração"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23001   ,   "ASSUNTO":  "ISS – Ação Ordinária"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23055   ,   "ASSUNTO":  "ISS – Alegação de Pagamento"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23002   ,   "ASSUNTO":  "ISS – Apropriação" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23003   ,   "ASSUNTO":  "ISS – Apropriação de Pagamento"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23004   ,   "ASSUNTO":  "ISS – Aproveitamento de Crédito"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23005   ,   "ASSUNTO":  "ISS – Auto de Infração"    ,   "GAC":  1   ,   "GAI":  20  ,   "D":    true    ,   "M":    true    ,   "E":    true    }   ,
        {   "CAP":  23006   ,   "ASSUNTO":  "ISS – Autorização Transitória" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23007   ,   "ASSUNTO":  "ISS – Baixa de Alvará" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23008   ,   "ASSUNTO":  "ISS – Baixa de Inscrição"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23009   ,   "ASSUNTO":  "ISS – Cancelamento de estimativa"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23056   ,   "ASSUNTO":  "ISS – Centralização de Escrita Fiscal" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23069   ,   "ASSUNTO":  "ISS – CEPOM"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23010   ,   "ASSUNTO":  "ISS - Certidão"    ,   "GAC":  1   ,   "GAI":  1   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23054   ,   "ASSUNTO":  "ISS – Comprovação de Pagamento"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23013   ,   "ASSUNTO":  "ISS – Confirmação de Guia" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23014   ,   "ASSUNTO":  "ISS – Consulta"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23057   ,   "ASSUNTO":  "ISS – Denuncia de Terceiros"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23063   ,   "ASSUNTO":  "ISS – Denuncia Espontânea" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23015   ,   "ASSUNTO":  "ISS – Depósito"    ,   "GAC":  1   ,   "GAI":  20  ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23018   ,   "ASSUNTO":  "ISS – Extrato de Livros Fiscais"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23016   ,   "ASSUNTO":  "ISS – Extravio de Documentos Fiscais"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23017   ,   "ASSUNTO":  "ISS – Extravio de Livros Fiscais"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23019   ,   "ASSUNTO":  "ISS – Falência"    ,   "GAC":  0   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23031   ,   "ASSUNTO":  "ISS – Incentivos fiscais – Comunicação da RIOTUR"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23026   ,   "ASSUNTO":  "ISS – Inclusão Predial"    ,   "GAC":  1   ,   "GAI":  20  ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23027   ,   "ASSUNTO":  "ISS – Informação Junta Comercial"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23028   ,   "ASSUNTO":  "ISS – Informação Outros Órgãos"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23029   ,   "ASSUNTO":  "ISS- Informação Poder Judiciário"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23030   ,   "ASSUNTO":  "ISS – Informação sobre Pagamento"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23066   ,   "ASSUNTO":  "ISS -Inscrição"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23032   ,   "ASSUNTO":  "ISS – Mandado de Segurança"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23060   ,   "ASSUNTO":  "ISS – Máquina Registradora-"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23033   ,   "ASSUNTO":  "ISS - Medida Cautelar" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23065   ,   "ASSUNTO":  "ISS Microempresa"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23035   ,   "ASSUNTO":  "ISS - Microempresa Impugnação de Desenquadramento" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23100   ,   "ASSUNTO":  "ISS – Nota Carioca – Pagamento Sorteio"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23037   ,   "ASSUNTO":  "ISS – Nota de Débito"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23038   ,   "ASSUNTO":  "ISS – Nota de Débito - Cancelamento"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23039   ,   "ASSUNTO":  "ISS – Nota de Débito - pagamento"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  23040   ,   "ASSUNTO":  "ISS – Nota de Débito - Revisão"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23041   ,   "ASSUNTO":  "ISS - Nota de Lançamento"  ,   "GAC":  1   ,   "GAI":  20  ,   "D":    true    ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23042   ,   "ASSUNTO":  "ISS – Paralisação Definitiva de Atividades"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23043   ,   "ASSUNTO":  "ISS – Paralisação Temporária de Atividades"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23044   ,   "ASSUNTO":  "ISS- Parcelamento" ,   "GAC":  1   ,   "GAI":  20  ,   "D":    true    ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23058   ,   "ASSUNTO":  "ISS - Portaria de Estimativa (enquadramento)"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23062   ,   "ASSUNTO":  "ISS - Portaria de Estimativa/Revisão"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23045   ,   "ASSUNTO":  "ISS Reconhecimento de Imunidade"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23047   ,   "ASSUNTO":  "ISS – Reconhecimento de Isenção"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23046   ,   "ASSUNTO":  "ISS- Reconhecimento de não Incidência" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23048   ,   "ASSUNTO":  "ISS - Regime Especial" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23049   ,   "ASSUNTO":  "ISS – Regime Especial" ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23050   ,   "ASSUNTO":  "ISS - Remissâo"    ,   "GAC":  2   ,   "GAI":  13  ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23051   ,   "ASSUNTO":  "ISS – Requisição de Informação"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23052   ,   "ASSUNTO":  "ISS- Restituição"  ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23070   ,   "ASSUNTO":  "ISS - Simples Nacional"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23061   ,   "ASSUNTO":  "ISS - Transação"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23064   ,   "ASSUNTO":  "ISS (CITAR)"   ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90000   ,   "ASSUNTO":  "ISS - DARM"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  23036   ,   "ASSUNTO":  "ISS – Microempresa Ultrapassagem do Limite"    ,   "GAC":  1   ,   "GAI":  5   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90001   ,   "ASSUNTO":  "AIDF"  ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90002   ,   "ASSUNTO":  "Auto de infração"  ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    false   }   ,
        {   "CAP":  90003   ,   "ASSUNTO":  "Nota de Lançamento"    ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90004   ,   "ASSUNTO":  "Relatório de processamento de dados"   ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90005   ,   "ASSUNTO":  "Relatório de regime especial"  ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90006   ,   "ASSUNTO":  "Comunicação de paralisação."   ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90007   ,   "ASSUNTO":  "Declaração da Lei nº 2.590/97" ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90008   ,   "ASSUNTO":  "Declaração de microempresa"    ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90009   ,   "ASSUNTO":  "Ficha de campo."   ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90010   ,   "ASSUNTO":  "Intimação fiscal." ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90011   ,   "ASSUNTO":  "Memorando de baixa."   ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90012   ,   "ASSUNTO":  "Memorando de exclusão de atividades"   ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90013   ,   "ASSUNTO":  "Termo de arrecadação/ apreensão"   ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90014   ,   "ASSUNTO":  "Memorando RACCS"   ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90015   ,   "ASSUNTO":  "Relação dos livros autenticados."  ,   "GAC":  2   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90016   ,   "ASSUNTO":  "Termo de inclusão."    ,   "GAC":  1   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90017   ,   "ASSUNTO":  "Formulário"    ,   "GAC":  1   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }   ,
        {   "CAP":  90018   ,   "ASSUNTO":  "Diversos." ,   "GAC":  5   ,   "GAI":  0   ,   "D":    false   ,   "M":    false   ,   "E":    true    }          
    ];

    var testar =  function(codigo){
        var filtro = function(value){
        return value.CAP === codigo;
        };

        var array = codigos.filter(filtro);

        return array[0];

    };

    return {
        testar: testar
    };

}])


.controller("loginController", ["$http", "processoService", "codigosService", "$scope", "loginService", "$window", function($http, processoService, codigosService, $scope, loginService, $window){
	$scope.showError = true;    
    $scope.acesso = {};
	
    

	$scope.logar = function(obj){
		var user = {};
        
        
		user['email'] = obj.user;
		user['password'] = obj.pass;
        
		var promise = loginService.logar(user);

		promise
        .then(function(data){
			if(data.status === 200){
				$window.localStorage['token'] = data.data.token;
				$window.activate_page("#page-arquivar");
                
                var listar = function(){

                        var array = [];

                        var promise = $http.get('https://credenciais.herokuapp.com/processos');

                        promise.then(function(data){
                            
                            var dt2 = new Date();
                        
                                data.data.forEach(function(value){

                                   if(dt2 > new Date(value.GAC)){
                                        array.push(value);
                                   };
                                })

                                if(array.length > 0){
                                    console.log("Documentos para GAI");
                                };

                            })

                }();




				return;
			}
			
		});

		promise.catch(function(err){
			$scope.showError = true;
			$scope.message = err.data.message;
		});
	};

}])

.controller("arquivarController", ["codigosService", "$scope", "$cordovaBarcodeScanner", "processoService", "$cordovaPrinter", "loginService", function(codigosService, $scope, $cordovaBarcodeScanner, processoService, $cordovaPrinter, loginService) {

$scope.processo = {};

    
    function isEmpty(val){
    	return (val === undefined || val === null || val.length <= 0) ? true : false;
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
        var printerAvail = $cordovaPrinter.isAvailable(); 

        console.log();
        
        if(testaGerarEtiqueta()){


            // Código para inserir as datas limites no objeto processo


            var datasLimites = function(){
                var obj = codigosService.testar(parseInt($scope.processo.codigo));
                $scope.processo.GAC = obj.GAC;
                $scope.processo.GAI = obj.GAI;
                $scope.processo.D = obj.D;
                $scope.processo.M = obj.M;
                $scope.processo.E = obj.E;
                $scope.processo.local = loginService.usuario().posicao;

            };

            datasLimites();

            
            
            var filtrar = function(value){
                return ((value.corredor === $scope.processo.corredor) && (value.estante === $scope.processo.estante) && (value.prateleira === $scope.processo.prateleira) && (value.pasta === $scope.processo.pasta));
            };
    
            var arrayOrdem = [];
            
            var promise = processoService.getProcesso();
            promise
                .then(function(data){
                
                var array = data.data.filter(filtrar);
 
                   array.forEach(function(value){
                       arrayOrdem.push(value.ordem);
                   });
                
                arrayOrdem.sort(function(a, b){return b-a;});
                
               /* var printerAvail = $cordovaPrinter.isAvailable()*/
                
                
                if (arrayOrdem.length === 0){
                    $scope.processo.ordem = 1;
                     $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata($scope.processo.ordem);                    
                    
                }else{
                    $scope.processo.ordem = arrayOrdem[0] + 1;
                    $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata($scope.processo.ordem);
                }
                
                var doc = "<div>" +  $scope.processo.etiqueta + "</div>";
                $cordovaPrinter.print(doc);
                
                
                })
                .catch(function(err){
                    window.console.log(err);
                });
             
           
        
        }
       
    };


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
    };
    
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
                });  
            
        } 

       
    };
    
    
     $scope.clean = function(){
        $scope.processo = {};
    };
    
    
    
}])   
 

.controller("desarquivarController", ["$scope", "cpfService", "processoService", 'loginService', function($scope, cpfService, processoService, loginService){
    var flag = false;
    $scope.mostrarMatricula = false;
    $scope.mostrarCpf = false;
    $scope.mostrar = false;
    var contador  = 0;
    $scope.desarquivo = {};
    $scope.arrayMovimento = [];
    $scope.listar = 'templates/sub_listar.html';
    $scope.testaCPF = function(){
        if (!cpfService.cpf($scope.desarquivo.cpf)){
            alert("CPF INVÁLIDO!!!");
            $scope.desarquivo.cpf = null;
        }
    };
    
    function isEmpty(val){
    	return (val === undefined || val === null || val.length <= 0) ? true : false;
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
                    $scope.desarquivo.etiqueta = "Inexistente";
                    $scope.arrayMovimento = [];
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
            });
        
    };
    
    
    $scope.optar = function(option){
 
        if(option === "MATRÍCULA"){
            $scope.mostrarCpf = false;
            $scope.mostrarMatricula = true;
        }else{
            $scope.mostrarMatricula = false;
            $scope.mostrarCpf = true;
        }
        
    };
    
    $scope.desarquivar = function(obj){
        var movimento = {};
        movimento.numero = $scope.desarquivo.numero; 
        movimento.status =  false;    
        
        obj['data'] = " ";
        
        var usuario = loginService.usuario();
        obj['servidor'] = usuario.name + ' - ' + usuario.matricula;
        var msg = "Desarquivado";
        if(!isEmpty($scope.desarquivo.numero) && !isEmpty($scope.desarquivo.motivo) && (!isEmpty(obj['cpf']) || !isEmpty(obj['matricula']))) {
            msg = "Desarquivado";
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
                    obj['documento'] = 'Mat: ' + obj['matricula'];
                    obj['valor'] = 0;
            }
            
  
            
            

            var promise = processoService.setDesarquivo(obj);
            promise
                .then(function(){
                    
                    var status = processoService.setStatus(movimento);
                    status.then(function(){
                    alert(msg);
                    $scope.desarquivo = {};
                    $scope.arrayMovimento = [];
                    
                    }).catch(function(err){
                        console.log(err);
                    });
                   
                })
                .catch(function(err){
                    console.log(err);
                });
            
        }else{
            alert("Preencha todos os campos!");
        }
    };
    
    $scope.mostrarMovimento = function(){
        if(contador % 2 === 0){
            $scope.mostrar = true;
        }else{
            $scope.mostrar = false;
        }
        
        contador++;
    };
    
    
    $scope.clean = function(){
        $scope.desarquivo = {};
        $scope.arrayMovimento = [];
    };
   
    
    
    
}])

.controller("buscaController", ["$http", "$scope", "processoService", "$cordovaPrinter", function($http, $scope, processoService, $cordovaPrinter){
    $scope.buscar = 'templates/sub_recolhimento.html';
    $scope.arrayArquivo = [];

    $scope.imprimir = function(){
        var doc = "templates/recolhimento.html";
        $cordovaPrinter.print(doc);
        console.log("ok");

            var array = [];

            var promise = $http.get('https://credenciais.herokuapp.com/processos');

            promise.then(function(data){
                            
                var dt2 = new Date();
                        
                data.data.forEach(function(value){

                    if(dt2 > new Date(value.GAC)){
                    array.push(value);
                    };
                })


                console.log(array);                               
            })


    }

    
}]);





