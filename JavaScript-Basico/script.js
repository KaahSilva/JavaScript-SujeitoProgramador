let area = document.getElementById('area');

function entrar(){
    let nome= prompt("Digite seu nome: ");
    let sobrenome= prompt("Digite seu sobrenome:");

    if (nome === '' || nome === null){
        alert('Opps Algo deu errado!!')
        area.innerHTML = "Clique no botão para acessar"
    }else{
        area.innerHTML= ("Bem Vindo " + nome + "" + sobrenome + "");

        let botaoSair = document.createElement("button");
        botaoSair.innerHTML = "Sair da conta";
        botaoSair.onclick = sair; // aqui ele chama a função sair()
        area.appendChild(botaoSair); //aqui ele adiciona dentro do h1 o botão sair 
    }

}

function sair(){
    alert('ATE MAIS!!');
    area.innerHTML="Voce saiu!";
}

