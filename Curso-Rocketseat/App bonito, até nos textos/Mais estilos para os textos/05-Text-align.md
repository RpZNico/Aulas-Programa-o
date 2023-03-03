# Atribuindo mais estiloas às fontes
https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant


## font-variant

* variações na apresentação das fontes


```css
p{
    font-variant: small-caps;
}
```

-------------------------------------------------------------

## font-stretch

* alargamento ou encolhimento da fonte
* aceita palavra-cahve como: expanded, condensed, normal
* aceita porcentagen de 50% a 200%

```css
p {
    font-stretch: expanded;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

--------------------------------------------------------------------


## Letter spacing

* Espaços entre caracteres

```css
p {
    letter-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

---------------------------------------------------------------------------

## Word-spacing

* Espaços entre palavras

```css
p {
    word-spacing: 4px;
}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing

---------------------------------------------------------------------------

## Line-height

* Espaços enrte linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height

---------------------------------------------------------------------------

## text-transform

* Transforma o texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */

}
```

---------------------------------------------------------------------------

## text-decoration

* Aparencia decorativa de um texto
* line: underline | overline | line-through
    * podemos aplicar masi de 1 valor
* Style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */

}
```
https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

-----------------------------------------------------------------------

## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | center | justify */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

-----------------------------------------------------------------------
