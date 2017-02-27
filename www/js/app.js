document.addEventListener("deviceready",function(){
  navigator.splashscreen.hide();
});

angular.module('app', ['ngCordova'])

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


.controller("loginController", ["$scope", function($scope){

}])

.controller("arquivarController", ["$scope", "$cordovaBarcodeScanner", function($scope, $cordovaBarcodeScanner) {

$scope.processo = {}
var count = 0;

    function formata(value){
        if(value < 10){
            return '00' + value;
        }
        
         if(value < 100){
            return '0' + value;
        }
        
        return value;
    }

    $scope.gerar = function(){
        count++;
        $scope.processo.etiqueta = formata($scope.processo.numero) + " - " + formata($scope.processo.corredor) + " - " + formata($scope.processo.estante) + " - " + formata($scope.processo.prateleira) + " - " + formata($scope.processo.pasta) + " - " + formata(count);
        $scope.processo.numero = null;
    }


    $scope.scanner = function(){
           
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
    
    
    
}])   
 

.controller("desarquivarController", ["$scope", "cpfService", function($scope, cpfService){
    $scope.desarquivo = {}
    $scope.testaCPF = function(){
        if (!cpfService.cpf($scope.desarquivo.cpf)){
            alert("CPF INVÁLIDO!!!");
            $scope.desarquivo.cpf = null;
        }
    }
    
    $scope.desarquivar = function(){
        function isEmpty(val){
    	return (val === undefined || val == null || val.length <= 0) ? true : false;
        }
        
        if(!isEmpty($scope.desarquivo.numero) && !isEmpty($scope.desarquivo.cpf) && !isEmpty($scope.desarquivo.motivo)) {
            console.log($scope.desarquivo);
            alert("Desarquivado");
            $scope.desarquivo = {}
        }else{
            alert("Preencha todos os campos!");
        }
    }
}]);





