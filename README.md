<h3>DEFINIÇÃO DE VARIAVEIS</h3>

    let idade = 5
    console.log(idade);
    let altura = 180;
    console.log(altura);

 <h4>DEFINIÇÃO DE VARIAVEIS</h4>
 
    let nome = 'Douglas';     // String literal 
    let idade = 25;           // number literal
    let estaAprovado = true;  // boolean 
    let sobrenome ;           // Undefined

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


<h3>FACTORY FUNCTIONS</h3>

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


<h3>CONSTRUCTOR FUNCTIONS</h3>

      function Cadastro(nome,email,endereco){       
          this.nome = nome,          
          this.email = email,
          this.endereco = endereco,
            this.dados(){
                console.log("Cadastro realizado")
           
        }
      }  

      const pessoa1 =  new Cadastro ('Douglas', 'douglas@email', 'rua ...')
