## display: block vs display: inline

- Como as caixas se comportam em relação às outras caixas
- Comportamento externo das caixas

|**block**                         |**inline**                     |
|----------------------------------|-------------------------------|
| Ocupa toda a linha, colocando o  | Elemtento ao lado do outro    |   
| próximo elemtento abaixo desse   |                               |
|----------------------------------|-------------------------------|
| width e height são respeitados   | width e height não funcionam  |
|----------------------------------|-------------------------------|
| Padding, margin, border irão     | Somente valores horizontais de|
| Funcionar normalmente.           | margin, padding e border      |
|----------------------------------|-------------------------------|

exemplos
block: `<p> <div> <section>`, todos os headings `<h1><h2>...`
inline: `<a> <strong> <span> <em>`