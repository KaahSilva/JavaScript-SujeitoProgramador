// function acao(){
//     document.write('teste <br/>');

// }

// setInterval(acao, 1000);


// arrow function
var timer = setInterval( (  ) => {
    document.write('testeee<br/>');

} , 1000 );

clearInterval(timer); // pausa a ação 

//SETTIMEOUT
function novaAcao(){
    document.write('teste002 <br/>');
}
setTimeout(novaAcao , 3000) // executa a ação somente uma unica vez , com base no minuto que voce colocou como parametro 

