# At-rules

* Está relacionado ao comprtamento do CSS
* começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

-@import        /* incluir um CSS externo */
- @media        /* regras condicionais para dispositivos*/
- @font-face    /* fontes externas */
- @keyframes    /* Animation */

```css
@import url("http://local.com/style.css");
@import "http://local.com/style.css";

@media (in-widht: 500px) {
    /* rules here*/
}

@font-face {
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}