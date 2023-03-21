function receivesAFunction(callBack){
    return callBack();
}
receivesAFunction(callBack)

function returnsANamedFunction(){
    return function add(a,d){
        console.log(a + b);
    }
}

function returnsAnAnonymousFunction(){
    return () => console.log('anonymous function');
}