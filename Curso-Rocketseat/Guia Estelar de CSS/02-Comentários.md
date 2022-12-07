# Comentários

* Nãi irá afetar o seu código
* Ajuda a lembrar blocos de códigos
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunca esqueça de fecar um comentário aberto

Comentários começam com /* e terminam com */

```css

/* básico */
/* ------------------------- */

body {
    font: 1em/150% helvetica, Arial, sans-serif;
    padding: 1em;
    margin 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    /* let´s special case the global font size. On large screen or window, we increse the font size for better readability */
}
    body {
        font-size: 130%;
    }
h1 { font-size: 1.5em;;}

/* Elementos específicos */
/* ------------------------------------- */

div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p {
    margin: 0;
    padding: 1em;
}


div p + p {
    padding-top: 0;

}

* Você poderá usar para desabilitar partos do seu código 