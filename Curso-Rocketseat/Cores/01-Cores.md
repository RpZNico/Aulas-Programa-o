# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos

* Background-color (para caixas)
* color (para textos)
* border-color (para-caixas)
* outros...


## Valores

Podemos definir os valores por

* palavra-chave (blue, transparent)
* hexadecimal (#990011)
* funções: rgb, rgba, hsl, hsla


```css
element {
    /* Keyword values */
    color: currentcolor;

    /* <named-color> values */
    color: red;
    color: orange;
    color: tan;
    color: rebeccapurple;


    /* <hex-color> values 0-f */
    color: #090;    /* RED GREEN BLUE */
    color: #009900;
    color: #090a;
    color: #009900aa;


    /*<rgb()> values */ 
    color: rgb(34, 12, 64, 0.6) /* 0-255 */
    color: rgba(34, 12, 64, 0.6)


    HSL → Hue - Saturation - Lightness
    /* <hsl() values */>
    color: hsl(180, 100%, 50%, 60%)
    color: hsla(180, 100%, 50%, 60%)

}


