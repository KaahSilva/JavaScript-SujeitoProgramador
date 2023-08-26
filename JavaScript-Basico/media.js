function media(nota1, nota2){
    let media =( (nota1+nota2)/2 );

    if(media >=7){
        console.log("Aluno aprovado com a media " + media);
    }else if(media < 7){
        console.log("Aluno reprovado com a media " + media);
    }
    
}

let resposta = media(5,4);
console.log(resposta);

function aluno(nome, curso){
    let mensagem = "Seja Bem vindo "+ nome +" ao curso de"+ curso;
    console.log(mensagem);
}
let mensagem = aluno('kalline', 'JavaScript');