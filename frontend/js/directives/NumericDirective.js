/**
 * Created by Cosmin on 8/9/2016.
 */

angular.module('subApp')
    .directive('isNumeric',isNumeric)

function isNumeric(){
    var directive = {
        link : link,
        require: "ngModel"
    }
    return directive;
    function link(scope){
        scope.$watch('valid.amount', function(newValue, oldValue){
            var input = String(newValue).split("")
            if(input.length === 0) return;
            if(input.length === 1 && (input[0] == '-' || input[0] == '.')) return;
            if(input.length === 2 && newValue === '-.') return;

            if(isNaN(newValue)){
                scope.valid.amount = oldValue;
            }
        })
    }
}