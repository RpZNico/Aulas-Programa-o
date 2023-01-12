# Strings e identificadores

* Strings: texto em volto em aspas
* Identificadores: red, black, gold;



body {
  height: 100vh;
  margin: 0;
  padding: 0;
}


.box {
  height: calc(100% - 40px);
  width: 100%;
  background-image: url(http://source.unsplash.com/random);
  background-repeat: no-repeat;
  background-position: right 50px;
}

.box::after {
  content: "Aqui vem alguma mensagem";
    color: black;
}