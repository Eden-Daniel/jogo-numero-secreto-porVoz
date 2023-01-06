function verificaSeChuteValido(chute){
    const numero = +chute;

    if(newFunction(numero)){
        elementoChute.innerHTML = `
        <div>Inválido</div>
        <span class="box">Diga apenas <strong>Números</strong></span>
        `
        return;
    }

    if(numeorMaiorOuMenor(numero)){
        elementoChute.innerHTML += '<div>Número invalido!, fale entre os valores permitido.</div>'
        return;

    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
            ` 
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {    
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function newFunction(numero) {
    return Number.isNaN(numero);
}

function numeorMaiorOuMenor(numero){
   return numero > maiorValor ||  numero < menorValor;
}

document.body.addEventListener('click', evento => {
    if(evento.target.id == "jogar-novamente"){
        window.location.reload();
    }
})
