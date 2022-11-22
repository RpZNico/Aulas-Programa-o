// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number). Retorne true se a imagem estiver no modo paisagem

/* 
function ePaisagem (largura, altura) {
    if (largura > altura) {
    return true;
} else {
    return false
}
} */

/* 
function ePaisagem (largura, altura) {
     return largura > altura ;
    
} */

const ePaisagem = (largura, altura) => largura > altura ;
   


console.log(ePaisagem(1924, 1080));