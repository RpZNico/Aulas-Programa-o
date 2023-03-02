# Trabalhando com fontes

Tipografia tansmite mensagem

    - negrito
    - tamanho
    - estilo

------------------------------------------------

## Basic Font Properties

* font-family
* font-weight
* font-style
* font-size

----------------------------------------------------

## Font Family

* Tipo de fonte de um elemento
* Lista de fontes e ordem de prioridade
* inclui fallback font

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

    - serif
    - sans

------------------------------------------------------------

## Font Weight

* Peso da fonte

```css
p{
  font-weight:bold;
}
```

/*  https://www.w3.org/TR/css-fonts-3/ */ 

-------------------------------------------------------

## Font Style

* O estilo da fonte

````css
span {
  font-style: italic;
}
````

----------------------------------------------------------

## Font Size

* O tamanho da fonte 

```css
p {
  font-size: 18px;
}
```

-------------------------------------------------------------

## Web Fonts

- fontes do sistema x fontes da web
- como usar a fonte da web?

  * @font-face
  * @import
  * link

### Referências

https://fonts.google.com/
https://css-tricks.com/snippets/css/using-font-face-in-css/