const resultado = fizzBuzz(true);
console.log(resultado);

function fizzBuzz(entrada){

    if (typeof entrada !== 'number'){
        return 'Não é um numero';
    }if(entrada % 5 === 0 && entrada % 3 === 0){
        return 'FizzBuzz'
    }if(entrada % 5 !== 0 && entrada % 3 !== 0){
        return entrada;
    }if(entrada % 3 === 0){
        return 'Fizz'
    }
    if(entrada % 5 === 0){
        return 'Buzz'
    }
}