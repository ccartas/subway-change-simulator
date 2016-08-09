
angular.module('subApp')
       .directive('errorMessage',errorMessage)

function errorMessage(){
    var directive = {
        link: link,
        require: "ngModel"
    }
    return directive;
    function link(scope){
        scope.$watch('error.errorMessage', function(newValue, oldValue){

            if(newValue == 'Out of service'){
                scope.error.errorMessage = 'Out of service'
            }else {
                if(newValue == 'We cannot provide you the change'){
                scope.error.errorMessage = 'We cannot provide you the change'
            }else{
                    scope.error.errorMessage = ""
                }
            }


        })
    }
}