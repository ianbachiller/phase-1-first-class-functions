function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function aNamedFunction(){
    }
return aNamedFunction;    
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}