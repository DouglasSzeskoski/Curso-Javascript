verificarVelocidade (130);

function verificarVelocidade(velocidade){

    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    const maximoPontos = 12;

    if (velocidade <= velocidadeMaxima){
        console.log ('Voce está no limite de velocidade')
    }else{
        pontosCarteira = Math.floor((velocidade - velocidadeMaxima)/KmPorPonto);
        
        
        if (pontosCarteira >= maximoPontos){
            console.log ('Você perdeu sua carteira')
        }else{
            console.log ('Voce recebeu', pontosCarteira, 'pontos na carteira');
        }
    }

    

}