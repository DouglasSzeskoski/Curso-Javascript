<h2> VARIAVEIS</h2>

<h4>DEFINIÇÃO DE VARIAVEIS</h4>

    let idade = 5
    console.log(idade);
    let altura = 180;
    console.log(altura);

 <h4>TIPOS DE VARIAVEIS</h4>
 
    let nome = 'Douglas';     // String literal 
    let idade = 25;           // number literal
    let estaAprovado = true;  // boolean 
    let sobrenome ;           // Undefined


<h2>CRIANDO OBJETO</h2>

    let pessoa = {
       nome: 'Douglas',
       idade:25,
       estaAprovado: true,
       sobrenome: 'Szeskoski'
    };  


<h2> ARRAYS</h2> 

<h4>CRIANDO UMA ARRAY</h4>

        let familia = [26,45,50,17];
        console.log(familia.length) (resultado é o valor dos indices = quantidade de valores)
        console.log(familia[0])

<H4> INSERINDO NUMEROS</H4>

<H5>INICIO</H5>

        nomeArray.unshift(0); // ADICIONAR NUMERO NA PRIMEIRA CASA DO ARRAY  
    
<H5>MEIO</H5>

        nomeArray.splice(1,0,'a'); (INDICE, EXCLUIR?, ADICIONAR)    // ADICIONAR NUMERO NO MEIO DO ARRAY

 <H5>FIM</H5>

        nomeArray.push(5); // ADICIONAR NUMERO NA ULTIMA CASA DO ARRAY

<H4> REMOVENDO NUMEROS</H4>

<H5>INICIO</H5>

        nomeArray.shift(0); // REMOVER O NUMERO NA PRIMEIRA CASA DO ARRAY  
    
<H5>MEIO</H5>

        nomeArray.splice(1,1,'a'); (INDICE, EXCLUIR?, ADICIONAR)    // REMOVER NUMERO NO INDICE 1 DO ARRAY

 <H5>FIM</H5>

        nomeArray.pop(5); // REMOVER O NUMERO NA ULTIMA CASA DO ARRAY

<H5>REMOVER TODOS OS NUMEROS</H5>

    nomeArray.length = 0;
    nomeArray.splice = (0, nomeArray.length); (IRA APAGAR O NUMERO DE LEMENTOS DA ARRAY)


<H4>ENCONTRANDO ELEMENTOS DENTRO DA ARRAY</H4>

    nomeArray.indexOf(2); (VALOR) (RETORNA O INDICE) (SE O RESULTADO FOR -1 É PQ A POSIÇÃO NAO EXISTE)
    nomeArray.lastindexOf(2); (VALOR) (CASO TENHA NUMERO REPETIDOS RETORNA O INDICE D AULTIMA VEZ Q APARECE)
    console.log(2); (valor) (RETORNA TRUE OU FALSE, SE EXISTE OU NAO ESSE VALOR)

    for (numero of numero )
    nomeArray.forEach(function (nomeArray)){}
    nomeArray.forEach((nomeArray,indice) => console.log(nomeArray, indice)) - exibirá o valor e o indice

<H4>COMBINANDO ARRAYS</H4>

    const combinado = nomeArray.join ('.'); adicionara ponto na array
    
<h2>CRIANDO FUNÇÕES</h2>

        <h4>NOMEAR FUNÇÕES SEMPRE USANDO VERBO + SUBSTANTIVO</h4>



<H2>OPERADORES</H2>

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



<h2>FACTORY FUNCTIONS</h2>

      function realizarCadastro(nome,email,endereco){
        return{
            nome,             (QUANDO NOME DA VARIAVEL É IGUAL O 
            email,                NOME DO PARAMETRO NAO PRECISA 
            endereco,                nome = nome, )
            dados(){
                console.log("Cadastro realizado")
            }
        }
      }  

      const pessoa1 = realizarCadastro ('Douglas', 'douglas@email', 'rua ...')



<h2>CONSTRUCTOR FUNCTIONS</h2>

      function Cadastro(nome,email,endereco){       
          this.nome = nome,          
          this.email = email,
          this.endereco = endereco,
            this.dados(){
                console.log("Cadastro realizado")
           
        }
      }  

      const pessoa1 =  new Cadastro ('Douglas', 'douglas@email', 'rua ...')



<h2>MATH</h2>

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math



<h2>STRING</h2>

    const mensagem = 'mensagem'                     // tipo primitvo
    const outraMensagem = new String('mensagem')    // tipo objeto



<h2>TEMPLATE LITERAL</h2>

        Ao usar os caracteres `` (acento circunflexo invertido), a frase nao muda 
    mesmo contendo caracteres especiais.



<h2>DATE</h2>

    const dataAtual = new Date();                    // caso nao seja passado os parametros, será usado a data atual
    const data = new Date('March 06 2019 09:30');    // data desejada
    const data2 = new Date(2019, 03,06, 9, 40);      // o objeto ja será passado com a data ajustada


<h2>INPUT DO USUARIO</h2>

let CorFavorita = prompt ('pergunta para o usuario')
