let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []; // o localStorage.getItem("@listaTarefas" ele busca la no localstorage o que tem la
// o JSON.parse converte novamente para um array

// o || []; é para aqueles que vem vazio 


function renderTarefas(){
    listElement.innerHTML="";
    
    tarefas.map((todolist)=>{
        let liElement = document.createElement("li");// createElement serve para criar elementos seja ele html entre outros
        let tarefaText= document.createTextNode(todolist); //cria o texto  que estou recebendo e criando dentro da variavel tarefaText . Se o primeiro texto digitado for coca , ele recebe ele e guarda na variavel , ate o final da lista. Preciso adicionar ele dentro da listElement.innerHTML=""; 

        let linkElement = document.createElement("a"); //cria a ancora <a>
        linkElement.setAttribute("href" , "#"); // cria os atributos dela o href e # que n leva a lugar nenhum a principio

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText)// pega o texto 'Excluir' dentro da tag de <a>

        let posicao= tarefas.indexOf(todolist); // ele olha na 'tarefas' que é nosso array onde tem td a lista, verifica com indexOf se o item está na lista 

        linkElement.setAttribute("onclick" , `deletarTarefa(${posicao})`) // ele vai passar a ação de click do botão e chamar a função deletarTarefa e passa a posição

        liElement.appendChild(tarefaText);; // adicionei dentro da li o texto
        liElement.appendChild(linkElement)// para aparecer o link
        listElement.appendChild(liElement)// colocando a li dentro da ul pra formar a lista







        // console.log("Tarefas : " + todolist);
    }) // uma arrow funcion que usa o map usando o parametro para pegar a ordem o array tarefas  para mostrar
    
        

    
    

}

renderTarefas()

function adicionarTarefas(){
    //verifica se o usuario digitou algo
    if(inputElement.value === ''){
        alert("Digite alguma tarefa");
        return false; // para a execução para não prosseguir  com o if
    }else{
        let novaTarefa = inputElement.value; // criou uma variavel para armazenar oque recebe dentro do input
        tarefas.push(novaTarefa); // acrescenta dentro do array tarefas o valor que o usuario digitou dentro do input atraves da variavel novaTarefa

        inputElement.value='';


        renderTarefas(); 
        salvarDados();// precisa salvar

    }
}

buttonElement.onclick= adicionarTarefas; // ação quaando clica para rodar a função

function deletarTarefa(posicao){ //recebe a posição
    tarefas.splice(posicao ,1);
    renderTarefas();
    salvarDados();// salva os dados
}

function salvarDados(){ // salva no navegador
    localStorage.setItem("@listaTarefas" ,  JSON.stringify(tarefas));// salva no localstorage. Primeiro a chave para buscar os itens que estão salvos, segundo o valor que voce quer salvar
    //OBS: o localstorage salva textos ele não salva array, por isso utiliza o Json para converter uma lista ppara string
}