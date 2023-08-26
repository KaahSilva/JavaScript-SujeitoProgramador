//WHILE =ENQUANTO
// ele realiza a condição até que ela seja falsa

// let num = 0;
// while (num<=10){
//     document.write("<br> O valor é " +num)
//     num++
// }
//---------------------------------
//FOR = PARA
// inico, condição,quant de execução 
// let valor = 10
// for(a=0; a< valor; a++){
//     document.write("<br> O valor de A é :"+(a+10));
// }

//---------------------------------
//Swith-CASO
function pedir(){
    var opcao = prompt('Escolha uma opção de 1 a 4')// como o prompt coverte em string precisa-se converter em numero

    switch(Number(opcao)){ // o number faz a conversão para numero
        case 1: 
            alert("Voce escolheu suco")
            break;
        case 2:
            alert("Voce escolheu refri")
            break;
        case 3:
            alert("Voce escolheu soverte")
            break

        case 4:
            alert("Voce escolheu caldo de cana")
            break;
        default:
            alert("escolha uma opção entre 1 a 4")
            break;
    }
}


