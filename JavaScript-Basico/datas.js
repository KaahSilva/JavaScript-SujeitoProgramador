//--------horas, minutos e segundos----

let data = new Date();// informa a data e a hora
console.log(data)

data.getHours();// informa apenas as horas

data.getMinutes(); // informa apenas os minutos

data.getSeconds();// informa apenas os segundos

data.getMilliseconds(); // informa os milesegundos

let datanova = new Date("March 10 , 2023")// data passando o valor
console.log(datanova)

Date.parse(datanova)//converter uma data em milesegundos
new Date();//posso tambem pegar o resultado dos miesegundos e transformar em data, dentro dos parenteses vai os milesegundos

//----- datas-----
datanova.getDate(); //informa apenas o dia

datanova.getMonth(); //informa o mes OBS: para pegar o mes é necessario somar+1 porque começa com 0

datanova.getDay();// informa o dia da semana. OBS: sempre começa no domindo , ficando assim domingo sendo 0

datanova.getFullYear() ;// informa ano

//------formatar as datas-----

datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear(); // o +1 foi adicionado para que o mes fique correto , pois janeiro começa com 0 e não com 1

datanova.setDate(datanova.getDay()+5); // assim consigo somar 5 dias na data . O set é que ira incrementar a data
console.log(datanova);

datanova.setHours(datanova.getHours()+20);// acrescentando 20 horas na data atual. pra ver o resultado chamar datanova

//-----mostrar o dia da semana----
datanova.getDay();
var dias = ['Domingo', 'Segunda', 'Terça','Quarta', ' Quinta', 'Sexta', 'Sabado'];

dias[datanova.getDay()];
console.log(`Hoje é ${dias [datanova.getDay()]}`);