//Objetos
// dentro do objeto existe as propiedades 

// Métodos e propriedades não são a mesma coisa. Métodos são ações que um objeto pode executar, como adicionar, remover ou calcular algo. Propriedades são características de um objeto, como cor, tamanho ou valor.


let pessoa = {
    nome: 'kalline',
    idade: 22,
    altura: 1.56
};

let carro = {
    nome : 'golf 1.6',
    cor: 'vermelho',
    potencia: '140cv'

};

console.log(carro)
//carro.potencia isso eu chamaria individualmente  

//Objeto dentro de um array
//Array de objetos , começa pela posição 0

let usuarios =[
    {nome: 'Matheus' , cargo:'Fullstack' , status:'Ativo'},
    {nome:'kalline', cargo : 'FrontEnd', status: 'Ativo'},
    {nome:'lucas' , cargo :'Programador Mobile' , status:'Ativo'}
]

console.log(usuarios) // tras toda a lista
usuarios[0] // acessa atraves da posição e traz tada a informação da posiçaõ 0

usuarios[1].cargo // pega apenas a propiedade


