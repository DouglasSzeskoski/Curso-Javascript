<h3>DEFINIÇÃO DE VARIAVEIS</h3>

    let idade = 5    <br />
    console.log(idade);	<br />					
    let altura = 180;   	<br />					
    console.log(altura);	<br />									


 <h4>DEFINIÇÃO DE VARIAVEIS</h4>
 
    let nome = 'Douglas';     // String literal <br />
    let idade = 25;           // number literal<br />
    let estaAprovado = true;  // boolean <br />
    let sobrenome ;           // Undefined <br />

<h3>CRIANDO OBJETO</h3>

    let pessoa = {
       nome: 'Douglas',
       idade:25,
       estaAprovado: true,
       sobrenome: 'Szeskoski'
    };  

<h3>CRIANDO ARRAYS</h3> 

    let familia = [26,45,50,17];
    console.log(familia.length) (resultado é o valor dos indices = quantidade de valores)
    console.log(familia[0])

<h3>CRIANDO FUNÇÕES</h3>

    <h4>NOMEAR FUNÇÕES SEMPRE USANDO VERBO + SUBSTANTIVO</h4>


<H3>OPERADORES</H3>

    Operadores Aritmeticos   (++ , --);
    Operadores de atribuição (= , += , -= );
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
