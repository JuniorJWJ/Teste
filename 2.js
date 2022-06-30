//array
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
//variáveis
var num_itens = 1000
var i = 2
//número informado
var num_informado = 54 
while(  i < num_itens ){
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    i += 1
}
console.log((fibonacci.includes(num_informado)))
