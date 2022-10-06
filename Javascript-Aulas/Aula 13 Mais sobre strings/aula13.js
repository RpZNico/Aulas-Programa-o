/* let umaString = "Um \"texto\"";  // pode usar as \ para fazer aparecer as aspas no texto

//               01234567 
let umaString = "Um texto";
console.log(umaString[4]); - Serve para ver o elemento do indice

let umaString = "Um texto";
console.log(umaString.charAt(6)); - Serve também para ver o elemento do indíce

let umaString = "Um texto";
console.log(umaString.lenght); - Mostra o número de unidades de um código

let umaString = "Um texto";
console.log(umaString.concat(' em', ' um', ' lindo dia.')); 
console.log(umaString + ' em um lindo dia.'); - Diferentes modos para concatenar texto
console.log(`${umaString} em um lindo dia.`);



let umaString = "Um texto";
console.log(umaString.indexOf(`o`, 3))   // - Serve para pesquisar por um índex começando pelo 0
console.log(umaString.lastIndexOf(`U`,3))   // - Serve para pesquisar por um índex começando pelo último número



let umaString = "Um texto";   // Expressões regulares, estudar a parte
console.log(umaString.match(/[a-z]/g));  // Com o g, retorna todos os valores em minuscúlo da string
console.log(umaString.match(/[a-z]/)); // Sem o g, retorna o primeiro valor e outros dados



let umaString = "Um texto";  
console.log(umaString.search(/[a-z]/)); // Localiza o primeiro valor de uma string
console.log(umaString.search(/x/)); // Localiza o primeiro valor de uma string


let umaString = "O rato roeu a roupa do rei de roma.";  
console.log(umaString.replace(/r/, 'a')) // Substitui o primeiro valor encontrado na string ou todos com o RegExp




let umaString = "O rato roeu a roupa do rei de roma."; 
console.log(umaString.slice(-5));  // Ele pega o tamanho total em caracteres  menos o que voce ta pedindo
console.log(umaString.slice(32)); // Começa do 32 e vai ate o final



let umaString = "O rato roeu a roupa do rei de roma."; 
console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length -5, umaString.length -1));  // Faz a mesma coisa do slice




console.log(umaString.split(' ', 5)); // reparte o texto com base na sua especificação


*/
let umaString = "O rato roeu a roupa do rei de roma."; 
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());