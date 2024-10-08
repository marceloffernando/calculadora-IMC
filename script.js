
const form = document.querySelector('#formulario')

form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    
    if(!peso){
        setResultado('peso invalido', false);
        return
    }
    if(!altura){
        setResultado('altura invalida', false);
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getnivelImc(imc)
    
    const msg = `Seu IMC é ${imc} (${nivelImc})`
    setResultado(msg, true)
  
});

function getImc (peso, altura){ 
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getnivelImc(imc){ 
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']
    if(imc >= 39.9){
        return nivel[5]
    } else if(imc >= 34.9){ 
        return nivel[4]
    }if(imc >= 29.9){
        return nivel[3]
    }if(imc >= 24.9){
        return nivel[2]
    }if(imc >= 18.5){
        return nivel[1]
    }if(imc < 18.5){
        return nivel[0]
    }
}
function criap(){ 
    const p = document.createElement('p');
    return p;
}
function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criap()
    p.innerHTML = msg
    resultado.appendChild(p)
}







