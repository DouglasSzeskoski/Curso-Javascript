DEFINIÇÃO DE VARIAVEIS

   let idade = 5;
   console.log(idade);
   let altura = 180;
   console.log(altura);


 TIPOS DE VARIAVEIS
    let nome = 'Douglas';     // String literal
    let idade = 25;           // number literal
    let estaAprovado = true;  // boolean
    let sobrenome ;           // Undefined

CRIANDO UM OBJETO
    let pessoa = {
       nome: 'Douglas',
       idade:25,
       estaAprovado: true,
       sobrenome: 'Szeskoski'
    };  

CRIANDO ARRAYS 
     let familia = [26,45,50,17];
     console.log(familia.length) (resultado é o valor dos indices = quantidade de valores)
     console.log(familia[0])

CRIANDO FUNÇÕES

NOMENADO FUNÇOES
VERBO + SUBSTANTIVO


OPERADORES

   Operadores Aritmeticos   (++ , --)
   Operadores de atribuição (= , += , -= )
   Operadores de igualdade  (=== , == )
   Operadores de Comparação (variavel > valor ? 'faça isso':'senão isso')
   Operadores Lógicos (e &&), (ou ||), (not !)
   Operadores não booleanos 
        Falsy ( undenifed, null, 0 , false, '', NaN)
        Truthy (qualquer outro valor exceto os acima)


   if ....  else if ..... else
   switch ..... case .... default

   For      (let i = 0 ; i < 5 ; ++)
   While    (i >= 1) (variavel antes,  ++ dentro da função)
   Do .. While  (do{}while (i < 10)) executa do ate atingir a condição while (variavel antes,  ++ dentro da função)
   For ... In   
       for(let chave in pessoa){
           console.log(chave(sairá o nome da variavel))
       }
   For ... of
        const cores = ['1' , '2' , '3'];
        for(let cor of cores){
        console.log(cor) //(sairá o valor da variavel))
    }
