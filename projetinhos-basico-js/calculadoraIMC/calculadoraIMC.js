let peso ;
let altura ;
let imc ;
let resultado;

function calcular(event){
    event.preventDefault(); // ele previne que os resultados não sumam quando voce tem algum alerta na pagina
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso /(altura*altura);

    resultado = document.getElementById('resultado');
    

    if (imc < 17 ){ //
        resultado.innerHTML ='<br/> O seu imc foi : '+ imc.toFixed(2)+'<br/> Voce está muito abaixo do peso'
    }else if(imc >= 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML ='<br/> O seu imc foi : '+ imc.toFixed(2)+'<br/> Voce está abaixo do peso ideal'
    }else if(imc >=18 && imc <=24.99){
        resultado.innerHTML ='<br/> O seu imc foi : '+ imc.toFixed(2)+'<br/> Voce está no peso normal'

    }else if(imc >=25 && imc <=29.99){
        resultado.innerHTML ='<br/> O seu imc foi : '+ imc.toFixed(2)+'<br/> Voce está acima do peso'

    } else if(imc >=30){
        resultado.innerHTML ='<br/> O seu imc foi : '+ imc.toFixed(2)+'<br/> Voce está na obesidade'
    }

    document.getElementById('peso').value='';
    document.getElementById('altura').value='';
}